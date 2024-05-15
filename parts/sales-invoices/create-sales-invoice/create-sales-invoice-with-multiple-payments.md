# Create Sales Invoice with multiple payments

## Endpoints
<!--@include: @/dist/md/api_url.md-->v1/sendinvoice2`

## Query Payload

:::info Example:

```json
{
  "InvoiceNo": "123",
  "TaxAmount": [
    { 
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0", 
      "Amount": 400.00 
    }
  ]
}
```
:::

|Field|Type|Comment|
|-----|----|-------|
|Customer|CustomerObject||
|DocDate|Date||
|DueDate|Date||
|TransactionDate|Date||
|InvoiceNo|Str 35|Required|
|RefNo|Str 36||
|CurrencyCode|Str 4||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|ProjectCode|Str 20|If used then must be found in the company database.|
|InvoiceRow|Array of InvoiceRow objects||
|TaxAmount|Array of VAT objects|Required|
|RoundingAmount|Decimal 18.2|Use it for getting PDF invoice to round number. Does not affect TotalAmount.|
|TotalAmount|Decimal 18.2|Amount without VAT|
|Payments|Array of Payment objects||
|RefNo|String 36|Please validate this number yourself.|
|Hcomment|String 4K|If not specified, API will get it from the client record, if it's written there.|
|Fcomment|String 4K|If not specified, API will get it from the client record, if it's written there.|

## CustomerObject

3 use cases:

1. new customer – you will create new client record when this name was not found

2. existing customer by name – if this name exists in our system, Merit will take info from client record instead of reading it from the payload

3. customer by ID – every time you add new customer, the CustomerId is returned, you can use this ID instead of name, the object = { CustomerId: \<guid-of-the-customer } 

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.|
|Name|Str 150|Required when customer is added|
|RegNo|Str 30||
|NotTDCustomer|Bool|Required when customer is added. EE True for physical persons and foreign companies. PL True for physical persons. Allowed "true" or "false" (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 30||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|RefNoBase|Str 36||
|Address|Str 100||
|CountryCode|Str 2|Required when adding|
|County|Str 100||
|City|Str 30||
|PostalCode|Str 15||
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
|SalesInvLang|Str 8|Invoice language for this specific customer.(`ET`, `EN`, `RU`, `FI`, `PL`, `SV`)|
|Contact|Str 35||
|GLNCode|Str 10||
|PartyCode|Str 20||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank (full extent E-invoice), 4- Bank (limited extent E-invoice)|
|EInvPaymId|Str 20||
|BankAccount|Str 50||
|Dimensions|Array of DimensionsObjects||
|CustGrCode|Str 20||
|ShowBalance|Bool||
|ApixEinv|Str 20||
|GroupInv|Bool||

## InvoiceRowObject

Every invoice has its rows. Row has its quantity and price, it also has its general ledger record and that’s why it has its own tax calculation. 

|Field|Type|Comment|
|-----|----|-------|
|Item|ItemObject|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate. <br><br> Items with different VAT rates must have different item codes.<br><br>Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.|
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|DiscountPct|Decimal 18.2||
|DiscountAmount|Decimal 18.2|Amount * Price * (DiscountPCt / 100). This is not rounded. Will be substracted from row amount before row roundings.|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|String 10|If used, must be found in the company database.|
|Dimensions|Array of DimensionsObjects||
|ItemCostAmount|Decimal 18.2|Required for credit invoices when crediting stock items.|
|VatDate|Date String|YYYYMMDD type date. In some countries where you have to specify VatDate.|
|SalesAccCode|String 10|If included GLAccountCode then the SalesAccCode not used|
|PurchaseAccCode|String 10||
|InventoryAccCode|String 10||
|CostAccCode|String 10||

## ItemObject

|Field|Type|Comment|
|-----|----|-------|
|Code|Str 20|Required|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required for all stock items.|

## PaymentObject

You can mark the invoice already paid.

|Field|Type|Comment|
|-----|----|-------|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|

## TaxObject

Every invoice has section of taxes. Those taxes have to be calculated grouped and summed by TaxId. Every row has its own tax calculation, you have to group and sum them up.

This is because you can have different tax rates for different articles.

API always counts it as well to assure you have correct calculation.

|Field|Type|Comment|
|-----|----|-------|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||

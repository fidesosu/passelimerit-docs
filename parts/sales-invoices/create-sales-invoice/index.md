# Create Sales Invoice
---
  - [Create Sales Invoice v1](#endpointsv1)
  - [Create Sales Invoice v2](#endpointsv2)
---
# Endpoints v1 {#endpointsv1}
<!--@include: @/dist/md/api_url.md-->v1/sendinvoice`
::: info NOTE:
V2 should be used when willow dimensions ase used.
:::

## Query Payload

[Example payload 1: payload only](./example-create-sales-invoice.md)

[Example payload 2: PHP example with sending](./example-create-sales-invoice-in-php.md)
:::details Click to see the Query Payload parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Customer|[CustomerObject](#customerObject)||
|AccountingDoc|Int 1|Values: 1 faktura, 2 rachunek, 3 paragon, 4 nodoc, 5 credit, 6 prepinvoice, 7 fincchrg, 8 delivorder, 9 grpinv||
|ProcCodes|Array of Strings|Poland only. Values: SW, EE, TP, TT_WNT, TT_D, MR_T, MR_UZ, I_42, I_63, B_SPV, B_SPV_DOSTAWA, B_MRV_PROWIZJA, MPP||
|PolDocType|Int|Poland only. Values: 1-RO, 2 - WEW, 3 - FP, 4 - OJPK||
|DocDate|Date|||
|DueDate|Date|||
|TransactionDate|Date|||
|InvoiceNo|Str 35||Required|
|RefNo|Str 36|If not specified, generated automatically. Please validate this number yourself.||
|CurrencyCode|Str 4|||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|ProjectCode|Str 20|If used then must be found in the company database.||
|InvoiceRow|Array of InvoiceRow objects|||
|TaxAmount|Array of VAT objects||Required|
|RoundingAmount|Decimal 18.2|Use it for getting PDF invoice to round number. Does not affect TotalAmount.||
|TotalAmount|Decimal 18.2|Amount without VAT||
|Payment|Payment object|||
|Hcomment|String 4K|If not specified, API will get it from client record, if it is written there.||
|Fcomment|String 4K|If not specified, API will get it from client record, if it is written there.||
|ContractNo|String 35|Contract number with operator||
|PDF|String 4K|Pdf file in Base64 format||
:::
## CustomerObject {#customerObject}

3 use cases:

  1. new customer – you will create new client record when this name was not found
  2. existing customer by name – if this name exists in our system, Merit will take info from client record instead of reading it from the payload.
  3. customer by ID – every time you add new customer, the CustomerId is returned, you can use this ID instead of name, `the object = { CustomerId: <guid-of-the-customer> }`.

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "Customer": {
    "Name": "FirstCustomer Inc",
    "RegNo": "1122334755",
    "NotTDCustomer": false,
    "VatRegNo": "11222344",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "RefNoBase": 1,
    "Address": "Merimiehenkatu 31",
    "CountryCode": "FI",
    "County": "Finland",
    "City": "Helsinki",
    "PostalCode": "",
    "PhoneNo": "6548765",
    "PhoneNo2": "",
    "HomePage": "",
    "Email": "customermail@gmail.com"
  },
}
```
:::

:::details Click to see the CustomerObject parameters
|Parameter|Type|Comment|Required|
|---------|----|-------|--------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.||
|Name|Str 150|Required when customer is added||
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when customer is added. <br><br>- EE True for physical persons and foreign companies. <br><br> - PL True for physical persons. Allowed "true" or "false" (lowercase).|Required?|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|Address|Str 100|||
|City|Str 30|||
|County|Str 100|||
|PostalCode|Str 15|||
|CountryCode|Str 2|Required when adding|Required?|
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific customer. (ET, EN, RU,FI,PL,SV)||
|RefNoBase|Str 36|||
|EInvPaymId|Str 20|||
|EInvOperator|Int|1 - Doesn't exist, <br>2 - E-invoices to the bank through Omniva, <br>3 - Bank ( full extent E-invoice), <br>4 - Bank (limited extent E-invoice)||
|BankAccount|Str 50|||
|Contact|Str 35|||
|ApixEinv|Str 20|||
|GroupInv|Bool|||
:::

## InvoiceRowObject {#invoicerowobject}

Every invoice has its rows. Row has its quantity and price, it also has its general ledger record and that's why it has its own tax calculation. 

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "InvoiceRow": [
    {
      "Quantity": 2.00,
      "Price": 1000.00,
      "DiscountPct": 0,
      "DiscountAmount": 0.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
}
```
:::

:::details Click to see the InvoiceRowObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Item|[ItemObject](#itemObject)|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate. Items with different VAT rates must have a different item codes. Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.||
|Quantity|Decimal 18.3|||
|Price|Decimal 18.7|||
|DiscountPct|Decimal 18.2|||
|DiscountAmount|Decimal 18.2|Amount * Price * (DiscountPCt / 100). This is not rounded. Will be subtracted from row amount before row roundings.||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed||
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|ItemCostAmount|Decimal 18.2|Required for credit invoices when crediting stock items.||
|GLAccountCode|String 10|If used, must be found in the company database.||
|ProjectCode|String 20|If used, must be found in the company database.||
|CostCenterCode|String 20|If used, must be found in the company database.||
|VatDate|Date String|YYYYMMDD type date. In some countries where you have to specify VatDate.||
:::

## ItemObject {#itemObject}

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "InvoiceRow": [
    {
      "Item": {                             // [!code focus:6]
        "Code": "1234567",                  
        "Description": "Bag of goldflakes", 
        "Type": 3,                          
        "UOMName": "kg"                     
      },                                    
      // ...
    }
  ],
}
```
This needs to be inside the [InvoiceRowObject](#invoicerowobject).
:::

:::details Click to see the ItemObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Code|Str 20||Required|
|Description| Str 100||Required|
|Type|Int|1 = stock item, 2 = service, 3 = item.|Required|
|UOMName|Str 64|Name for the unit||
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required for all stock items.||
|GTUCode|Int|Poland only, values: 1-13||
:::

## PaymentObject

You can mark the invoice already paid. This is useful when you create invoice only when internet bank payment is successful, or you have received cash.

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "Payment": {
    "PaymentMethod": "Nordea",
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
  },
}
```
:::

:::details Click to see the PaymentObject parameters
|Field        |Type         |Comment                                                            |	 
|-------------|-------------|-------------------------------------------------------------------|
|PaymentMethod|Str 150      |Name of the payment method. Must be found in the company database. |	
|PaidAmount   |Decimal 18.2 |Amount with VAT (not more) or less if partial payment              |	
|PaymDate     |Date         |YYYYmmddHHii                                                       |
:::

## TaxObject

Every invoice has section of taxes. Those taxes have to be calculated grouped and summed by TaxId. Every row has its own tax calculation, you have to group and sum them up.

This is because you can have different tax rates for different articles.

API always counts it as well to assure you have correct calculation.

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
    }
  ],
}
```
:::

:::details Click to see the TaxObject parameters
|Field	|Type	        |Comment	                                                |
|-------|-------------|---------------------------------------------------------|
|TaxId  |Guid         |Required. Use gettaxes endpoint to detect the guid needed|
|Amount |Decimal 18.2 |	                                                        |
:::
---
# Endpoints v2 {#endpointsv2}

<!--@include: @/dist/md/api_url.md-->v2/sendinvoice`

## Query Payload

:::details Click to see the Query Payload parameters
|Field          |Type                       |Comment                                                                          |	 
|---------------|---------------------------|---------------------------------------------------------------------------------|
|Customer	      |[CustomerObject](#customerObject2)|                                                                          |		
|AccountingDoc  |Int 1                      |Values: 1 faktura, 2 rachunek, 3 paragon, 4 nodoc, 5 credit, 6 prepinvoice, 7 fincchrg, 8 delivorder, 9 grpinv	|
|DocDate        |Date	                      |	                                                                                |
|DueDate        |Date	                      |	                                                                                |
|TransactionDate|Date	                      |	                                                                                |
|InvoiceNo      |Str 35                     |Required	                                                                        |
|CurrencyCode	  |Str 4	                    |	                                                                                |
|CurrencyRate	  |Decimal 18.7	              |If the exchange rate is not included, we will take it from the EU central bank's request for the respective date                                                                                                           |	 
|DepartmentCode	|Str 20	                    |If used then must be found in the company database.                              |
|Dimensions	    |Array of Dimensions objects|	                                                                                |
|InvoiceRow	    |Array of InvoiceRow objects|	                                                                                |
|TaxAmount	    |Array of VAT objects	      |Required                                                                         | 	
|RoundingAmount |Decimal 18.2               |Use it for getting PDF invoice to round number. Does not affect TotalAmount.     |	
|TotalAmount	  |Decimal 18.2	              |Amount without VAT	                                                              |
|Payment	      |Payment object	            |                                                                                 |
|RefNo          |String 36                  |If not specified, generated automatically. Please validate this number yourself. |
|Hcomment	      |String 4K	                |If not specified, API will get it from client record, if it is written there.    |
|Fcomment	      |String 4K	                |If not specified, API will get it from client record, if it is written there.    |
|ReserveItems   |Bool	                      |	                                                                                |
|ContractNo	    |String 35	                |Contract number with operator	                                                  |
|PDF	          |String 4K	                |Pdf file in Base64 format	                                                      |
|FileName       |String 100	                |Name of PDF file                                                                 |
|Payer          |PayerObject 	              |                                         	                                      |
|DeliveryType	  |Bool                       |	                                                                                |
:::

## CustomerObject {#customerObject2}

3 use cases:

  1. new customer – you will create new client record when this name was not found
  2. existing customer by name – if this name exists in our system, Merit will take info from client record instead of reading it from the payload
  3. customer by ID – every time you add new customer, the CustomerId is returned, you can use this ID instead of name, `the object = { CustomerId: <guid-of-the-customer> }`.

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "Customer": {
    "Name": "FirstCustomer Inc",
    "RegNo": "1122334755",
    "NotTDCustomer": false,
    "VatRegNo": "11222344",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "RefNoBase": 1,
    "Address": "Merimiehenkatu 31",
    "CountryCode": "FI",
    "County": "Finland",
    "City": "Helsinki",
    "PostalCode": "",
    "PhoneNo": "6548765",
    "PhoneNo2": "",
    "HomePage": "",
    "Email": "customermail@gmail.com"
  },
}
```
:::

:::details Click to see the CustomerObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields. ||
|Name|Str 150|Required when customer is added ||
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when a new customer is added. <br><br>- EE True for physical persons and foreign companies. <br><br>- PL True for physical persons. Allowed "true" or "false" (lowercase).|Required?|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|RefNoBase|Str 36|||
|Address|Str 100|||
|CountryCode|Str 2|Required when adding a new customer|Required?|
|County|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)||
|Contact|Str 35|||
|GLNCode|Str 10|||
|PartyCode|Str 20|||
|EInvOperator|Int|1 - Not exist, <br>2 - E-invoices to the bank through Omniva, <br>3 - Bank ( full extent E-invoice), <br>4 - Bank (limited extent E-invoice)||
|EInvPaymId|Str 20|||
|BankAccount|Str 50|||
|Dimensions|Array of DimensionsObjects||
|CustGrCode|Str 20|||
|ShowBalance|Bool|||
|ApixEinv|Str 20|||
|GroupInv|Bool|||
:::

## InvoiceRowObject

Every invoice has its rows. Row has its quantity and price, it also has its general ledger record and that's why it has its own tax calculation. 

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "InvoiceRow": [
    {
      "Quantity": 2.00,
      "Price": 1000.00,
      "DiscountPct": 0,
      "DiscountAmount": 0.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
}
```
:::

:::details Click to see the InvoiceRowObject parameters
|Field|Type|Comment|
|---|---|---|
|Item|[ItemObject](#itemObject2)|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate. Items with different VAT rates must have different item codes. Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.|
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
:::

## ItemObject {#itemObject2}

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "InvoiceRow": [
    {
      "Item": {                             // [!code focus:6]
        "Code": "1234567",                  
        "Description": "Bag of goldflakes", 
        "Type": 3,                          
        "UOMName": "kg"                     
      },                                    
      // ...
    }
  ],
}
```
---
This needs to be inside the [InvoiceRowObject](#invoicerowobject).
:::

:::details Click to see the ItemObject parameters
|Field|Type|Comment|
|---|---|---|
|Code|Str 20|Required|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required for all stock items.|
:::

## PaymentObject

You can mark the invoice already paid. This is useful when you create invoice only when internet bank payment is successful, or you have received cash

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "Payment": {
    "PaymentMethod": "Swedbank",
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
  },
}
```
:::

:::details Click to see the PaymentObject parameters
|Field|Type|Comment|
|---|---|---|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|
:::

## TaxObject

Every invoice has section of taxes. Those taxes have to be calculated grouped and summed by TaxId. Every row has its own tax calculation, you have to group and sum them up.

This is because you can have different tax rates for different articles.

API always counts it as well to assure you have correct calculation.

:::info JSON Snippet - [Full Example](./example-create-sales-invoice.md)
```json
{
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
    }
  ],
}
```
:::

:::details Click to see the TaxObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|TaxId|Guid|Use `gettaxes` endpoint to detect the guid needed|Required|
|Amount|Decimal 18.2|||
:::

## DimensionsObject

:::details Click to see the DimensionsObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|DimId|Int|||
|DimValueId|Guid|||
|DimCode|Str|||
:::

## PayerObject

:::details Click to see the PayerObject parameters
|Field|Type|Comment|
|---|---|---|
|Id|Guid|If filled and payer (customer) is found in the database then following fields are not important. If not found, the payer is added using the following fields.|
|Name|Str 150|Required when payer is added|
|RegNo|Str 30||
|NotTDCustomer|Bool|Required when payer is added. True for physical persons and foreign companies. Allowed "true" or "false" (lowercase).|
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
|SalesInvLang|Str 8|Invoice language for this specific payer.(ET,EN,RU,FI,PL,SV)|
|Contact|Str 35||
|GLNCode|Str 10||
|PartyCode|Str 20||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|EInvPaymId|Str 20||
|BankAccount|Str 50||
|Dimensions|Array of DimensionsObject||
|CustGrCode|Str 20||
|ShowBalance|Bool||
:::

## Successful Result
:::info JSON Result
```json
{
  "CustomerId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
  "InvoiceId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "InvoiceNo": "BL942019-PGG",
  "RefNo": "xxxxxxx",
  "NewCustomer": null
}
```
:::
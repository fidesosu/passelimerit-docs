# Create Sales Offer
---
- [Create Sales Offer v1](#salesOfferV1)
- [Create Sales Offer v2](#salesOfferV2)
## Endpoints v1 {#salesOfferV1}

<!--@include: @/dist/md/api_url.md-->v1/sendoffer`

## Query Payload

Example payload: example send offer

:::info 
```json
{
  "Customer": {
    // ...
  },
  "DocDate": "20200602",
  "ExpireDate": "20200602",
  "DeliveryDate": "20200606",
  "DocType": 2,
  "DocStatus": 3,
  "OfferNo": "MPO-2001",
  "RefNo": "123456",
  "CurrencyCode": "EUR",
  "DepartmentCode": "1000",
  "OfferRow": [
    // ...
  ],
  "TaxAmount": [
    // ...
  ],
  "TotalAmount": 100.0, 
  "Hcomment": "säilivusaja tekst",
  "Fcomment": "Kauba kohaletoimetamise tekst",
  "ContactInfo": "Helista teisipäeval telefonile 123456789" 
}
```
:::

:::details Click to see the parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Customer|[CustomerObject](#customeObject)||
|DocDate|Date||
|ExpireDate|Date|if DocType 2 or 3, ExpireDate=DueDate|
|DeliveryDate|Date||
|DocType|Int|1=quote, 2=sales order, 3=prepayment invoice|
|DocStatus|Int|1=created, 2=sent, 3=approved, 4=rejected, 5=comment received, 6=invoice created, 7=canceled|
|OfferNo|Str 35||Required|
|RefNo|Str 36|Please validate this number yourself.|
|CurrencyCode|Str 4||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|ProjectCode|Str 20|If used then must be found in the company database.|
|OfferRow|Array of OfferRow objects||
|TaxAmount|Array of VAT objects|Required|
|RoundingAmount|Decimal 18.2|Use it for getting PDF invoice to round number. Does not affect TotalAmount.|
|TotalAmount|Decimal 18.2|Amount without VAT|
|Payment|Payment object||
|ContactInfo|Str 4K||
|Hcomment|Str 4K|If not specified, API will get it from client record, if it is written there.|
|Fcomment|Str 4K|If not specified, API will get it from client record, if it is written there.|
|ProcCodes|Array of Strings|Poland only. Values: SW, EE, TP, TT_WNT, TT_D, MR_T, MR_UZ, I_42, I_63, B_SPV, B_SPV_DOSTAWA, BMRW_PROWIZJA, MPP|
|PolDocType|Int|Poland only. Values: 1-RO, 2-WEW, 3-FP, 4-OJPK|
|ContactInfo|Str|||
:::

## Customer Object {#customeObject}

3 use cases:
1. new customer – you will create new client record when this name was not found
2. existing customer by name – if this name exists in our system, Merit will take info from client record instead of reading it from the payload.
3. customer by ID – every time you add new customer, the CustomerId is returned, you can use this ID instead of name, the object = { CustomerId: \<guid-of-the-customer }. 

:::info
```json
{
  "Customer": {
    "Name": "Hindre",
    "NotTDCustomer": false,
    "PartyCode": "50055",
    "SalesInvLang": "ET",
    "CountryCode": "EE"
  },
}
```
:::

:::details Click to see the CustomerObject parameters
|Parameter|Type|Comment|Required|
|---------|----|-------|--------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.||
|Name|Str 150|Required when customer is added|Required?|
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when customer is added. EE True for physical persons and foreign companies. PL True for physical persons.  Allowed "true" or "false" (lowercase).|Required?|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|Address|Str 100|||
|City|Str 30|||
|Country|Str 100|||
|PostalCode|Str 15|||
|CountryCode|Str 2|Required when adding|Required?|
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)||
|GLNCode|Str 14|||
|PartyCode|Str 20|||
|RefNoBase|Str 36|||
|EInvPaymId|Str 20|||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice),  4- Bank (limited extent E-invoice)||
|BankAccount|Str 50|||
:::

## OfferRowObject

Every offer has its rows. Row has its quantity and price, it also has its general ledger record and that's why it has its own tax calculation.
:::info
```json
{
  "OfferRow": [
    {
      "Item": {
        "EANCode": "094393450511",
        "Description": "Udupeen Kaup",
        "Type": 3
      },
      "Quantity": 1.0,
      "Price": 100.0,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21"
    }
  ],
}
```
:::

:::details Click to see the OfferRowObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Item|ItemObject|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate.<br><br>Items with different VAT rates must have a different item codes.<br><br>Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.||
|Quantity|Decimal 18.3|||
|Price|Decimal 18.7|||
|DiscountPct|Decimal 18.2|||
|DiscountAmount|Decimal 18.2|Amount * Price * (DiscountPCt / 100). This is not rounded. Will be substracted from row amount before row roundings.||
|TaxId|Guid|||
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|ItemCostAmount|Decimal 18.2|Required for credit invoices when crediting stock items.|Required?|
|GLAccountCode|Str 10|If used, must be found in the company database.||
|ProjectCode|Str 20|If used, must be found in the company database.||
|CostCenterCode|Str 20|If used, must be found in the company database.||
:::

## ItemObject

:::details Click to see the ItemObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Code|Str 20||Required|
|Description|Str 100||Required|
|Type|Int|1 = stock item, 2 = service, 3 = item.|Required|
|UOMName|Str 64|||
|DefLocationCode|Str 20|||
|EANCode|Str 20|||
:::

## PaymentObject

You can mark the invoice already paid. This is useful when you create invoice only when internet bank payment is successful, or you have received cash.

:::details Click to see the PaymentObject parameters
|Field|Type|Comment|
|-----|----|-------|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|
:::

## TaxObject

Every invoice has section of taxes. Those taxes have to be calculated grouped and summed by TaxId. Every row has its own tax calculation, you have to group and sum them up.

This is because you can have different tax rates for different articles.

API always counts it as well to assure you have correct calculation.

:::details Click to see the TaxObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|TaxId|Guid|Use gettaxes endpoint to detect the guid needed|Required|
|Amount|Decimal 18.2|||
:::

## Endpoints v2 {#salesOfferV2}

<!--@include: @/dist/md/api_url.md-->v2/sendoffer`

## Query Payload

:::details Click to see the parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Customer|[CustomerObject](#customerObject2)|||
|DocDate|Date|||
|ExpireDate|Date|if DocType 2 or 3, ExpireDate=DueDate||
|DeliveryDate|Date|||
|OfferNo|Str 35|Recuired||
|DocType|Int|1=quote, 2=sales order, 3=prepayment invoice||
|DocStatus|Int|1=created, 2=sent, 3=approved, 4=rejected, 5=comment received, 6=invoice created, 7=canceled||
|ContactInfo|Str 4K|||
|RefNo|Str 36|Please validate this number yourself.||
|CurrencyCode|Str 4|||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|Dimensions|Array of Dimensions objects|If used then must be found in the company database.||
|OfferRow|Array of OfferRow objects|||
|TotalAmount|Decimal 18.2|Amount without VAT||
|RoundingAmount|Decimal 18.2|Use it for getting PDF invoice to round number. Does not affect TotalAmount.||
|TaxAmount|Array of VAT objects||Required|
|Payment|Payment object|||
|Hcomment|Str 4K|If not specified, API will get it from client record, if it is written there.||
|Fcomment|Str 4K|If not specified, API will get it from client record, if it is written there.||
|ReserveItems|bool|true , false||
|PrepaymPct|Decimal 18.2|||
|Payer|PayerObject|||
:::

## Customer Object {#customerObject2}

3 use cases:
1. new customer – you will create new client record when this name was not found
2. existing customer by name – if this name exists in our system, Merit will take info from client record instead of reading it from the payload.
3. customer by ID – every time you add new customer, the CustomerId is returned, you can use this ID instead of name, the object = { CustomerId: \<guid-of-the-customer }.

:::details Click to see the CustomerObject parameters
|Parameter|Type|Comment|Required|
|---------|----|-------|--------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.||
|Name|Str 150|Required when customer is added|Required?|
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when customer is added. <br><br>EE True for physical persons and foreign companies. <br><br>PL True for physical persons.  <br><br>Allowed "true" or "false" (lowercase).|Required?|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|Address|Str 100|||
|City|Str 30|||
|Country|Str 100|||
|PostalCode|Str 15|||
|CountryCode|Str 2|Required when adding|Required?|
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)||
|GLNCode|Str 14|||
|PartyCode|Str 20|||
|RefNoBase|Str 36|||
|EInvPaymId|Str 20|||
|EInvOperator|Int|1 - Not exist, <br>2 - E-invoices to the bank through Omniva, <br>3 - Bank ( full extent E-invoice),  <br>4- Bank (limited extent E-invoice)||
|BankAccount|Str 50|||
|ShowBalance|Bool|||
:::

## Offer Row Object

Every offer has its rows. Row has its quantity and price, it also has its general ledger record and that's why it has its own tax calculation.

:::details Click to see the OfferRowObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Item|ItemObject|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate.<br><br>Items with different VAT rates must have a different item codes.<br><br>Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.||
|Quantity|Decimal 18.3|||
|Price|Decimal 18.7|||
|DiscountPct|Decimal 18.2|||
|DiscountAmount|Decimal 18.2|Amount * Price * (DiscountPCt / 100). This is not rounded. Will be substracted from row amount before row roundings.||
|TaxId|Guid|||
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|GLAccountCode|Str 10|If used, must be found in the company database.||
|Dimensions|Array of Dimensions objects|If used, must be found in the company database.||
|ItemCostAmount|Decimal 18.2|Required for credit invoices when crediting stock items.|Required?|
|SalesAccCode|Str 10|If included GLAccountCode then the SalesAccCode not used||
|PurchaseAccCode|Str 10|||
|InventoryAccCode|Str 10|||
|CostAccCode|Str 10|||
:::

## ItemObject

:::details Click to see the ItemObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Code|Str 20||Required|
|Description|Str 100||Required|
|Type|Int|1 = stock item, 2 = service, 3 = item.|Required|
|UOMName|Str 64|||
|DefLocationCode|Str 20|||
|EANCode|Str 20|||
:::

## DimensionsObject

:::details Click to see the DimensionsObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|DimId|Int|||
|DimValueId|Guid|||
|DimCode|Str|||
:::

## PaymentObject

You can mark the invoice already paid. This is useful when you create invoice only when internet bank payment is successful, or you have received cash.

:::details Click to see the PaymentObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.||
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment||
|PaymDate|Date|YYYYmmddHHii||
:::

## TaxObject

Every offer has section of taxes. Those taxes have to be calculated grouped and summed by TaxId. Every row has its own tax calculation, you have to group and sum them up.

This is because you can have different tax rates for different articles.

API always counts it as well to assure you have correct calculation.

:::details Click to see the TaxObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|TaxId|Guid|Use gettaxes endpoint to detect the guid needed|Required|
|Amount|Decimal 18.2|||
:::

## PayerObject

:::details Click to see the PayerObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|If filled and payer (customer) is found in the database then following fields are not important. If not found, the payer is added using the following fields.||
|Name|Str 150|Required when payer is added|Required?|
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when payer is added. True for physical persons and foreign companies. Allowed "true" or "false" (lowercase).|Required?|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|RefNoBase|Str 36|||
|Address|Str 100|||
|CountryCode|Str 2|Required when adding|Required?|
|County|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific payer.(ET,EN,RU,FI,PL,SV)||
|Contact|Str 35|||
|GLNCode|Str 10|||
|PartyCode|Str 20|||
|EInvOperator|Int|1 - Not exist, <br>2 - E-invoices to the bank through Omniva, <br>3 - Bank ( full extent E-invoice), <br>4- Bank (limited extent E-invoice)||
|EInvPaymId|Str 20|||
|BankAccount|Str 50|||
|Dimensions|Array of DimensionsObjects|||
|CustGrCode|Str 20|||
|ShowBalance|Bool|||
:::

## Successful Result
- CustomerId
- InvoiceId
- InvoiceNo
- RefNo
- NewCustomer
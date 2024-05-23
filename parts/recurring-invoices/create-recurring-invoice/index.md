# Create Recurring Invoice

## Endpoints:

<!--@include: @/dist/md/api_url.md-->v2/sendperinvoice`

## Query Payload
:::info Minimum Payload
```json
{ 
  "Customer": {
    "Id": "7da4cd44-9b49-4a35-8d1b-f339a68e7058"
  },
  "InvoiceRow": [
    {
      "Item": {
        "Code": "EU-maat tav"
      },
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
    }
  ],
  "StartDate": "20190413",
  "NextDate": "20190414"
}
```

:::details Click to see payload parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Customer|[CustomerObject](#customerObject)||Required|
|Code|Str|||
|DepartmentCode|Str 20|||
|InvoiceNo|Str 35|||
|StartDate|Date||Required|
|EndDate|Date|||
|NextDate|Date||Required|
|CurrencyId|Int|||
|CurrencyCode|Str 4|||
|CurrencyRate|Dec 18.7|||
|HComment|Str 4K|||
|FComment|Str 4K|||
|Cycle|int|1 - month, <br>2 - quarter of a year , <br>3 - year, <br>4 - week||
|Period|int|2 - current period, <br>3 - next period, <br>4 - for the next period, <br>5 - for previous period, <br>6 - current period, less number of cycles||
|PaymentDay|int|||
|PaymentMonth|int|||
|ReferenceNo|Str|||
|PriceInclVat|bool|||
|RoundingPrec|int|||
|RoundingAmount|Dec 18.2|||
|TotalAmount|Dec 18.2|||
|TotalSum|Dec 18.2|||
|PerLen|Int|||
|Dimensions|Array of Dimensions objects|||
|[InvoiceRow](#invoicerowobject)|Array of InvoiceRow objects||Required|
|TaxAmount|Array of VAT objects||Required|
|Payer|[PayerObject](#payerObject)|||
:::

## CustomerObject {#customerObject}

:::info
```json
{ 
  "Customer": {
    "Id": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
    "Name": "FirstCustomer Inc",
    "NotTDCustomer": true,
    "CountryCode": "FI"
  },
  // ...
}
```

:::details Click to see CustomerObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.||
|Name|Str 150|Required when customer is added|Required?|
|RegNo|Str 30|||
|NotTDCustomer|Bool|Required when customer is added. <br><br>EE True for physical persons and foreign companies. <br><br>PL True for physical persons. Allowed "true" or "false" (lowercase).|Required?|
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
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)||
|EInvPaymId|Str 20|||
|BankAccount|Str 50|||
|Dimensions|Array of DimensionsObjects|||
|CustGrCode|Str 20|||
|ShowBalance|Bool|||
|ApixEinv|Str 20|||
|GroupInv|Bool|||
:::

## InvoiceRowObject {#invoicerowobject}

:::info
```json
{ 
  // ...
  "InvoiceRow": [
    {
      "Item": {
        // ...
      },
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
    }
  ],
  // ...
}
```

:::details Click to see InvoiceRowObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Item|[ItemObject](#itemObject)|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate.<br><br>Items with different VAT rates must have a different item codes.<br><br>Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.||
|Quantity|Decimal 18.3|||
|Price|Decimal 18.7|||
|DiscountPct|Decimal 18.2|||
|DiscountAmount|Decimal 18.2|Amount * Price * (DiscountPCt / 100). This is not rounded. Will be substracted from row amount before row roundings.||
|TaxId|Guid|Use gettaxes endpoint to detect the guid needed|Required|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.||
|DepartmentCode|Str 20|If used then must be found in the company database.||
|GLAccountCode|Str 10|If used, must be found in the company database.||
|Dimensions|Array of DimensionsObjects|||
|ItemCostAmount|Decimal 18.2|Required for credit invoices when crediting stock items.|Required?|
|VatDate|Date Str|YYYYMMDD type date. In some countries where you have to specify VatDate.||
|SalesAccCode|Str 10|If included GLAccountCode then  the SalesAccCode not used||
|PurchaseAccCode|Str 10|||
|InventoryAccCode|Str 10|||
|CostAccCode|Str 10|||
:::

## ItemObject {#itemObject}
:::info ItemObject
```json
{ 
  // ...
  "InvoiceRow": [
    {
      "Item": { // [!code focus:3]
        "Code": "EU-maat tav"
      },
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
    }
  ],
  // ...
}
```

:::details Click to see ItemObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Code|Str 20||Required|
|Description|Str 100||Required|
|Type|Int|1 = stock item, <br>2 = service, <br>3 = item.|Required|
|UOMName|Str 64|Name for the unit||
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required for all stock items.|Required?|
:::

## TaxObject

:::info
```json
{ 
  // ...
  "TaxAmount": [
    {
      "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
    }
  ],
  // ...
}
```

:::details Click to see TaxObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|TaxId|Guid|Use gettaxes endpoint to detect the guid needed|Required|
|Amount|Decimal 18.2|||
:::

## DimensionsObject

:::info
```json
{ 
  // ...
  "Dimensions": [
    {
      "DimId": 1,
      "DimValueId": "00000000-0000-0000-0000-000000000000",
      "DimCode": "1"
    }
  ],
  // ...
}
```

:::details Click to see DimensionsObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|DimId|Int|||
|DimValueId|Guid|||
|DimCode|Str|||
:::

## PayerObject {#payerObject}

:::info
```json
{ 
  // ...
  "Payer": {
    "Id": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
  },
  // ...
}
```

:::details Click to see PayerObject parameters
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
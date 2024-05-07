# Create Recurring Invoice

## Endpoints:

<!--@include: @/dist/md/api_url.md-->v2/sendperinvoice`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Customer|CustomerObject||
|Code|Str||
|DepartmentCode|Str 20||
|InvoiceNo|Str 35||
|StartDate|Date||
|EndDate|Date||
|CurrencyId|Int||
|CurrencyCode|Str 4||
|CurrencyRate|Dec 18.7||
|HComment|Str 4K||
|FComment|Str 4K||
|NextDate|Date||
|Cycle|int|1-month, 2-quarter of a year , 3-year, 4-week|
|Period|int|2-current period, 3-next period, 4-for the next period, 5-for previous period, 6-current period, less number of cycles|
|PaymentDay|int||
|PaymentMonth|int||
|ReferenceNo|Str||
|PriceInclVat|bool||
|RoundingPrec|int||
|RoundingAmount|Dec 18.2||
|TotalAmount|Dec 18.2||
|TotalSum|Dec 18.2||
|PerLen|Int||
|Dimensions|Array of Dimensions objects||
|InvoiceRow|Array of InvoiceRow objects||
|TaxAmount|Array of VAT objects||
|Payer|PayerObject||


## CustomerObject

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled and customer is found in the database then following fields are not important. If not found, the customer is added using the following fields.|
|Name|Str 150|Required when customer is added|
|RegNo|Str 30||
|NotTDCustomer|Bool|Required when customer is added. EE True for physical persons and foreign companies.  PL True for physical persons. Allowed “true” or “false” (lowercase).|
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
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)|
|Contact|Str 35||
|GLNCode|Str 10||
|PartyCode|Str 20||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|EInvPaymId|Str 20||
|BankAccount|Str 50||
|Dimensions|Array of DimensionsObjects||
|CustGrCode|Str 20||
|ShowBalance|Bool||
|ApixEinv|Str 20||
|GroupInv|Bool||


## InvoiceRowObject

|Field|Type|Comment|
|-----|----|-------|
|Item|ItemObject|Sometimes the volume of transactions in the sales software is very high and there is no need to duplicate all the data in accounting. In those cases, you could consider using the same item code for the items with the same VAT rate.<br><br>Items with different VAT rates must have a different item codes.<br><br>Also, for the VAT declarations to work, goods and services may not be summed up and must have different item codes.|
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
|SalesAccCode|String 10|If included GLAccountCode then  the SalesAccCode not used|
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


## TaxObject

|Field|Type|Comment|
|-----|----|-------|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||


## DimensionsObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||


## PayerObject

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled and payer (customer) is found in the database then following fields are not important. If not found, the payer is added using the following fields.|
|Name|Str 150|Required when payer is added|
|RegNo|Str 30||
|NotTDCustomer|Bool|Required when payer is added. True for physical persons and foreign companies. Allowed “true” or “false” (lowercase).|
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
|Dimensions|Array of DimensionsObjects||
|CustGrCode|Str 20||
|ShowBalance|Bool||



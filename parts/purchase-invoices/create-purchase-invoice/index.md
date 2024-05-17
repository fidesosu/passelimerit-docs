# Create Purchase Invoice

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendpurchinvoice`

This endpoint creates document and general ledger records without any confirmation. If you need solution where book keepers are approving puchase orders and expanse claims, use different endpoint: sendpurchorder.

## Query Payload

Example payload 1:  [Example create](./example-create-purchase-invoice/)

Example payload 2:   [Example with proportional vat](./example-create-purchase-invoice-with-proportional-vat/)

### PurchaseInvoice

|Field|Type|Comment|
|-|-|-|
|Vendor|VendorObject||
|ExpenseClaim|bool|If false, it indicates a normal purchase invoice. If true, the purchase invoice is handled as presented by responsible employee for expense claim.|
|DocDate|Date||
|DueDate|Date||
|TransactionDate|Date||
|BillNo|Str 35||
|RefNo|Str 36||
|BankAccount|Str 50||
|CurrencyCode|Str 4||
|CurrencyRate|Decimal 18.7||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|ProjectCode|Str 20|If used then must be found in the company database.|
|InvoiceRow|Array of InvoiceRowObjects||
|TaxAmount|Array of TaxObjects|Required|
|RoundingAmount|Decimal 18.2||
|TotalAmount|Decimal 18.2|Amount without VAT|
|Payment|Payment object||
|Hcomment|Str 4K|Comment before invoice rows|
|Fcomment|Str 4K|Comment after invoice rows|
|Attachment|AttachmentObject||
|PolDocType|int 1|Poland only 1-purchmk 2-purchvatrr 3-purchwe 0-nochoise|


### VendorObject

|Field|Type|Comment|
|-|-|-|
|Id|Guid|If filled and vendor is found in the database then following fields are not important. If not found, the vendor is added using the following fields.|
|Name|Str 150|Required when vendor is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||


### ItemObject

|Field|Type|Comment|
|-|-|-|
|Code|Str 20|Required. Must be found in company database.|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit. Required for stock item|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required if the item is a stock item and does not exist yet.|


### InvoiceRowObject

|Field|Type|Comment|
|-|-|-|
|Item|ItemObject||
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|Str 10|General ledger Account code. If used then must be found in the company database|
|ProjectCode|Str 20|If used then must be found in the company database|
|CostCenterCode|Str 20|If used then must be found in the company database|


### TaxObject

|Field|Type|Comment|
|-|-|-|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||


### PaymentObject

|Field|Type|Comment|
|-|-|-|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|


### AttachmentObject

|Field|Type|Comment|
|-|-|-|
|FileName|Str||
|FileContent|Str|PDF In Base64 format|


## Endpoints v2

`https://aktiva.meritaktiva.fi/api/v2/sendpurchinvoice`

## Query Payload

|Field|Type|Comment|
|-|-|-|
|Vendor|VendorObject||
|ExpenseClaim|bool|If false, it indicates a normal purchase invoice. If true, the purchase invoice is handled as presented by responsible employee for expense claim.|
|DocDate|Date||
|DueDate|Date||
|TransactionDate|Date||
|BillNo|Str 35||
|RefNo|Str 36||
|CurrencyCode|Str 4||
|CurrencyRate|Decimal 18.7||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|Dimensions|Array of dimensions objects|If used then must be found in the company database.|
|InvoiceRow|Array of InvoiceRowObjects||
|TotalAmount|Decimal 18.2|Amount without VAT|
|RoundingAmount|Decimal 18.2||
|TaxAmount|Array of TaxObjects|Required|
|Payment|Payment object||
|Hcomment|Str 4K|Comment before invoice rows|
|Fcomment|Str 4K|Comment after invoice rows|
|Attachment|AttachmentObject||
|BankAccount|Str 50||
|Receiver|ReceiverObject||


## Vendor Object

|Field|Type|Comment|
|-|-|-|
|Id|Guid|If filled and vendor is found in the database then following fields are not important. If not found, the vendor is added using the following fields.|
|Name|Str 150|Required when vendor is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||


## InvoiceRowObject

|Field|Type|Comment|
|-|-|-|
|Item|Item Object||
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|Str 10|General ledger Account code. If used then must be found in the company database|
|Dimensions|Array of Dimensions objects|If used then must be found in the company database|
|VatDate|Str 20||
|SalesAccCode|Str 10||
|PurchaseAccCode|Str 10|If included GLAccountCode then the PurchaseAccCode not be used|
|InventoryAccCode|Str 10||
|CostAccCode|Str 10||


## ItemObject

|Field|Type|Comment|
|-|-|-|
|Code|Str 20|Required. Must be found in company database.|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit. Required for stock item|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required if the item is a stock item and does not exist yet.|


## DimensionsObject

|Field|Type|Comment|
|-|-|-|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||


## TaxObject

|Field|Type|Comment|
|-|-|-|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||


## PaymentObject

|Field|Type|Comment|
|-|-|-|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|


## AttachmentObject

|Field|Type|Comment|
|-|-|-|
|FileName|Str||
|FileContent|Str|PDF In Base64 format|


## ReceiverObject

|Field|Type|Comment|
|-|-|-|
|Id|Guid|If filled and receiver (vendor) is found in the database then following fields are not important. If not found, the receiver is added using the following fields.|
|Name|Str 150|Required when receiver is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when receiver is added. Allowed "true" or "false" (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||


## Successful Result
- VendorId
- BillId
- BillNo
- RefNo
- BatcInfo
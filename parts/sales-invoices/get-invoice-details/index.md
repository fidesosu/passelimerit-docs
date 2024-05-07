# Get sales invoice details
### Endpoints v1
<!--@include: @/dist/md/api_url.md-->v1/getinvoice`

### Endpoints v2
<!--@include: @/dist/md/api_url.md-->v2/getinvoice`

Query Payload
```json
{ 
   "Id":  "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
   "AddAttachment": true/false
}
```
[Successful result v2](#resV2)

## V1 <br> Successful result

The result, if not empty:

|FieldName|Type|Comment|
|---|---|---|
|Header|SalesHeader object||
|Lines|Array of Line objects||
|Payments|Array of Payment objects||
|Allocations|Project and Cost Center allocations (if existing)||


## SalesHeaderObject

|Field Name|Comment|
|----------|-------|
|SIHId||
|DepartmentCode||
|DepartmentName||
|ProjectCode||
|ProjectName||
|BatchInfo|GL transaction code and #|
|InvoiceNo||
|DocumentDate||
|TransactionDate||
|CustomerName||
|HComment||
|FComment||
|DueDate||
|CurrencyCode||
|CurrencyRate||
|TaxAmount|VAT amount|
|RoundingAmount||
|TotalAmount|Amount wo. VAT|
|ProfitAmount|Margin amount|
|TotalSum|Total amount with taxes and rounding|
|UserName||
|ReferenceNo||
|PriceInclVat||
|VatRegNo||
|OfferId||
|OfferDocType||
|OfferNo||
|FileName|Str|
|FileContent|File in base64|
|PerSHId||
|ContractNo||

## InvoiceRowObject

|Field Name|Comment|
|----------|-------|
|ArticleCode||
|LocationCode||
|Quantity||
|Price||
|TaxName||
|TaxPct||
|AmountExclVat||
|AmountInclVat||
|VatAmount||
|AccountCode||
|DepartmentCode||
|DepartmentName||
|ItemCostAmount||
|ProfitAmount||
|DiscountPct||
|DicountAmount||
|Description||
|UOMName||
|FixAsset||
|ProjectAllocation|Array(CostAllocation)|
|CostCenterAllocation|Array(CostAllocation)|

## PaymentObject

|Field Name|Comment|
|----------|-------|
|PaymDate||
|Amount||
|PaymentMethod||
|PaymentId||

## CostAllocationObject

|Field Name|Comment|
|----------|-------|
|Code|Code of project / cost center|
|AllocPct|Allocation percentage|
|AllocAmount|Allocation amount|
---
## V2 <br> Successful result {#resV2}

|Field|Type|Comment|
|-----|----|-------|
|Header|Header Object||
|Lines|Lines Object||
|Payments|Payment Object||
|Attachment|Attachment object||

## Invoice header object

|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of Dmensions Objects||
|SIHId|Guid||
|DepartmentCode|Str||
|DepartmentName|Str||
|ProjectCode|Str||
|ProjectName|Str||
|AccountingDock|||
|BatchInfo|Str||
|InvoiceNo|Str||
|DocumentDate|Date||
|TransactionDate|Date||
|CustomerId|Guid||
|CustomerName|Str||
|CustomerRegNo|Str||
|HComment|Str||
|FComment|Str||
|DueDate|Date||
|CurrencyCode|Str||
|CurrencyRate|Dec||
|TaxAmount|Dec||
|RoundingAmount|Dec||
|TotalAmount|Dec||
|ProfitAmount|Dec||
|TotalSum|Dec||
|UserName|Str||
|ReferenceNo|Str||
|PriceInclVat|Bool|true/false|
|VatRegNo|Str||
|PaidAmount|Dec||
|EInvSent|Bool|true/false|
|EmailSent|Date||
|EInvOperator|Int|1 – Not exist, 2 – E-invoices to the bank through Omniva, 3 – Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|OfferId|Guid||
|OfferDocType|Int|1=quote, 2=sales order, 3=prepayment invoice|
|OfferNo|Str||
|FileExists|Bool|true/false|
|PerSHId|Guid||
|ContractNo|Str||
|Paid|Bool||
|Contact|Str||

## DimensionsObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|DimValueId|Guid||
|DimCode|Str||

## InvoiceRowObject

|Field|Type|Comment|
|-----|----|-------|
|SILId|Guid||
|ArticleCode|Str||
|LocationCode|Str||
|Quantity|Dec||
|Price|Dec||
|TaxName|Str||
|TaxPct|Dec||
|AmountExclVat|Dec||
|AmountInclVat|Dec||
|VatAmount|Dec||
|AccountCode|Str||
|DepartmentCode|Str||
|DepartmentName|Str||
|ItemCostAmount|Dec||
|ProfitAmount|Dec||
|DiscountPct|Dec||
|DiscountAmount|Dec||
|Description|Str||
|UOMName|Str||
|FixAsset|Bool|true/false|
|DimAllocation|Array of Dimensions Allocation Objects||

## DimensionsAllocationObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|Code|Str||
|AllocPct|Dec||
|AllocAmount|Dec||

## PaymentObject

|Field|Type|Comment|
|-----|----|-------|
|PaymDate|Date||
|Amount|Dec||
|PaymentMethod|Str||
|PaymentId|Guid||

## AttachmentObject

|Field|Type|Comment|
|-----|----|-------|
|Filename|Str||
|FileContent|Str|File in base64|

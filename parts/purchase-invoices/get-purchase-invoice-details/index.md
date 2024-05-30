# Get purchase invoice details

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/getpurchorder`

## Endpoints v2

<!--@include: @/dist/md/api_url.md-->v2/getpurchorder`

---
:::info Query Payload
```json
{ 
  "Id":  "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx" .
}
```
:::

:::info Successful Result v1
```json

```
:::details Click to see the result parameters
|Field Name|Type|Comment|
|----------|----|-------|
|Header|SalesHeader object||
|Lines|Array of Line objects||
|Payments|Array of Payment objects||
|Allocations|Project and Cost Center allocations (if existing)||

### PurchaseInvoiceHeaderObject

|Field Name|Comment|
|----------|-------|
|PIHId|| 	 
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
|RoundingAmount| 	 
|TotalAmount|Amount wo. VAT|
|ProfitAmount|Margin amount|
|TotalSum|Total amount with taxes and rounding|
|UserName|| 	 
|ReferenceNo|| 	 
|PriceInclVat|| 	 
|VatRegNo||
|InboundTime||
|Operator||

### InvoiceRowObject

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

### PaymentObject

|Field Name|Comment|
|----------|-------|
|PaymDate||
|Amount||
|PaymentMethod||	
|PaymentId||

### CostAllocationObject

|Field Name|Comment|
|----------|-------|
|Code|Code of project / cost center|
|AllocPct|Allocation percentage|
|AllocAmount|Allocation amount|
:::

:::info Successful Result v2
```json

```
:::details Click to see the result parameters
|Field|Type|comment|
|-----|----|-------|
|Header|HeaderObject||
|Lines|Array of LinesObjects||	
|Payments|Array of PaymentObjects||	
|Attachment|Attachment Object||

### HeaderObject

|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of DimensionObjects||
|PIHId|Guid||	
|DepartmentCode|Str||	
|DepartmentName|Str||	
|ProjectCode|Str||	
|CostCenterCode|Str||	
|BatchInfo|Str||	
|BillNo|Str||	
|DocumentDate|Date||	
|TransactionDate|Date||	
|VendorId|Guid||	
|VendorName|Str||	
|VendorRegNo|Str||	
|DueDate|Date||	
|Fine|||		
|CurrencyCode|Str||	
|CurrencyRate|Dec||	
|TaxAmount|Dec||	
|RoundingAmount|Dec||	
|TotalAmount	Dec||
|ProfitAmount|Dec||	
|TotalSum|Dec||	
|ReferenceNo|Str||	
|PriceInclVat|Bool|true/false|
|VatRegNo|Str||	
|PaidAmount|Dec||	
|FileExists|Bool||	
|InboundTime|Date||	
|Operator|||		
|Paid|Bool|true/false|

### DimensionObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||	
|DimValueId|Guid||	
|DimCode|Str||

### InvoiceRowObject

|Field|Type|Comment|
|-----|----|-------|
|PILId|Guid||	
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
|DepartmentName|Str||	
|DepartmentCode|Str||	
|ItemCostAmount|Dec||	
|ProfitAmount|Dec||	
|Description|Str||	
|UOMName|Str||
|FixAsset|Bool|true/false|
|DimAllocation|Array of DimensionsAllocationObjects|

### DimensionAllocationObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|Code|Str||
|AllocPct|Dec||
|AllocAmount|Dec||

### PaymentObject

|Field|Type|Comment|
|-----|----|-------|
|PaymDate|Date||	
|Amount|Dec||
|PaymentMethod|Str||	
|PaymentId|Guid||

### AttachmentObject

|Field|Type|Comment|
|-----|----|-------|
|Filename|Str||
|FileContent|Str|File in base64|
:::
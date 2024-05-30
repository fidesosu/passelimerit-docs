# Get list of purchase invoices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getpurchorders`

---
:::info Query Payload
```json
{    
  Periodstart: YYYYmmdd,    
  PeriodEnd: YYYYmmdd  
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-|-|-|
|PeriodStart|Date|In format yyyymmdd|
|PeriodEnd|Date|In format yyyymmdd . Period length max 3 months!|
|UnPaid|Bool|true/false|
:::
---
:::info Successful Result
|Field|Type|
|-----|----|
|PIHId|Guid|
|DepartmentCode|Str|
|DepartmentName|Str|
|ProjectCode|Str|
|CostCenterCode|Str|
|BatchInfo|Str|
|BillNo|Str|
|DocumentDate|Date|
|TransactionDate|Date|
|VendorName|Str|      
|VendorId|Str|
|VendorRegNo|Str|
|DueDate|Date|
|Fine||
|CurrencyCode|Str|
|CurrencyRate||
|TaxAmount||
|RoundingAmount|Decimal 18.2|
|TotalAmount|Decimal 18.2|
|ProfitAmount|Dec|
|TotalSum|Dec 18.2|
|ReferenceNo|Str|   
|PriceInclVat|Bool|       
|VatRegNo|Str 30|
|PaidAmount|Decimal 18.2|
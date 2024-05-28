# Get list of purchase invoices

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/getpurchorders`

## Query payload

```json
{    
  Periodstart: YYYYmmdd,    
  PeriodEnd: YYYYmmdd  
}
```

|Field|Type|Comment|
|-|-|-|
|PeriodStart|Date|In format yyyymmdd|
|PeriodEnd|Date|In format yyyymmdd . Period length max 3 months!|
|UnPaid|Bool|true/false|

## Successful Result v1
||
|-|
|PIHId|
|DepartmentCode|
|DepartmentName|
|ProjectCode|
|CostCenterCode|
|BatchInfo|
|BillNo|
|DocumentDate|
|TransactionDate|
|VendorName|      
|VendorId|
|VendorRegNo|
|DueDate|
|Fine|
|CurrencyCode|
|CurrencyRate|
|TaxAmount|
|RoundingAmount|
|TotalAmount|
|ProfitAmount|
|TotalSum|
|ReferenceNo|   
|PriceInclVat|       
|VatRegNo|
|PaidAmount|
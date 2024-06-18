# Get list of purchase invoices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getpurchorders`

## Query Payload
```json
{
  "Periodstart": "YYYYmmDD",
  "PeriodEnd": "YYYYmmDD"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|PeriodStart|Date|In format yyyymmdd|Required|
|PeriodEnd|Date|In format yyyymmdd. Period length max 3 months!|Required|
|UnPaid|Bool|true/false||
:::
## Successful Result
```json
[
  {
    "PIHId": "c28546dc-ab9a-4ecd-b9d5-1cf4a0a97348",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "CostCenterCode": null,
    "BatchInfo": "OS-4",
    "BillNo": "987654324",
    "DocumentDate": "2020-05-06T00:00:00",
    "TransactionDate": "2020-05-06T00:00:00",
    "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "VendorName": "Mingi Firma AS",
    "VendorRegNo": "123456789",
    "DueDate": "2020-05-06T00:00:00",
    "Fine": 0.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ProfitAmount": 471.20,
    "TotalSum": 471.20,
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": "EE123456789",
    "PaidAmount": 380.00,
    "FileExists": true,
    "InboundTime": "0001-01-01T00:00:00",
    "Operator": null,
    "Paid": false
  },
  // ...
]
```
:::details Click to see the result parameters
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
:::
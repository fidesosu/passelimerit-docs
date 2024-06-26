# Get list of sales invoices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getinvoices`

For multiple dimensions:

<!--@include: @/dist/md/api_url.md-->v2/getinvoices`

## Query Payload
```json
{ 
  Periodstart: YYYYmmdd, 
  PeriodEnd: YYYYmmdd,
  UnPaid: true 
}
```

> Maximum period length is 3 months.
---
:::details Click to see the result parameters
<table>
<tr><th><h4>Successful Result v1</h4></th><th><h4>Successful Result v2</h4></th></tr>
<tr><td style="vertical-align: top;">

|Field|
|-----|
|SIHId|
|DepartmentCode|
|DepartmentName|
|ProjectCode|
|ProjectName|
|BatchInfo|
|InvoiceNo|
|DocumentDate|
|TransactionDate|
|CustomerId|
|CustomerName|
|CustomerRegNo|
|HComment|
|FComment|
|DueDate|
|CurrencyCode|
|CurrencyRate|
|TaxAmount|
|RoundingAmount|
|TotalAmount|
|ProfitAmount|
|TotalSum|
|UserName|
|ReferenceNo|
|PriceInclVat|
|VatRegNo|
|PaidAmount|
|EInvSent|
|EmailSent|
|Paid|

</td><td style="vertical-align: top;">

| Field            | Type    | Comment         |
|------------------|---------|-----------------|
| SIHId            | Guid    |                 |
| DepartmentCode   | Str     |                 |
| DepartmentName   | Str     |                 |
| Dimension1Code   | Str     |                 |
| Dimension2Code   | Str     |                 |
| Dimension3Code   | Str     |                 |
| Dimension4Code   | Str     |                 |
| Dimension5Code   | Str     |                 |
| Dimension6Code   | Str     |                 |
| Dimension7Code   | Str     |                 |
| AccountingDoc    | AccDoc  |                 |
| BatchInfo        | Str     |                 |
| InvoiceNo        | Str     |                 |
| DocumentDate     | Date    |                 |
| TransactionDate  | Date    |                 |
| CustomerName     | Str     |                 |
| CustomerRegNo    | Str     |                 |
| CustomerId       | Guid    |                 |
| HComment         | Str     |                 |
| FComment         | Str     |                 |
| DueDate          | Date    |                 |
| CurrencyCode     | Str     |                 |
| CurrencyRate     | Dec     |                 |
| TaxAmount        | Dec     |                 |
| RoundingAmount   | Dec     |                 |
| TotalAmount      | Dec     |                 |
| ProfitAmount     | Dec     |                 |
| TotalSum         | Dec     |                 |
| UserName         | Str     |                 |
| ReferenceNo      | Str     |                 |
| PriceInclVat     | Bool    |                 |
| VatRegNo         | Str     |                 |
| PaidAmount       | Dec     |                 |
| EInvSent         | Bool    |                 |
| EmailSent        | Date    |                 |
| Paid             | Bool    |                 |

</td></tr> </table>
:::
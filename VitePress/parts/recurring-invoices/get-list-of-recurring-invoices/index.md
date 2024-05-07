# Get list of Recurring Invoices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getperinvoices`

## Query Payload

```json
{   
  “PeriodStart”: “YYYYmmDD”,   
  “PeriodEnd”: “YYYYmmDD”
}
```

Period = “date for the next invoice”.  The range can be up to 180 days.

## Successful result

|Field|
|-|
|SIHId|
|InvoiceNo|
|StartDate|
|EndDate|
|CustomerId|
|CustomerName|
|CurrencyCode|
|CurrencyRate|
|NextDate|
|Cycle|
|Period|
|VATLiability|
|TaxAmount|
|RoundingAmount|
|TotalAmount|
|TotalSum|
|PerLen
|ContrEnded|
|Dimension1Code|
|Dimension2Code|
|Dimension3Code|
|Dimension4Code|
|Dimension5Code|
|Dimension6Code|
|Dimension7Code|
# Get list of Recurring Invoices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getperinvoices`

## Query Payload

:::info Payload
```json
{   
  "PeriodStart": "YYYYmmDD",   
  "PeriodEnd": "YYYYmmDD"
}
```
:::

Period = "date for the next invoice".  The range can be up to 180 days.

## Successful result

:::info
```json
[
  {
    "SIHId": "c66da675-c7f2-4af3-9f77-1f5466bb9b7d",
    "InvoiceNo": null,
    "StartDate": "2019-04-13T00:00:00",
    "EndDate": "2025-01-01T00:00:00",
    "CustomerId": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
    "CustomerName": "FirstCustomer Inc",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "NextDate": "2019-04-14T00:00:00",
    "Cycle": 0,
    "Period": 0,
    "VATLiability": false,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 0.00,
    "TotalSum": 0.00,
    "PerLen": 0,
    "ContrEnded": false,
    "Dimension1Code": null,
    "Dimension2Code": null,
    "Dimension3Code": null,
    "Dimension4Code": null,
    "Dimension5Code": null,
    "Dimension6Code": null,
    "Dimension7Code": null
  },
  // ...
]
```
:::

:::details Click to see the result parameters
|Field|
|-----|
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
:::
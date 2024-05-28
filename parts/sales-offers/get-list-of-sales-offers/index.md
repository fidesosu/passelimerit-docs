# Get List of Sales Offers

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getoffers`

## Query payload

```json
{      
  PeriodStart: "YYYYmmdd",       
  PeriodEnd: "YYYYmmdd",       
  UnPaid: false
}

```

## Successful Result

:::info
```json
[
  {
    "SIHId": "31fe26d0-7928-47f7-8702-2d066e332b77",
    "DepartmentName": null,
    "Dimension1Code": null,
    "Dimension2Code": null,
    "Dimension3Code": null,
    "Dimension4Code": null,
    "Dimension5Code": null,
    "Dimension6Code": null,
    "Dimension7Code": null,
    "AccountingDoc": 0,
    "BatchInfo": null,
    "OfferNo": "MPO-2001",
    "DocumentDate": "2020-06-02T00:00:00",
    "TransactionDate": "0001-01-01T00:00:00",
    "CustomerId": "ac8a114d-e40c-4fa5-a57f-de30a03d550d",
    "CustomerName": "Hindre",
    "HComment": "säilivusaja tekst",
    "FComment": "Kauba kohaletoimetamise tekst",
    "DueDate": "0001-01-01T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 100.00,
    "ProfitAmount": 0.0,
    "TotalSum": 100.00,
    "UserName": "Merit API",
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": null,
    "PaidAmount": 0.00,
    "EInvSent": false,
    "EmailSent": "1901-01-01T00:00:00",
    "DocType": 2,
    "DocStatus": 3,
    "DeliveryDate": "2020-06-06T00:00:00"
  }
]
```
:::

:::details Click to see the parameters
|Field|Type|Comment|
|-----|----|-------|
|SIHId|Guid||
|DepartmentName|Str||
|Dimension1Code|Str||
|Dimension2Code|Str||
|Dimension3Code|Str||
|Dimension4Code|Str||
|Dimension5Code|Str||
|Dimension6Code|Str||
|Dimension7Code|Str||
|BatchInfo|Str||
|OfferNo|Str||
|DocumentDate|Date||
|TransactionDate|Date||
|CustomerId|Guid||
|CustomerName|Str||
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
|PriceInclVat|Bool||
|VatRegNo|Str||
|PaidAmount|Dec||
|EInvSent|Bool||
|EmailSent|Date||
|DocType|Int|1=quote, 2=sales order, 3=prepayment invoice|
|DocStatus|Int|1=created, 2=sent, 3=approved, 4=rejected, 5=comment received, 6=invoice created, 7=canceled|
|DeliveryDate|Date||
|Paid|Bool||
:::
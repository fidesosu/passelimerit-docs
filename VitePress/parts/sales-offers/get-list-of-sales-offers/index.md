# Get List of Sales Offers

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getoffers`

## Query payload

```json
{      
  PeriodStart: “YYYYmmdd”,       
  PeriodEnd: “YYYYmmdd”,       
  UnPaid: false
}

```

## Successful result

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



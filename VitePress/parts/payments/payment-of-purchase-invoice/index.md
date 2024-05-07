# Create Payment of purchase invoice
---
- [Create Payment of purchase invoice v1](#v1)
- [Create Payment of purchase invoice v2](#v2)

::: info NOTE:
V2 should be used when the payment is not in local currency
:::
## Endpoints v1 {#v1}

<!--@include: @/dist/md/api_url.md-->v1/sendPaymentV`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50||
|VendorName|Srt 150||
|PaymentDate|Date|YYYYmmddHHii|
|BillNo|Str 35||
|RefNo|Str 36||
|Amount|Decimal 18.2||


## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/sendPaymentV`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50||
|VendorName|Srt 150||
|PaymentDate|Date|YYYYmmddHHii|
|BillNo|Str 35||
|RefNo|Str 36||
|Amount|Decimal 18.2||
|CurrencyCode|Str|Required if not local currency|
|CurrencyRate|Decimal 18.7|If the exchange rate is not included, we will take it from the EU central bank's request for the respective date|



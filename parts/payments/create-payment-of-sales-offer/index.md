# Create Payment of sales offer
---
- [Create Payment of sales offer v1](#v1)
- [Create Payment of sales offer v2](#v2)

## Endpoints v1 {#v1}

<!--@include: @/dist/md/api_url.md-->v1/sendPaymentO`

---
:::info Query Payload
```json
{
  "BankId": "93f8d710-d0d2-4e9c-8c66-c2f669a1885d",
  "IBAN": "FI32 3623 6540 0065 56",
  "CustomerName": "Masi Mansikkamäki",
  "PaymentDate": "2020-07-07T14:00:00Z",
  "OfferNo": "123",
  "RefNo": "1232",
  "Amount": 2000.00
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50||
|CustomerName|Srt 150||
|PaymentDate|Date|YYYYmmddHHii|
|OfferNo|Str 35||
|RefNo|Str 36||
|Amount|Decimal 18.2||
:::

## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/sendPaymentO`

:::info Query Payload
```json
{
  "BankId": "93f8d710-d0d2-4e9c-8c66-c2f669a1885d",
  "IBAN": "FI32 3623 6540 0065 56",
  "CustomerName": "Mari Mansikkamäki",
  "PaymentDate": "2020-07-07T14:00:00Z",
  "OfferNo": "123",
  "RefNo": "1232",
  "Amount": 100.00,
  "CurrencyCode": "EUR",
  "CurrencyRate": 1.0000000
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50||
|CustomerName|Srt 150||
|PaymentDate|Date|YYYYmmddHHii|
|OfferNo|Str 35||
|RefNo|Str 36||
|Amount|Decimal 18.2||
|CurrencyCode|Str|Required if not local currency|
|CurrencyRate|Decimal 18.7|If the exchange rate is not included, we will take it from the EU central bank's request for the respective date|
:::
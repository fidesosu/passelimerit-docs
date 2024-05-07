# Create Payment of sales invoice
---
- [Create Payment v1](#v1)
- [Create Payment v2](#v2)

::: info NOTE:
V2 should be used when the payment is not in local currency
:::
## Endpoints v1 {#v1}

<!--@include: @/dist/md/api_url.md-->v1/sendpayment`

> [!IMPORTANT]
>- There must be invoice with that customer.
>- This purchase invoice has to be not paid yet, you can only pay the full amount.
>- Sales invoice payment can be sent in several parts.
>- Subsequent payment can only be made as a cash or bank payment. In the case of a bank, the IBAN must be provided. If there is no IBAN, the payment is placed at the cash register.


## Query Payload

```json
{ 
  "BankId": "",
  "IBAN": "", 
  "CustomerName": "", 
  "InvoiceNo": "",
  "PaymentDate":"", 
  "RefNo": "", 
  "Amount": "" 
}
```

|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50|Must match with one of the payment methods in the database|
|CustomerName|Str 150||
|InvoiceNo|Str 35||
|RefNo|Str 36||
|PaymentDate|Date||
|Amount|Decimal 18.2||


## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/sendpayment`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50|Must match with one of the payment methods in the database|
|CustomerName|Str 150||
|InvoiceNo|Str 35||
|RefNo|Str 36||
|PaymentDate|Date||
|Amount|Decimal 18.2||
|CurrencyCode|Decimal 18.2|Required if not local currency|
|CurrencyRate|Decimal 18.7|If the exchange rate is not included, we will take it from the EU central bank's request for the respective date|



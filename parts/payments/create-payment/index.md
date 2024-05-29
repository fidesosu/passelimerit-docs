# Create Payment of sales invoice
---
- [Create Payment v1](#v1)
- [Create Payment v2](#v2)

---
::: info NOTE:
V2 should be used when the payment is not in local currency
:::
## Endpoints v1 {#v1}

<!--@include: @/dist/md/api_url.md-->v1/sendpayment`

---
:::info Query Payload
```json
{ 
  "BankId": "93f8d710-d0d2-4e9c-8c66-c2f669a1885d",
  "IBAN": "FI32 3623 6540 0065 56", 
  "CustomerName": "FirstCustomer Inc", 
  "InvoiceNo": "123",
  "RefNo": "1232", 
  "PaymentDate":"20240529", 
  "Amount": "2000.00" 
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50|Must match with one of the payment methods in the database|
|CustomerName|Str 150||
|InvoiceNo|Str 35||
|RefNo|Str 36||
|PaymentDate|Date||
|Amount|Decimal 18.2||
:::

## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/sendpayment`

---
:::info Query Payload
```json
{
  "BankId": "93f8d710-d0d2-4e9c-8c66-c2f669a1885d",
  "IBAN": "FI32 3623 6540 0065 56",
  "CustomerName": "FirstCustomer Inc",
  "InvoiceNo": "123",
  "RefNo": "1232",
  "PaymentDate": "20240529",
  "Amount": "2000.00",
  "CurrencyCode": "EUR",
  "CurrencyRate": "1.0000000"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|BankId|Guid||
|IBAN|Str 50|Must match with one of the payment methods in the database|
|CustomerName|Str 150||
|InvoiceNo|Str 35||
|RefNo|Str 36||
|PaymentDate|Date||
|Amount|Decimal 18.2||
|CurrencyCode|Str|Required if not local currency|
|CurrencyRate|Decimal 18.7|If the exchange rate is not included, we will take it from the EU central bank's request for the respective date|
:::
---
:::info Successful Result
```json
{
  "CustomerId": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
  "InvoiceId": "4878a49b-6e41-480f-b881-6e522aa1eca1",
  "InvoiceNo": "12",
  "RefNo": "",
  "NewCustomer": null
}
```
:::
---
> [!IMPORTANT]
>- There must be invoice with that customer.
>- This purchase invoice has to be not paid yet, you can only pay the full amount.
>- Sales invoice payment can be sent in several parts.
>- Subsequent payment can only be made as a cash or bank payment. In the case of a bank, the IBAN must be provided. If there is no IBAN, the payment is placed at the cash register.
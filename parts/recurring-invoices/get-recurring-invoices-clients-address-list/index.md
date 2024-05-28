# Get Recurring Invoices clients address list

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpershaddress`

---
:::info Query Payload
```json
{ }
```
:::
---
:::info Successful Result
```json
[
  {
    "Id": "2fb7301e-8c3c-4782-9419-96631d0e37eb",
    "InvoiceNo": null,
    "Address": "Merimiehenkatu 31\nHelsinki"
  },
  // ...
]
```

:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|InvoiceNo|Str|Recurring invoice contract number|
|Address|Str||
:::
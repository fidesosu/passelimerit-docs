# Get Recurring Invoices clients address list

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpershaddress`

## Query Payload

```json
{ }
```

## Successful Result

The result for this request can be:
1. empty result
2. a list of not ended recurring invoices

|Field|Type|Comment|
|-|-|-|
|Id|Guid||
|InvoiceNo|Str|Recurring invoice contract number|
|Address|Str||

:::info Example Result
```json
[
  {
    "Id": "2fb7301e-8c3c-4782-9419-96631d0e37eb",
    "InvoiceNo": null,
    "Address": "Merimiehenkatu 31\nHelsinki"
  }
]
```
:::
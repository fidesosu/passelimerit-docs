# List of Payment Types

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpaymenttypes`

---
:::info Query Payload
```json
{
  "Type": 1
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|Type|Int|1 - purchases,<br> 2 - expense reports,<br> 3 - sales|
:::
---
:::info Successful Result
```json
[
  {
    "SourceType": 1,
    "BankType": 2,
    "Id": "f1a07336-c5e3-4caa-a55f-1b7b3c45a06d",
    "Name": "Kassa",
    "CurrencyCode": "EUR"
  },
  // ...
]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|SourceType|Int|1 - cash,bank;<br> 2 - reporting entities;<br> 3 - general ledger account|
|BankType|Int||
|Id|Guid||
|Name|Str||
|CurrencyCode|Str||
:::
# Get list of GL Transactions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getglbatches`

---
:::info Query Payload
```json
{ 
  "PeriodStart": "20200709",
  "PeriodEnd": "20200710",
  "UnPaid": true
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date|In format yyyymmdd|
|PeriodEnd|Date|In format yyyymmdd . Period length max 3 months!|
|UnPaid|Bool|true/false|
:::
---
:::info Successful Result
```json
[
  {
    "GLBId": "0e0b6b8e-0cd5-4d35-a37f-d09e24924a17",
    "BatchCode": "PÄ",
    "No": 1,
    "Document": "testDocNo",
    "BatchDate": "2020-07-09T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TotalAmount": 0.00,
    "PriceInclVat": 1,
    "FileExists": true
  }
]
```
:::details Click to see the result parameters
|Field|
|-----|
|GLBIdBatchCode|
|No|     
|Document|   
|BatchDate|
|CurrencyCode|      
|CurrencyRate|
|TotalAmount|      
|PriceInclVat|
:::
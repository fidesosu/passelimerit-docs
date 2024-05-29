# Getting GL Transactions Full Details

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getglbatchesfull`

---
:::info Query Payload
```json
{
  "PeriodStart": "20200709",
  "PeriodEnd": "20200710",
  "WithLines": 1,
  "WithCostAlloc": 1
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date||
|PeriodEnd|Date|Max length of the period 31 days|
|WithLines|int|if 1 then with the lines|
|WithCostAlloc|int|if 1 then with the cost allocations|
:::
---
:::info Succesful result
```json
[
  {
    "GLBId": "484c21e9-147f-4133-b665-9c74dec25096",
    "BatchCode": "PÄ",
    "No": 2,
    "Document": "testDocNo",
    "BatchDate": "2020-07-09T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TotalAmount": 0.00,
    "PriceInclVat": 1,
    "Entries": [
      {
        "AccountCode": "4010",
        "AccountName": "Tullit, verot ja muut maksut tullattaessa",
        "Memo": "testMemo",
        "DepartmentCode": "testCode1",
        "DebitAmount": 0.00,
        "DebitCurrency": 0.00,
        "CreditAmount": 0.00,
        "CreditCurrency": 0.00,
        "TypeId": 4,
        "BatchId": "484c21e9-147f-4133-b665-9c74dec25096",
        "EntryId": "db9f5135-350d-4613-bcdc-706d12e779fd",
        "CostAllocLines": [
          {
            "SourceType": 2,
            "Code": "hfif",
            "Name": "ldhkfal",
            "Mult": 1,
            "Amount": 0.00,
            "BatchId": "484c21e9-147f-4133-b665-9c74dec25096",
            "EntryId": "db9f5135-350d-4613-bcdc-706d12e779fd"
          }
        ]
      }
    ]
  },
  // ...
]
```
:::details Click to see the result parameters

|Field|Comment|
|-----|-------|
|GLBId||
|BatchCode||
|No||
|Document||
|BatchDate||
|CurrencyCode||
|CurrencyRate||
|TotalAmount||
|PriceInclVat||
|Entries|Array of Entries Objects|

### Entries object

|Field|Comment|
|-----|-------|
|AccountCode||
|AccontName||
|Memo||
|DepartmentCode||
|DebitAmount||
|DebitCurrency||
|CreditAmount||
|CreditCurrency||
|TypeId||
|BatchId||
|EntryId||
|CostAllocLines|Array of CostAllocLines object|

### Cost Allocation Lines object

|Type|Comment|
|----|-------|
|SourceType|Dimension Id|
|Code|Dimension value code|
|Name|Dimension value name|
|Mult||
|Amount||
|BatchId||
|EntryId||
:::
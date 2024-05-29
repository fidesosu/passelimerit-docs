# Creating General Ledger Transactions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendglbatch`

---
:::info Query Payload
```json
{
  "DocNo": "testDocNo",
  "BatchDate": "20200709",
  "EntryRow": [
    {
      "AccountCode": "4010",
      "DepartmentCode": "testCode1",
      "Debit": 0,
      "Credit": 0,
      "ProjectCode": "hfif",
      "Memo": "testMemo"
    }
  ],
  "Attachment": {
    "FileName": "dGVzdEZpbGVOYW1l",
    "FileContent": "dGVzdEZpbGVDb250ZW50"
  },
  "CurrencyCode": "EUR",
  "CurrencyRate": 0
}
```
:::details Click to see the query parameters 
|Field|Type|Comment|
|-----|----|-------|
|DocNo|Str 35||
|BatchDate|Date||
|EntryRow|Array of EntryRow objects||
|Attachment|AttachmentObject||
|CurrencyCode|Str 4||
|CurrencyRate|Dec|If the exchange rate is not included, we will take it from the EU central bank's request for the respective date|


### EntryRowObject

|Field|Type|Comment|
|-----|----|-------|
|AccountCode|Str 8|Must be found in the company database|
|DepartmentCode|Str 16|Must be found in the company database|
|Debit|Decimal 18.2||
|Credit|Decimal 18.2||
|ProjectCode|Str 20|If used then must be found in the company database|
|CostCenterCode|Str 20|If used then must be found in the company database|
|Memo|Str 150||


### AttachmentObject

|Field|Type|Comment|
|-----|----|-------|
|FileName|Str|Name in Base64 format|
|FileContent|Str|PDF In Base64 format|
:::
---
:::info Successful Result
```json
{
  "BatchId": "0e0b6b8e-0cd5-4d35-a37f-d09e24924a17",
  "BatchInfo": "PÄ-1"
}
```

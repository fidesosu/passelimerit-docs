# Getting GL Transaction Details

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getglbatch`

## Query Payload
```json
{ 
  "Id": "0e0b6b8e-0cd5-4d35-a37f-d09e24924a17",
  "AddAttachment": true
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|AddAttachment|Bool|true/false|
:::

## Successful Result
```json
{
  "Header": {
    "GLBId": "484c21e9-147f-4133-b665-9c74dec25096",
    "BatchCode": "PÄ",
    "No": 2,
    "Document": "testDocNo",
    "BatchDate": "2020-07-09T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TotalAmount": 0.00,
    "PriceInclVat": 1,
    "FileExists": true
  },
  "Lines": [
    {
      "AccountCode": "4010",
      "Memo": "testMemo",
      "DepartmentCode": "testCode1",
      "TaxName": "Ei veronalainen",
      "DebitAmount": 0.00,
      "DebitCurrency": 0.00,
      "CreditAmount": 0.00,
      "CreditCurrency": 0.00,
      "TypeId": 0
    }
  ],
  "Attachment": {
    "FileName": "testFileName",
    "FileContent": "dGVzdEZpbGVDb250ZW50"
  }
}
```

:::details Click to see the result parameters
|Field Name|Type|Comment|
|----------|----|-------|
|Header|GLBHeader object||
|Lines|Array of GLEntry objects||
|Attachment|Attachment object||

### GLBHeaderObject

|Field Name|Comment|
|----------|-------|
|GLBId||
|BatchCode|| 	 
|No||
|Document||
|BatchDate||
|CurrencyCode|i.e. EUR, PLN etc|
|CurrencyRate|DebitCurrency and CreditCurrency will get value by multiplication of this rate. If currency is local currency, the rate is 1 and the DC and CC values are the same as amounts.|
|TotalAmount||
|PriceInclVat||
|FileName|Str|
|FileContent|File in base64|

### GLEntryObject

|Field Name|Comment|
|----------|-------|
|AccountCode||
|Memo||
|DepartmentCode||
|TaxName||
|DebitAmount||
|DebitCurrency|amount in currency e.g. amount*currency rate|
|CreditAmount||
|CreditCurrency|amount in currency e.g. amount*currency rate|

### AttachmentObject

|Field Name|Comment|
|----------|-------|
|FileName|Str|
|FileContent|PDF file in base64|
:::
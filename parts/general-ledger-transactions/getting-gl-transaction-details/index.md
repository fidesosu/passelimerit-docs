# Getting GL Transaction Details

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getglbatch`

## Request Payload

```json
{ 
  ID: "xxxx-xxx-xxxxx-xx-xxxxxx",
  AddAttachment: true/false
}
```

## GetGlBatchesObject

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|||


## Successful Result

|Field Name|Type|Comment|
|Header|GLBHeader object||
|Lines|Array of GLEntry objects||

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
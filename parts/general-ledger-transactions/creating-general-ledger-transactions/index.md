# Creating General Ledger Transactions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendglbatch`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|DocNo|Str 35||
|BatchDate|Date||
|EntryRow|Array of EntryRow objects||
|Attachment|AttachmentObject||
|CurrencyCode|Str||
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
|FileName|Str||
|FileContent|Str|PDF In Base64 format|



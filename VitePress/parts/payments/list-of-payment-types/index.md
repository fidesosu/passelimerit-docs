# List of Payment Types

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpaymenttypes`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Type|Int|1 - purchases,<br> 2 - expense reports,<br> 3 - sales|


## Successful result

|Field|Type|Comment|
|-----|----|-------|
|SourceType|Int|1 - cash,bank;<br> 2 - reporting entities;<br> 3 - general ledger account|
|BankType|Int||
|Id|Guid||
|Name|Str||
|CurrencyCode|Str||



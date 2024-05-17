# Get Sales Invoice PDF

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getsalesinvpdf`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|DelivNote|Bool|If true then, the sended invoice without prices. Allowed "true" or "false" (lowercase).|

## Successful result

|Field|Type|Comment|
|-----|----|-------|
|FileName|Str||
|FileContent|Str|Pdf file in base64|
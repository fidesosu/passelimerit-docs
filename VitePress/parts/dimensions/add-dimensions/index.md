# Add Dimensions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddimensions`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of Dimensions||

## Dimensions

|Field|Type|Comment|
|-----|----|-------|
|Id|Int||
|Name|Str 50||
|Type|Int|1-detail, 2-summary|
|GenId|Int|General dimension Id, if not 0|
|PosNeg|Bool|if true amount is positive in debit|


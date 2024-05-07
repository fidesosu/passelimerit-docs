# Set Offer status

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/setofferstatus`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|NewStatus|Int|1 unsent, 2 sent, 3 confirmed, 4 rejected, 5 commented, 7 canceled|
|Comment|Str|Required if NewStatus=5|
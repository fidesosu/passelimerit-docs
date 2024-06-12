# Set Offer status

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/setofferstatus`

## Query Payload
```json
{
  "Id": "31fe26d0-7928-47f7-8702-2d066e332b77",
  "NewStatus": "2",
  "Comment": ""
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid||Required|
|NewStatus|Int|1 unsent, 2 sent, 3 confirmed, 4 rejected, 5 commented, 7 canceled|Required|
|Comment|Str|Required if NewStatus=5|Required[?](## "Required if NewStatus = 5")|
:::

## Successful Result
```json
"Status changed"
```
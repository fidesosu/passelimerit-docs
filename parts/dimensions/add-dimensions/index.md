# Add Dimensions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddimensions`

## Query Payload
```json
{
  "Dimensions": [
    {
      "Id": 3,
      "Name": "Dimension 1",
      "Type": 1,
      "GenId": 0,
      "PosNeg": false
    }
  ]
}
```

:::details Click to see Dimensions parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Int||
|Name|Str 50||
|Type|Int|1-detail, 2-summary|
|GenId|Int|General dimension Id, if not 0|
|PosNeg|Bool|if true amount is positive in debit|
:::
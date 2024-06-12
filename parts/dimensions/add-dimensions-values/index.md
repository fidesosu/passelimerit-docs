# Add Dimensions Values

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddimvalues`

## Query Payload
```json
{
  "Dimensions": [
    {
      "DimId": 3,
      "DimValueId": "00000000-0000-0000-0000-000000000000",
      "DimValueCode": "DimValueCode",
      "DimValueName": "DimValueName",
      "EndDate": "20240507"
    }
  ]
}
```

:::details Click to see Dimensions parameters
|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid|If not exist, creating the new dimension value, else update the existed dimension value EndDate.|
|DimValueCode|Str||
|DimValueName|Str||
|EndDate|Date|Date in format: YYYYmmDD|
:::
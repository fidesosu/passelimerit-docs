# Add Dimensions Values

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddimvalues`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of Dimensions||

## Dimensions

|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid|If not exist, creating the new dimension value, else update the existed dimension value EndDate.|
|DimValueCode|Str||
|DimValueName|Str||
|EndDate|Date|Date in format: YYYYmmDD|



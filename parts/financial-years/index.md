# Financial Years

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getaccperiods`

## Query Payload
```json
{ }
```
## Successful Result

|Field|Type|Comment|
|-----|----|-------|
|SaveFrom|DateTime||	
|SaveTo|DateTime||
|AccPeriods|Array of AccPeriods||

## AccPeriod

|Field|Type|Comment|
|-----|----|-------|
|AccPeriodId|Guid|
|StartDate|DateTime|	
|EndDate|DateTime|	
|Active|Bool|
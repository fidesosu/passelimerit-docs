# Financial Years

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getaccperiods`

## Query Payload
```json
{ }
```

## Successful Result
```json
{
  "SaveFrom": "1901-01-01T00:00:00Z",
  "SaveTo": "1901-01-01T00:00:00Z",
  "AccPeripods": [
    {
      "AccPeriodId": "8ae4d8b8-0a94-423a-bfe2-0061a2dad215",
      "StartDate": "2015-01-01T00:00:00",
      "EndDate": "2015-12-31T00:00:00",
      "Active": true
    },
    // ...
  ]
}
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|SaveFrom|DateTime||	
|SaveTo|DateTime||
|AccPeriods|Array of AccPeriods||

### AccPeriod

|Field|Type|Comment|
|-----|----|-------|
|AccPeriodId|Guid|
|StartDate|DateTime|	
|EndDate|DateTime|	
|Active|Bool|
:::
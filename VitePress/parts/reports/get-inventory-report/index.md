# Get Inventory Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getinventoryreport`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|ArticleGroups|Array of article groups|Array of article group codes|
|Location|Str|Stock code or name|
|RepDate|Date|YYYYmmDD|
|ShowZero|Bool|true/false|
|WithReservations|Bool|true/false|


## Successful Result

Array of articles
|Field|Type|Comment|
|-----|----|-------|
|ItemCode|String||
|EANCode|String||
|ItemName|String||
|LocName|String||
|Quantity|Decimal||
|ReservedQuantity|Decimal||
|UnitCode|String||
|Amount|Decimal||
|Price|Decimal||



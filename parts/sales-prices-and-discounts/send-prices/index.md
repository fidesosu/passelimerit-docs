# Send prices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendprices`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Prices|Array of prices objects||

## Prices Object

|Field|Type|Comment|
|-----|----|-------|
|TargetGroup|Int|0-campaign, <br>1- Customer, <br>2- Customer Group|
|TargetName|Str||	
|ItemCode|Str||	
|Price|Decimal||
|CurrencyCode|Str||
|DiscountAllowed|Bool|true / false|
|StartDate|Date||	
|EndDate|Date||

## Successful Result

OK

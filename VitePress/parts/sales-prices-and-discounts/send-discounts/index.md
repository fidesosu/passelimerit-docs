# Send discounts

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddiscounts`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Discounts|Array of Discounts objects||

## Discounts Object

|Field|Type|Comment|
|------|----|-------|
|TargetGroup|Int|1- Customer, <br>2- Customer Group|
|TargetName|Str||	
|GroupType|Int|1- Item, <br>2- Item Group|
|GroupCode|Str||	
|DiscountPrc|Decimal||	
|StartDate|Date||	
|EndDate|Date||

## Successful Result

OK

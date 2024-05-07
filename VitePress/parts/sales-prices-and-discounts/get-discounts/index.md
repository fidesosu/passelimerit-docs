# Get discounts

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getdiscounts`

## Query Payload
```json
{ }
```
## Successful Result

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||	
|GroupType|Int||	
|GroupId|Guid||	
|GroupName|Str||	
|GroupCode|Str||	
|TGgroupType|Int||
|TGroupId|Guid||
|TGroupName|Str||
|StartDate|Date|If unspecified, 01.01.1901|
|EndDate|Date|If unspecified, 01.01.1901|
|Discount0|Decimal||
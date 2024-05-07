# Get prices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getprices`

## Query Payload
```json
{  }
```
## Successful Result

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||	
|ItemId|Guid||	
|ItemName|Str||	
|ItemCode|Str||	
|TGroupType|Str||	
|TGroupId|Guid||	
|TGroupName|Str||	
|CurrencyId|Int||	
|CurrencyCode|Str||	
|StartDate|Date|If unspecified, 01.01.1901|
|EndDate|Date|If unspecified, 01.01.1901|
|Price0|Decimal||	
|AllowDisc|Bool||	
|UOMId|Bool||	
|UOMName|Str||	
|UOMNamePlural|Str||
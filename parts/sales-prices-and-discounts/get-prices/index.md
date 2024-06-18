# Get prices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getprices`

## Query Payload
```json
{ }
```

## Successful Result
```json
[
  {
    "CompanyId": 404,
    "LocationId": "b600826a-feaa-42ac-9dc3-ab03b4f66461",
    "Code": "1",
    "Name": "Varasto",
    "InBPrefix": "ST-",
    "InBNextNo": 4,
    "OutBPrefix": "VM-",
    "OutBNextNo": 2,
    "Loc2LocPrefix": "LL-",
    "Loc2LocNextNo": 1,
    "InvSetPrefix": "KE-",
    "InvSetNextNo": 1
  }
]
```
:::details Click to see the result parameters
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
:::
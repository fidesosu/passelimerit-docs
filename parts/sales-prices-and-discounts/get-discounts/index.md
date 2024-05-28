# Get discounts

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getdiscounts`

---
:::info Query Payload
```json
{ }
```
:::
---
:::info Successful Result
```json
[
  {
    "Id": "1af43f8f-65be-4ebb-a449-93575964041f",
    "GroupType": 0,
    "GroupId": "00000000-0000-0000-0000-000000000000",
    "GroupName": "",
    "GroupCode": "",
    "TGroupType": 0,
    "TGroupId": "00000000-0000-0000-0000-000000000000",
    "TGroupName": "",
    "StartDate": "2020-07-07T00:00:00",
    "EndDate": "2020-07-07T00:00:00",
    "Discount0": 0.0000000
  },
  // ...
]
```
:::details Click to see the result parameters
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
:::
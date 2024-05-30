# Get list of locations

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getlocations`

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
:::details Click to see the query parameters
|Fields|Type|Comment|
|------|----|-------|
|CompanyId|Int||	
|LocationId|Guid||	
|Code|Str||	
|Name|Str||	
|InBPrefix|Str 5||	
|InBNextNo|Int||	
|OutBPrefix|Str 5||	
|OutBNextNo|Int||	
|Loc2LocPrefix|Str 5||	
|Loc2LocNextNo|Int||	
|InvSetPrefix|Str 5||	
|InvSetNextNo|Int||
:::
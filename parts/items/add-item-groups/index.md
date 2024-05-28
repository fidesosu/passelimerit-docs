# Add Item groups

## EndPoints

<!--@include: @/dist/md/api_url.md-->v2/senditemgroups`

:::info Query Payload
```json
{     
  "ItemGroups":[
    {
      "Code": "testCode",
      "Name": "testName"
    }
  ]
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|Code|Str||	
|Name|Str||
:::
---
:::info Successful Result
```json
[
  {
    "Code": "testCode",
    "Id": "819463f7-f1a2-49e7-a4ea-796f7cf9ba19"
  },
  // ...
]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|Code|Str||	
|Id|Guid||
:::
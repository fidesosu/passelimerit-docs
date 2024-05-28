# Project List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getprojects`

---
:::info Query Payload
```json
{ }
```
:::
---
:::info Successful result
```json
[
  {
    "Code": "P1",
    "Name": "Project 1",
    "EndDate": "5/7/2024"
  },
  {
    "Code": "Project 2",
    "Name": "Test Project 2",
    "EndDate": "6/3/2027"
  }
]
```

:::details Click to see result parameters
|Field Name|Type|Comment|
|----------|----|-------|
|Code|Str 20||
|Name|Str 64||
|EndDate|date||
:::
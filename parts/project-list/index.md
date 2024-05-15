# Project List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getprojects`

## Query Payload

```json
{ }
```

## Successful result

:::info JSON Result
```json
[
  {
    "Code": "P1",
    "Name": "Project 1",
    "EndDate": "2021-12-31"
  }
]
```
:::

:::details Click to see details
|Field Name|Type|Comment|Required|
|----------|----|-------|--------|
|Code|Str 20||Required|
|Name|Str 64||Required|
|EndDate|date||Required|
:::
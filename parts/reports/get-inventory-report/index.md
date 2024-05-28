# Get Inventory Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getinventoryreport`

---
:::info Query Payload
```json
{
  "ArticleGroups": [],
  "Location": "",
  "RepDate": "yyyyMMdd",
  "ShowZero": false,
  "WithReservations": false
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|ArticleGroups|Array of article groups|Array of article group codes|
|Location|Str|Stock code or name|
|RepDate|Date|YYYYmmDD|
|ShowZero|Bool|true/false|
|WithReservations|Bool|true/false|
:::
---
:::info Successful Result
```json
[]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|ItemCode|Str||
|EANCode|Str||
|ItemName|Str||
|LocName|Str||
|Quantity|Decimal||
|ReservedQuantity|Decimal||
|UnitCode|Str||
|Amount|Decimal||
|Price|Decimal||
:::
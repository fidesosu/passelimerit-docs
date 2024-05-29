# Send discounts

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senddiscounts`

---
:::info Query Payload
```json
{
  "Discounts": [
    {
      "TargetGroup": 1,
      "TargetName": "testName",
      "GroupType": 1,
      "GroupCode": "testCode",
      "DiscountPrc": 0,
      "StartDate": "20200709",
      "EndDate": "20200709"
    }
  ]
}
```
:::details Click to see the query parameters
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
:::
---
:::info Successful Result
```json
"OK"
```
:::
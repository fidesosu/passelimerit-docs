# Send prices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendprices`

---
:::info Query Payload
```json
{
  "Prices": [
    {
      "TargetGroup": 0,
      "TargetName": "",
      "ItemCode": "",
      "Price": 0,
      "CurrencyCode": "EUR",
      "DiscountAllowed": true,
      "StartDate": "20200707",
      "EndDate": "20200707"
    }
  ]
}
```
:::details Click to see the query parameters

## Query Parameters

|Field|Type|Comment|
|-----|----|-------|
|Prices|Array of prices objects||

## Prices Object Parameters

|Field|Type|Comment|
|-----|----|-------|
|TargetGroup|Int|0-campaign, <br>1- Customer, <br>2- Customer Group|
|TargetName|Str||	
|ItemCode|Str||	
|Price|Decimal||
|CurrencyCode|Str||
|DiscountAllowed|Bool|true / false|
|StartDate|Date||	
|EndDate|Date||
:::
---
:::info Successful Result
```text
OK
```
:::
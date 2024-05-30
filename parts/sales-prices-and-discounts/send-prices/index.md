# Send prices

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendprices`

---
:::info Query Payload
```json
{
  "Prices": [
    {
      "TargetGroup": 1,
      "TargetName": "testName",
      "ItemCode": "eu-maat tav",
      "Price": 0,
      "CurrencyCode": "EUR",
      "DiscountAllowed": true,
      "StartDate": "20200707",
      "EndDate": "20200708"
    }
  ]
}
```

>[!IMPORTANT]
>There is a problem with how the API checks the ItemCode. It has to be in lowercase or else it will not work.

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
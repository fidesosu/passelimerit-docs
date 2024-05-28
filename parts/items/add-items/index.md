# Add Items

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senditems`

:::info Query Payload
```json
{
  "Items": [
    {
      "Type": 3,
      "Usage": 1,
      "Code": "testCode",
      "Description": "testDescription"
    }
  ]
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Items|Array of itemobjects||Required|

## ItemObject
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Type|Int|1-stock item, <br>2-service, <br>3-item.|Required|
|Usage|Int|1-sales, <br>2-purchases, <br>3-sales and purchases.|Required|
|Code|Str 20||Required|
|EANCode|Str|||
|Description|Str 100||Required|
|UOMName|Str 64|Required for stock item|Required?|
|DefLocationCode|Str 20|Required, if multiple stocks in use.|Required?|
|GTUCode|Int|For Usage:1 (sales),  Poland only, values: 1...13||
|DescriptionEN|Str 100|||
|DescriptionRU|Str 100|||
|DescriptionFI|Str 100|||
|TaxId|Guid|||
|ItemGrCode|Str|If used then must be found in the company database||
|SalesAccCode|Str 10|||
|PurchaseAccCode|Str 10|||
|InventoryAccCode|Str 10|||
|CostAccCode|Str 10|||
:::
---
:::info Successful Result
```json
[
  {
    "ItemId": "79aa7fa0-43ed-47f9-bda6-9450bcadea81",
    "Code": "testCode"
  }
]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|ItemId|Guid||	
|Code|Str||
:::
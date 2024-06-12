# Items List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getitems`

## Query Payload
```json
{ }
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|If filled, next fields will be ignored||
|Code|Str|Exact match||
|Description|Str|Broad match||
|LocationCode|Str|Optional if filled, then stock code for current goods on hand report||
:::

## Successful Result
```json
[
  {
    "ItemId": "c9a417e7-bf34-4443-9f11-daf0912e99df",
    "Code": "1234567",
    "Name": "Bag of goldflakes",
    "UnitofMeasureName": "kg",
    "Type": "Tavara",
    "SalesPrice": 0.0000000,
    "InventoryQty": 0.000000,
    "ReservedQty": 0.000,
    "VatTaxName": null,
    "Usage": "myyntinimikkeissä",
    "SalesAccountCode": "3010",
    "PurchaseAccountCode": "4000",
    "InventoryAccountCode": "1531",
    "ItemCostAccountCode": "4000",
    "DiscountPct": 0.00,
    "LastPurchasePrice": 0.0000000,
    "ItemUnitCost": 0.00,
    "InventoryCost": 0.00,
    "ItemGroupName": null,
    "DefLoc_Name": null,
    "EANCode": null,
    "TypeCode": 3,
    "UsageCode": 1
  },
  // ...
]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|ItemId|Guid||
|Code|Str||
|Name|Str||
|UnitofMeasureName|Str||
|Type|Str||
|SalesPrice|Decimal||
|InventoryQty|Decimal||
|ReservedQty|Decimal||
|VatTaxName|Str||
|Usage|Str||
|SalesAccountCode|Str||
|PurchaseAccountCode|Str||
|InventoryAccountCode|Str||
|ItemCostAccountCode|Str||
|DiscountPct|Decimal||
|LastPurchasePrice|Decimal||
|ItemUnitCost|Decimal||
|InventoryCost|Decimal||
|ItemGroupName|Str||
|DefLoc_Name|Str||
|EANCode|Str||
|TypeCode|Int||
|UsageCode|Int||
:::

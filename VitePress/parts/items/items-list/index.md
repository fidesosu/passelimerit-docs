# Items List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getitems`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled, next fields will be ignored|
|Code|Str|Exact match|
|Description|Str|Broad match|
|LocationCode|Str|Optional if filled, then stock code for current goods on hand report|

## Successful Result

The result for
this request can be:
1. empty result
2. a certain item (if exact match is used and/or only one item is found)
3. a list of items matching the broad match term.
4. If filled LocationCode, then InventoryQty and InventoryCost for selected stock.
---
The result, if not empty, is the following object:
- ItemId
- Code
- Name
- UnitofMeasureName
- Type
- SalesPrice
- InventoryQty
- ReservedQty
- VatTaxName
- Usage
- SalesAccountCode
- PurchaseAccountCode
- InventoryAccountCode
- ItemCostAccountCode
- DiscountPct
- LastPurchasePrice
- ItemUnitCost
- InventoryCost
- ItemGroupName
- DefLoc_Name


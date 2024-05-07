# Add Items

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/senditems`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Items|Array of itemobjects||

## ItemObject

|Field|Type|Comment|
|-----|----|-------|
|Type|Int|1-stock item, 2-service, 3-item. Required.|
|Usage|Int|1-sales, 2-purchases, 3-sales and purchases. Required.|
|Code|Str 20|Required|
|EANCode|Str||
|Description|Str 100|Required|
|UOMName|Str 64|Required for stock item|
|DefLocationCode|Str 20|Required, if multiple stocks in use.|
|GTUCode|Int|For Usage:1 (sales),  Poland only, values: 1...13|
|DescriptionEN|Str 100||
|DescriptionRU|Str 100||
|DescriptionFI|Str 100||
|TaxId|Guid||
|ItemGrCode|Str|If used then must be found in the company database|
|SalesAccCode|Str 10||
|PurchaseAccCode|Str 10||
|InventoryAccCode|Str 10||
|CostAccCode|Str 10||


## Successful Result

Array of answers

|Field|Type|Comment|
|ItemId|Guid||	
|Code|Str||
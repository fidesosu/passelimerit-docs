# Update Item

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/updateitem`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|Required|
|Code|Str 20||
|Description|Str 100||
|SalesPrice|Decimal 18.2||
|ItemGrCode|Str|If used then must be found in the company database|
|DiscountPct|Decimal 18.2||
|EANCode|Str 13||
|NameEN|Str 100||
|LastPurchasePrice|Decimal 18.2||
|SalesAccountCode|Str 10|If used then must be found in the company database|
|InventoryAccountCode|Str 10|If used then must be found in the company database|
|ItemCostAccountCode|Str 10|If used then must be found in the company database|
|TaxId|Guid||



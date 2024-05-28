# Update Item

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/updateitem`

---
:::info Query Payload
```json
{
  "Id": "c9a417e7-bf34-4443-9f11-daf0912e99df",
  "Code": "",
  "Description": "",
  "SalesPrice": 0,
  "ItemGrCode": "",
  "DiscountPct": 0,
  "EANCode": "",
  "NameEN": "",
  "LastPurchasePrice": 0,
  "SalesAccountCode": "",
  "InventoryAccountCode": "",
  "ItemCostAccountCode": "",
  "TaxId": "973a4395-665f-47a6-a5b6-5384dd24f8d0"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid||Required|
|Code|Str 20|||
|Description|Str 100|||
|SalesPrice|Decimal 18.2|||
|ItemGrCode|Str|If used then must be found in the company database||
|DiscountPct|Decimal 18.2|||
|EANCode|Str 13|||
|NameEN|Str 100|||
|LastPurchasePrice|Decimal 18.2|||
|SalesAccountCode|Str 10|If used then must be found in the company database||
|InventoryAccountCode|Str 10|If used then must be found in the company database||
|ItemCostAccountCode|Str 10|If used then must be found in the company database||
|TaxId|Guid|||
:::
---
:::info Successful Result
```json
"Updated"
```
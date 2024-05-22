# Accounts List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getaccounts`

## Query Payload
:::info Minimum Payload
```json
{ }
```
:::

:::details Click to see payload parameters
|Field|Type|Comment|
|-----|----|-------|
|AccountId|Guid||
|NoActive|Bool||
|Code|Str||
|Name|Str||
|TaxName|Str||
|LinkedVendorName|Str|Filled for tax accounts|
|IsParent|Str|`1` – details,  <br>`2` – summary|
|UsageFilter|Int|`0` or `empty` - all accounts. <br>`1` - cost accounts, <br>`2` - cost contra-accounts, <br>`3` - purchase VAT accounts|
:::

## Successful Result

:::info 
```json
[
  {
    "AccountID": "d92c9fbb-463e-4768-xxxx-xxxxxxxxxxxx",
    "NonActive": "Ei",
    "Code": "4010",
    "Name": "Tullit, verot ja muut maksut tullattaessa",
    "TaxName": "Ei veronalainen",
    "LinkedVendorName": null,
    "IsParent": "Yksityiskohtainen"
  },
  // ...
]
```
:::

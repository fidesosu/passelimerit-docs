# Accounts List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getaccounts`

## Query Payload

```json
//Minimal payload:
{ }
```

|Field|Type|Comment|
|-----|----|-------|
|AccountId|Guid||
|NoActive|Bool||
|Code|Str||
|Name|Str||
|TaxName|Str||
|LinkedVendorName|Str|Filled for tax accounts|
|IsParent|Str|1 – details,  2 – summary|
|UsageFilter|Int|0 or missing will output all accounts. 1 for cost accounts, 2 for cost contra-accounts, 3 for purchase VAT accounts|


## Successful Result

The result for
this request can be:
The result, if
not empty, is an Account object with following fields:
- AccountID
- NoActive
- Code
- Name
- TaxName
- LinkedVendorName
- IsParent


# Statement of Financial Position

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getbalancerep`


## Query Payload

```json
{
  EndDate: "yyyymmdd",
  PerCount: nn
}
```
|Field|Type|Comment|
|-----|----|-------|
|EndDate|Str|Balance date|
|PerCount|Int|Number of periods (months)|


## Successful result

| | |
|-|-|
|Data|Data Object|


## Data Object

| | | |
|-|-|-|
|No|Report line number||
|Description|||
|RowType|1-row description,<br> 2-balance of account,<br> 4-formula||
|Balance|Report line totals starting from the period enddate descending|If RowType=1 Balance= null|
|Details|Details Object|Report line detail info|


## Details Object

| | |
|-|-|
|AccountCode||
|AccountName||
|TypeId|1-assets, 2-liabilities|
|Balance|Report line totals starting from the period enddate descending|



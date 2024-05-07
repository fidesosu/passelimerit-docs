# Statement of Profit or Loss

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getprofitrep`


## Query Payload

```json
{
  EndDate: “yyyymmdd”,
  PerCount: n,
  DepFilter: “”
}
```


|Field|Type|Comment|
|-----|----|-------|
|EndDate|Str|Period end date|
|PerCount|Int|Number of periods (months)|
|DepFilter|Str|Department if used|


## Successful result

| | |
|-|-|
|Data|Data Object|


## Data Object

| | | |
|-|-|-|
|RDid||
|No|Report line number||
|Description|||
|RowType|1-row description, 3-account turnover, 4-formula||
|Balance|Report line totals starting from the period enddate descending|If RowType=1 Balance= null|
|Details|Details Object|Report line detail info|


## Details Object

| | |
|-|-|
|AccountCode||
|AccountName||
|TypeId|3-revenue, 4-expenses|
|Balance|Report line totals starting from the period enddate descending|



# Statement of Financial Position

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getbalancerep`

## Query Payload
```json
{
  EndDate: "yyyymmdd",
  PerCount: 2
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|EndDate|Str|Balance date|
|PerCount|Int|Number of periods (months)|
:::

## Successful Result
```json
{
  "ErrorMsg": "",
  "Data": []
}
```
:::details Click to see the result parameters
|Field|Comment|
|-|-|
|Data|Data Object|
:::

### DataObject
:::details Click to see the DataObject parameters
|Field|Comment|
|-|-|
|No|Report line number|
|Description||
|RowType|1-row description,<br> 2-balance of account,<br> 4-formula||
|Balance|Report line totals starting from the period enddate descending.<br><br>If `RowType` is `1`, `Balance` is `null`|
|Details|Details Object. Report line detail info|
:::

### DetailsObject
:::details Click to see the DetailsObject parameters
|Field|Comment|
|-|-|
|AccountCode||
|AccountName||
|TypeId|1-assets, 2-liabilities|
|Balance|Report line totals starting from the period enddate descending|
:::
# Statement of Profit or Loss

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getprofitrep`

## Query Payload

```json
{
  "EndDate": "yyyyMMdd",
  "PerCount": 2,
  "DepFilter": ""
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|EndDate|Str|Period end date|
|PerCount|Int|Number of periods (months)|
|DepFilter|Str|Department if used|
:::

## Successful Result
```json
{
  "ErrorMsg": "",
  "Data": [
    {
      "RDid": "6b96bdb1-d4c1-4113-88ac-389bbaf8253e",
      "No": "9810",
      "Description": "RESULT BEFORE ACCOUNTING TRANSFER AND TAXES",
      "RowType": 4,
      "Balance": [
        0.0,
        0.0,
        0.0
      ],
      "Details": []
    },
    // ...
  ]
}
```
:::details Click to see the result parameters
|Field|Comment|
|-|-|
|Data|Data Object|

### Data Object

|Field|Comment|
|-|-|
|RDid||
|No|Report line number|
|Description||
|RowType|1-row description, 3-account turnover, 4-formula|
|Balance|Report line totals starting from the period enddate descending.<br><br>If `RowType` is `1`, `Balance` is `null`|
|Details|Details Object. Report line detail info|


### Details Object

|Field|Comment|
|-|-|
|AccountCode||
|AccountName||
|TypeId|3-revenue, 4-expenses|
|Balance|Report line totals starting from the period enddate descending|
:::
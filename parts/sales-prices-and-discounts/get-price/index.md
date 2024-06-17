# Get Price

The valid price for the customer on a given date.

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getprice`


## Query Payload
```json
{
  "ItemCode": "testItem",
  "CustomerId": "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
  "CustName": "testName",
  "CustRegno": "testRegno",
  "CurrencyCode": "EUR",
  "UOMName": "testUOM",
  "DocDate": "20200707"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|ItemCode|Str||Required|
|CustomerId|Guid|If filled, CustName and CustRegNo will not be used||
|CustName|Str|Required one of CustName or CustRegno|Required?|
|CustRegno|Str||Required?|
|CurrencyCode|Str|If not specified, API will get local currency||
|UOMName|Str|||
|DocDate|Date||Required|
:::

## Successful Result
```json
{
  "ItemCode": "testItem",
  "Price": 10.0,
  "DiscountPct": 0.0
}
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|ItemCode|Str||
|Price|Dec||
|DiscountPct|Dec||
:::
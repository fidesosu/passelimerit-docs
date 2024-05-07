# Get Price

The valid price for the customer on a given date.

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getprice`

## Query payload

|Field|Type|Comment|
|-----|----|-------|
|ItemCode|Str|Required|
|CustomerId|Guid|If filled, CustName and CustRegNo will not be used|
|CustName|Str|Required one of CustName or CustRegno|
|CustRegno|Str||
|CurrencyCode|Str|If not specified, API will get local currency|
|UOMName|Str||
|DocDate|Date|Required|


## Successful result

|Field|Type|Comment|
|-----|----|-------|
|ItemCode|Str||
|Price|Dec||
|DiscountPct|Dec||



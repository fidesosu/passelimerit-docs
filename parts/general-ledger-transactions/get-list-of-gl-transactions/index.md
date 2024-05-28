# Get list of GL Transactions

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getglbatches`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date|In format yyyymmdd|
|PeriodEnd|Date|In format yyyymmdd . Period length max 3 months!|
|UnPaid|Bool|true/false|


## Successful Result

| |
|-|
|GLBIdBatchCode|
|No|     
|Document|   
|BatchDate|
|CurrencyCode|      
|CurrencyRate|
|TotalAmount|      
|PriceInclVat|
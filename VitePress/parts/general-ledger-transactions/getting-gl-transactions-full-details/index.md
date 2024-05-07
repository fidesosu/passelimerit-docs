# Getting GL Transactions Full Details

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/GetGLBatchesFull`

## Request Payload

|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date||
|PeriodEnd|Date|Max length of the period 31 days|
|WithLines|int|if 1 then with the lines|
|WithCostAlloc|int|if 1 then with the cost allocations|


## Succesful result

|Field|Comment|
|-----|-------|
|GLBId||
|BatchCode||
|No||
|Document||
|BatchDate||
|CurrencyCode||
|CurrencyRate||
|TotalAmount||
|PriceInclVat||
|Entries|Array of Entries Objects|


## Entries object

|Field|Comment|
|-----|-------|
|AccountCode||
|AccontName||
|Memo||
|DepartmentCode||
|DebitAmount||
|DebitCurrency||
|CreditAmount||
|CreditCurrency||
|TypeId||
|BatchId||
|EntryId||
|CostAllocLines|Array of CostAllocLines object|


## Cost Allocation Lines object

|Type|Comment|
|----|-------|
|SourceType|Dimension Id|
|Code|Dimension value code|
|Name|Dimension value name|
|Mult||
|Amount||
|BatchId||
|EntryId||

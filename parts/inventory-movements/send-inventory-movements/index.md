# Send Inventory Movements

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/SendInvMovement`

## Query Payload

Exampe Payload: payload only

|Field|Type|Comment|
|-|-|-|
|DocDate|Date||
|DocNo|Str 35||
|Location1Code|Str 20|Stock code|
|Location2Code|Str 20|Destination Stock code for Type 3|
|DepartmentCode|Str 20|if used then must be found in the database|
|Type|int|1-in, 2-out, 3-between Stocks|
|Rows|Array of Row objects||


## Row Object

|Field|Type|Comment|
|-|-|-|
|ArticleCode|Str 20|Must be found in the database|
|UOMName|Str 64||
|ItemUnitCost|Decimal 18.3|Required for Type 1|
|Quantity|Decimal 18.2||

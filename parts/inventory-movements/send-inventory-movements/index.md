# Send Inventory Movements

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendinvmovement`

## Query Payload
```json
{     
  "DocDate":"20200831",     
  "DocNo":"LL-4",     
  "Location1Code":"1",     
  "Location2Code":"2",
  "DepartmentCode":"Netti",     
  "Type":3,     
  "Rows": [     
    {       
      "ArticleCode":"lamp",
      "UOMName": "tk",
      "ItemUnitCost": 1.50,       
      "Quantity": 10     
    },     
    {       
    "ArticleCode":"pirn60w",
    "UOMName": "tk",
    "ItemUnitCost": 2.00,       
    "Quantity": 10     
    }    
  ] 
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-|-|-|
|DocDate|Date||
|DocNo|Str 35||
|Location1Code|Str 20|Stock code|
|Location2Code|Str 20|Destination Stock code for Type 3|
|DepartmentCode|Str 20|if used then must be found in the database|
|Type|int|1-in, 2-out, 3-between Stocks|
|Rows|Array of Row objects||

### Rows Object

|Field|Type|Comment|
|-|-|-|
|ArticleCode|Str 20|Must be found in the database|
|UOMName|Str 64||
|ItemUnitCost|Decimal 18.3|Required for Type 1|
|Quantity|Decimal 18.2||
:::

## Successful Result
```json

```
# Tax list

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/gettaxes`

## Query Payload

This endpoint does not need any attributes. It will respond with every tax rate that are in the system. You can see the list form GUI as well: Settings >> VAT settings.
```json
{ }
```

## Successful response

|Field Name|Type|Comment|
|----------|----|-------|
|Id|Guid||
|Code|Str 16||
|Name|Str 40||
|Percent|Decimal 2.2||
|TaxType|Int|Available values:<br>1 = VAT from sales and purchases<br>2 = VAT free transaction<br>5 = Not taxable<br>6 = Reversed VAT (AVL 8 c §)<br>8 = Sales revenue taxation (AVL 79 §)<br>12 = OSS sales to EU customers not VAT responsible<br>13 = VAT in EU fixed venue<br>15 = Proportional VAT|
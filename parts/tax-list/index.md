# Tax list

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/gettaxes`

## Query Payload
```json
{ }
```

## Successful Result
```json
[
  {
    "Id": "74ea3b66-127c-4c25-be23-097b811dd23c",
    "Code": "AE",
    "Name": "Rakennusalan käännetty alv",
    "TaxPct": 24.00,
    "TaxType": 6
  },
  // ...
]
```

:::details Click to see the result parameters
|Field Name|Type|Comment|
|----------|----|-------|
|Id|Guid||
|Code|Str 16||
|Name|Str 40||
|Percent|Decimal 2.2||
|TaxType|Int|Available values:<br>1 = VAT from sales and purchases<br>2 = VAT free transaction<br>5 = Not taxable<br>6 = Reversed VAT (AVL 8 c §)<br>8 = Sales revenue taxation (AVL 79 §)<br>12 = OSS sales to EU customers not VAT responsible<br>13 = VAT in EU fixed venue<br>15 = Proportional VAT|
:::
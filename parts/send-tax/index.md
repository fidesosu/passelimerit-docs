# Send Tax

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendtax`

## Query Payload
```json
{
  "Code": "taxcode",
  "CodeEN": "taxCodeEN",
  "CodeSE": "taxCodeSE",
  "CodeRU": "taxCodeRU",
  "Name": "taxName",
  "NameEN": "taxNameEN",
  "NameSE": "taxNameSE",
  "NameRU": "taxNameRU",
  "TaxPct": 10.00,
  "TaxType": 12,
  "CountryCode": "FI"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|Code|Str 16||
|CodeEN|Str 16||
|CodeSE|Str 16||
|CodeRU|Str 16||
|Name|Str 40||
|NameEN|Str 150||
|NameSE|Str 150||
|NameRU|Str 150||
|TaxPct|Dec 18.2||
|TaxType|Int|Required. Available values:<br> 1 = VAT from sales and purchases<br> 2 = VAT free transaction<br> 5 = Not taxable<br> 6 = Reversed VAT (AVL 8 c §)<br> 8 = Sales revenue taxation (AVL 79 §)<br> 12 = OSS sales to EU customers not VAT responsible<br> 13 = VAT in EU fixed venue<br> 15 = Proportional VAT|
|CountryCode|Str 2|Required|
:::

## Successful Result
```json
{
  "CreatedTaxId": "0ccadbe0-67a2-40d2-ba78-1cacaa8a2544"
}
```
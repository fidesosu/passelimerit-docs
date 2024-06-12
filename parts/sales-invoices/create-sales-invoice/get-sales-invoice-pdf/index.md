# Get Sales Invoice PDF

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getsalesinvpdf`

## Query Payload

```json
{
  "Id": "6126680c-10eb-40eb-a496-7111de0ebe20",
  "DelivNote": false
}
```

:::details Click to see query parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|DelivNote|Bool|If true then, the sended invoice without prices. Allowed "true" or "false" (lowercase).|
:::

## Successful Result

```json
{
  "FileName": "jori-testing Lasku: 123.pdf",
  "FileContent": "Some base64 string..."
}
```

:::details Click to see result parameters
|Field|Type|Comment|
|-----|----|-------|
|FileName|Str||
|FileContent|Str|Pdf file in base64|
:::
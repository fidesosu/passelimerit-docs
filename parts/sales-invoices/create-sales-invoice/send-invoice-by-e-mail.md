# Send Sales Invoice by e-mail

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendinvoicebyemail`

## Query Payload

```json
{
  "Id": "6126680c-10eb-40eb-a496-7111de0ebe20",
  "DelivNote": false
}
```

:::details Click to see query parameters
|Field|Type|Comment|
|-|-|-|
|Id|Guid|Sales invoice SIHId (one invoice per query)|
|DelivNote|Bool|If true then, the sended invoice without prices. Allowed "true" or "false" (lowercase).|
:::

## Successful Result

```json
"OK"
```
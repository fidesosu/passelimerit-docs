# Send Sales Invoice as e-invoice

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendinvoiceaseinv`

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

>[!NOTE]
>If the receiver is not e-invoice capable, then there is a message: api-noeinv

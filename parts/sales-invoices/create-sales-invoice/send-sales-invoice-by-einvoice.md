# Send Sales Invoice as e-invoice

Endpoints
<!--@include: @/dist/md/api_url.md-->v2/sendinvoiceaseinv`

## Query Payload
|Field|Type|Comment|
|-|-|-|
|Id|Guid|Sales invoice SIHId (one invoice per query)|
|DelivNote|Bool|If true then, the sended invoice without prices. Allowed "true" or "false" (lowercase).|

## Successful result

OK<br>
If the receiver is not e-invoice capable, then there is a message: api-noeinv

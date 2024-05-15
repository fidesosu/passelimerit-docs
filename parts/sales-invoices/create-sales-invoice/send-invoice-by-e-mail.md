# Send Sales Invoice by e-mail

## Endpoints
<!--@include: @/dist/md/api_url.md-->v2/sendinvoicebyemail`

## Query Payload
|Field|Type|Comment|
|-|-|-|
|Id|Guid|Sales invoice SIHId (one invoice per query)|
|DelivNote|Bool|If true then, the sended invoice without prices. Allowed "true" or "false" (lowercase).|

## Successful result

OK, or errormessage from mailserver
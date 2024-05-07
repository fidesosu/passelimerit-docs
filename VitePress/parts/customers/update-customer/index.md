# Update Customer

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/updatecustomer`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|Required|
|Name|Str 150||
|CountryCode|Str 2||
|Address|Str 100||
|City|Str 30||
|PostalCode|Str 15||
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|Email|||
|RegNo|Str 30||
|VatRegNo|Str 30||
|SalesInvLang|Str 2|EE, FI, PL|
|RefNoBase|Str 36||
|EInvPaymId|Str 20||
|EinvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|BankAccount|Str 50||
|Contact|Str 35||
|ApixEinv|Str 20||
|GroupInv|Bool||
|PaymentDeadLine|Int||
|Comments|Array of comments|Comment Str CommDate Date|
|OverdueCharge|Decimal||
# Update Vendor

- Update Vendor v1
- [Update Vendor v2](#v2)

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/updatevendor`

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
|VatAccountable|bool|true, false|
|BankAccount|Str 50||
|ReferenceNo|Str 36||


## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/updatevendor`

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
|VatAccountable|bool|true, false|
|BankAccount|Str 50||
|ReferenceNo|Str 36||
|Dimensions|Array of dimensions objects|If used then must be found in the company database.|


## Dimensions Object

|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||



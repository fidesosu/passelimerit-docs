# Update Vendor

- Update Vendor v1
- [Update Vendor v2](#v2)

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/updatevendor`

---
:::info V1 - Query Payload
```json
{
  "Id": "01b7732d-ef2b-43a1-bb25-0ad715cf6b22",
  "Name": "Test",
  "CountryCode": "EE",
  "Address": "Test",
  "City": "Test",
  "PostalCode": "12345",
  "PhoneNo": "123456",
  "PhoneNo2": "123456",
  "Email": "",
  "RegNo": "123456",
  "VatRegNo": "123456",
  "SalesInvLang": "EE",
  "VatAccountable": true,
  "BankAccount": "123456",
  "ReferenceNo": "123456"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid||Required|
|Name|Str 150|||
|CountryCode|Str 2|||
|Address|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|Email||||
|RegNo|Str 30|||
|VatRegNo|Str 30|||
|SalesInvLang|Str 2|EE, FI, PL||
|VatAccountable|bool|true, false||
|BankAccount|Str 50|||
|ReferenceNo|Str 36|||
:::

## Endpoints v2 {#v2}

<!--@include: @/dist/md/api_url.md-->v2/updatevendor`

---
:::info V2 - Query Payload
```json
{
  "Id": "01b7732d-ef2b-43a1-bb25-0ad715cf6b22",
  "Name": "Test",
  "CountryCode": "EE",
  "Address": "Test",
  "City": "Test",
  "PostalCode": "12345",
  "PhoneNo": "123456",
  "PhoneNo2": "123456",
  "Email": "",
  "RegNo": "123456",
  "VatRegNo": "123456",
  "SalesInvLang": "EE",
  "VatAccountable": true,
  "BankAccount": "123456",
  "ReferenceNo": "123456",
  "Dimensions": [
    {
      "DimId": 1,
      "DimValueId": "00000000-0000-0000-0000-000000000000",
      "DimCode": "1"
    }
  ]
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid||Required|
|Name|Str 150|||
|CountryCode|Str 2|||
|Address|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|Email||||
|RegNo|Str 30|||
|VatRegNo|Str 30|||
|SalesInvLang|Str 2|EE, FI, PL||
|VatAccountable|bool|true, false||
|BankAccount|Str 50|||
|ReferenceNo|Str 36|||
|Dimensions|Array of dimensions objects|If used then must be found in the company database.||

### Dimensions Object

|Field|Type|Comment|Required|
|-----|----|-------|--------|
|DimId|Int|||
|DimValueId|Guid|||
|DimCode|Str|||
:::
---
:::info Successful Result
```json
"Updated"
```
:::
# Get Vendor List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getvendors`

---
:::info Query Payload
```json
{
  "Id": "01b7732d-ef2b-43a1-bb25-0ad715cf6b22",
  "RegNo": "1234567-8",
  "VatRegNo": "FI12345678",
  "Name": "....  Oy",
  "WithComments": true,
  "CommentsFrom": "2021-01-01",
  "ChangedDate": "20210101"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|If filled, next fields will be ignored||
|RegNo|Str|Exact match.||
|VatRegNo|Str|Exact match.||
|Name|Str|Broad match.||
|WithComments|Bool|true, false||
|CommentsFrom|Date|Date later||
|ChangedDate|Date|Date of changing or creating customer/vendor (YYYYmmDD)||
:::
---
:::info Successful Result
```json
[
  {
    "VendorId": "01b7732d-ef2b-43a1-bb25-0ad715cf6b22",
    "VendorType": 1,
    "Name": "....  Oy",
    "Contact": null,
    "Address": null,
    "City": null,
    "County": null,
    "PostalCode": null,
    "CountryCode": "FI",
    "CountryName": "FINLAND",
    "PhoneNo": null,
    "PhoneNo2": null,
    "FaxNo": null,
    "Email": null,
    "HomePage": null,
    "PaymentDeadLine": 0,
    "OverdueCharge": 0.00,
    "CurrencyCode": "EUR",
    "VendorGroupName": null,
    "RegNo": null,
    "VatRegNo": null,
    "BankAccount": null,
    "ReferenceNo": "",
    "VatAccountable": true,
    "Dimensions": null
  },
  // ...
]
```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|VendorId|Guid||
|VendorType|Int|1 - vendor, <br>3 - the reporting entity|
|Name|Str 150||
|RegNo|Str 30||
|Contact|Str 50||
|PhoneNo|Str 50||
|Email|Str 80||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int||
|BankAccount|Str 50||
|HomePage|Str 80||
|ReferenceNo|Str 36||
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryName|Str 100||
|CountryCode|Str 2||
|PhoneNo2|Str 50||
|FaxNo|Str 50||
|OverdueCharge|Decimal 5.2||
|VendorGroupName|Str 50||
|VatRegNo|Str 30||
|VatAccountable|Bool||
|Dimensions|Array of dimensioons||
|ChangedDate|Date||

### Dimensions object

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||
:::
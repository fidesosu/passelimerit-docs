# Create Vendor

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendvendor`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|Name|Str 150|Required when vendor is added. The vendor name must be unique.|
|RegNo|Str 30||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|RefNoBase|Str36||
|Address|Str 100||
|CountryCode|Str 2|Required when adding|
|County|Str 100||
|City|Str 30||
|PostalCode|Str 15||
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
|Dimensions|Array of DimensionsObjects||
|VendorType|Int|1=vendor, 3=the reporting entity|


## DimensionsObject

|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||


## Successful Result

|Field|Type|
|-----|----|
|Id|Guid|
|Name|Str|

## Example Payload

```json
{
  “Name”:”Mart Mustikas”,
  “RegNo”:”1232233234″,
  “VatAccountable”:true,
  “VatRegNo”:”12342234″,
  “CurrencyCode”:”EUR”,
  “PaymentDeadLine”:7,
  “OverDueCharge”:0,
  “Address”:”Kalda tee 10″,
  “City”:”Morna Linn”,
  “County”:”Pärnu maa”,
  “PostalCode”:”80034″,
  “CountryCode”:”EE”,
  “PhoneNo”:”55555555″,
  “Email”:”mart.mustikas@example.com”,
  “VendorType”:1
}
```

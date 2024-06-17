# Create Vendor

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendvendor`

## Minimum Query Payload
```json
{
  "Name":"testVendor",
  "VatAccountable":true,
  "CountryCode":"FI"
}
```

:::details Click to see payload parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|Id|Guid|||
|Name|Str 150|Required when vendor is added. <br>The vendor name must be unique.|Required|
|RegNo|Str 30|||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|Required|
|VatRegNo|Str 30|||
|CurrencyCode|Str 4|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|RefNoBase|Str36|||
|Address|Str 100|||
|CountryCode|Str 2|Required when adding|Required|
|County|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|Dimensions|Array of DimensionsObjects|||
|VendorType|Int|1 - vendor, <br>3 - the reporting entity||
:::

### DimensionsObject
```json
{
  // ...
  "Dimensions": [
    {
      "DimId": 1,
      "DimValueId": "00000000-0000-0000-0000-000000000000",
      "DimCode": "1"
    }
  ]
}
```

:::details Click to see DimensionsObject parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|DimId|Int|||
|DimValueId|Guid|||
|DimCode|Str|||
:::

## Successful Result
```json
{
  "Id": "be20f410-2af5-40b1-xxxx-xxxxxxxxxxxx",
  "Name": "Mart Mustikas"
}
```
:::details Click to see the result parameters
|Field|Type|
|-----|----|
|Id|Guid|
|Name|Str|
:::
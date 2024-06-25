# Create Customer

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendcustomer`

## Query Payload
```json
{
  "Name": "Mart Mustikas",
  "RegNo": "1232233234",
  "NotTDCustomer": false,
  "CurrencyCode": "EUR",
  "PaymentDeadLine": 7,
  "OverDueCharge": 0,
  "Address": "Kalda tee 10",
  "City": "Morna Linn",
  "County": "Pärnu maa",
  "PostalCode": "80034",
  "CountryCode": "EE",
  "PhoneNo": "55555555",
  "Email": "mart.mustikas@example.com",
  "SalesInvLang": "ET",
  "EInvOperator": 1,
  "Dimensions": [
    {           
      "DimId": 2,           
      "DimValueId": "7fc5f7f0-0537-4d64-b4cc-a8647bd217ac",           
      "DimCode": "hfif"
    }
  ]
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|---------|----|-------|--------|
|Id|Guid|||
|Name|Str 150|The customer name must be unique.|Required, when a new customer is added.|
|RegNo|Str 30|||
|NotTDCustomer|Bool|EE True for physical persons and foreign companies. <br><br>PL True for physical persons. Allowed "true" or "false" (lowercase).|Required, when a new customer is added.|
|VatRegNo|Str 30|||
|CurrencyCode|Str 30|||
|PaymentDeadLine|Int|If missing then taken from default settings.||
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.||
|RefNoBase|Str 36|||
|Address|Str 100|||
|CountryCode|Str 2||Required, when a new customer is added.|
|County|Str 100|||
|City|Str 30|||
|PostalCode|Str 15|||
|PhoneNo|Str 50|||
|PhoneNo2|Str 50|||
|HomePage|Str 80|||
|Email|Str 80|||
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)||
|Contact|Str 35|||
|GLNCode|Str 10|||
|PartyCode|Str 20|||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)||
|EInvPaymId|Str 20|||
|BankAccount|Str 50|||
|Dimensions|Array of DimensionsObjects|||
|CustGrCode|Str 20|||
|ShowBalance|Bool|||
|ApixEInv|Str 20|||
:::

## Dimensions Object
```json
{
  // ...
  "Dimensions":[
    {           
      "DimId": 2,           
      "DimValueId": "7fc5f7f0-0537-4d64-b4cc-a8647bd217ac",           
      "DimCode": "hfif"
    }
  ]
}
```
:::details Click to see the dimensions object parameters
|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||
:::

## Successful Result
```json
{
  "Id": "2cbdda92-8cd6-439e-9c7a-a0d04144764f",
  "Name": "Mart Mustikas"
}
```
:::details Click to see the result parameters
|Field|Type|
|-----|----|
|Id|Guid|
|Name|Str|
:::
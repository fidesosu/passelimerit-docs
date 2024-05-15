# Create Customer

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/sendcustomer`

## Query Payload

|Parameter|Type|Comment|
|---------|----|-------|
|Id|Guid||
|Name|Str 150|Required when customer is added. The customer name must be unique.|
|RegNo|Str 30||
|NotTDCustomer|Bool|Required when customer is added. EE True for physical persons and foreign companies.  PL True for physical persons. Allowed "true" or "false" (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 30||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|RefNoBase|Str 36||
|Address|Str 100||
|CountryCode|Str 2|Required when adding|
|County|Str 100||
|City|Str 30||
|PostalCode|Str 15||
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
|SalesInvLang|Str 8|Invoice language for this specific customer.(ET,EN,RU,FI,PL,SV)|
|Contact|Str 35||
|GLNCode|Str 10||
|PartyCode|Str 20||
|EInvOperator|Int|1 - Not exist, 2 - E-invoices to the bank through Omniva, 3 - Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|EInvPaymId|Str 20||
|BankAccount|Str 50||
|Dimensions|Array of DimensionsObjects||
|CustGrCode|Str 20||
|ShowBalance|Bool||
|ApixEInv|Str 20||


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

## Example payload
```json
{
  "Name":"Mart Mustikas",
  "RegNo":"1232233234",
  "NotTDCustomer":false,
  "CurrencyCode":"EUR",
  "PaymentDeadLine":7,
  "OverDueCharge":0,
  "Address":"Kalda tee 10",
  "City":"Morna Linn",
  "County":"Pärnu maa",
  "PostalCode":"80034",
  "CountryCode":"EE",
  "PhoneNo":"55555555",
  "Email":"mart.mustikas@example.com",
  "SalesInvLang":"ET",
  "EInvOperator":1,
  "Dimensions":[
    {           
      "DimId":12,           
      "DimValueId":"4c8b2ec0-af0f-46fb-8d2b-427165c1effc",           
      "DimCode":"Miski"
    }
  ]
}
```
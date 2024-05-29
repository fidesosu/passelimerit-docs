# Update Customer

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/updatecustomer`

---
:::info Query Payload
```json
{
  "Id": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
  "Name": "FirstCustomer Inc",
  "CountryCode": "FI",
  "Address": "Merimiehenkatu 31",
  "City": "Helsinki",
  "PostalCode": "00100",
  "PhoneNo": "6548765",
  "PhoneNo2": null,
  "Email": "",
  "RegNo": "1122334755",
  "VatRegNo": "11222344",
  "SalesInvLang": "FI",
  "RefNoBase": "1",
  "EInvPaymId": "123456",
  "EinvOperator": 1,
  "Contact": "",
  "ApixEinv": "123456",
  "GroupInv": false,
  "PaymentDeadLine": 7,
  "Comments": [
    {
      "Comment": "This is a comment",
      "CommDate": "20240528"
    }
  ],
  "OverdueCharge": 7.000
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
|RefNoBase|Str 36|||
|EInvPaymId|Str 20|||
|EinvOperator|Int|1 - Not exist, <br>2 - E-invoices to the bank through Omniva, <br>3 - Bank ( full extent E-invoice), <br>4- Bank (limited extent E-invoice)||
|BankAccount|Str 50|Needs confirmation on if this even works||
|Contact|Str 35|||
|ApixEinv|Str 20|||
|GroupInv|Bool|||
|PaymentDeadLine|Int|||
|Comments|Array of comments|Comment Str CommDate Date||
|OverdueCharge|Decimal|||
:::
# Get Customer List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getcustomers`

## Query Payload
```json
{ "Name": "FirstCustomer Inc" }
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled, next fields will be ignored|
|RegNo|Str|Exact match.|
|VatRegNo|Str|Exact match.|
|Name|Str|Broad match.|
|WithComments|Bool|true, false|
|CommentsFrom|Date|Date later|
|ChangedDate|Date|Date of changing or creating customer/vendor (YYYYmmDD)|
:::

## Successful response
```json
[
  {
    "CustomerId": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
    "Name": "FirstCustomer Inc",
    "RegNo": "1122334755",
    "Contact": "test@example.com",
    "PhoneNo": "6548765",
    "PhoneNo2": null,
    "Address": "Merimiehenkatu 31",
    "City": "Helsinki",
    "County": null,
    "PostalCode": "00100",
    "CountryCode": "FI",
    "CountryName": "FINLAND",
    "FaxNo": null,
    "Email": "customermail@gmail.com",
    "HomePage": null,
    "PaymentDeadLine": 7,
    "OverdueCharge": 7.000,
    "CurrencyCode": "EUR",
    "CustomerGroupName": null,
    "VatRegNo": "11222344",
    "BankName": null,
    "BankAccount": null,
    "NotTDCustomer": false,
    "SalesInvLang": "FI",
    "RefNoBase": "1",
    "Comments": [
      {
        "Comment": "This is a comment",
        "CommDate": "20240528"
      }
    ],
    "Dimensions": [
      {
        "Id": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
        "DimId": 3,
        "DimValueId": "67d83637-6929-4254-a312-55558581c76c",
        "DimCode": "testCode100"
      }
    ]
  }
]
```

### Result parameters
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|CustomerId|Guid||
|Name|Str||
|RegNo|Str||
|Contact|Str||
|PhoneNo|Str||
|PhoneNo2|Str||
|Address|Str||
|City|Str||
|County|Str||
|PostalCode|Str||
|CountryCode|Str||
|CountryName|Str||
|FaxNo|Str||
|Email|Str||
|HomePage|Str||
|PaymentDeadLine|Int||
|OverdueCharge|Decimal||
|CurrencyCode|Str||
|CustomerGroupName|Str||
|VatRegNo|Str||
|BankName|Str||
|BankAccount|Str||
|NotTDCustomer|Bool||
|SalesInvLang|Str||
|RefNoBase|Str||
|Comments|Array of comments||
|Dimensions|Array of dimensions||
:::

### Comments parameters
:::details Comments parameters
|Field|Type|Comment|
|-----|----|-------|
|Comment|Str|Comment|
|CommDate|Date|Date|
:::

### Dimensions parameters
:::details Dimensions parameters
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid||
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||
:::
---
> [!IMPORTANT]
> We're aware of the problem of big responses. If you try to query full list of customers or vendors, it will respond with stacktrace that tells our server is unable to compile JSON that big. We're working on it.
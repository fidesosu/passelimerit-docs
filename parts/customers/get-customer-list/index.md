# Get Customer List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getcustomers`

## Query Payload

```json
// example when query by part of a name.
{ Name: "halduse" }
```

We're aware of the problem of big responses. If you try to query full list of customers or vendors, it will respond with stacktrace that tells our server is unable to compile JSON that big. We're working on it.
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled, next fields will be ignored|
|RegNo|Str|Exact match.|
|VatRegNo|Str|Exact match.|
|Name|Str|Broad match.|
|WithComments|Bool|true, false|
|CommentsFrom|Date|Date later|
|ChangedDate|Date|Date of changing or creating customer/vendor (YYYYmmDD)|


## Successful response

The result for
this request can be:

1. empty result
2. a certain customer (if exact match is used and/or only one customer is found)
3. a list of customers matching the broad match term.

The result, if not empty, is a Customer object with following fields:

- CustomerId
- Name
- RegNo
- Contact
- PhoneNo
- Address
- City
- Email
- CurrencyCode
- PostalCode
- CountryName
- CountryCode
- County
- PhoneNo2
- FaxNo
- HomePage
- PaymentDeadLine
- OverdueCharge
- CustomerGroupName
- VatRegNo
- NotTDCustomer
- BankName
- BankAccount
- SalesInvLang
- RefNoBase
- Comments ( Array of comments)
- Dimensions (Array of dimensions)
- ChangedDate

Comments object:
- CommDate
- Comment

Dimensions object:
- Id
- DimId
- DimValueId
- DimCode


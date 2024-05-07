# Get Vendor List

We’re aware of the problem of big responses. If you try to query full list of customers or vendors, it will respond with stacktrace that tells our server is unable to compile JSON that big. We’re working on it.
## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getvendors`


## Query Payload

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
2. a certain vendor (if exact match is used and/or only one vendor is found)
3. a list of vendors matching the broad match term.

The result, if not empty, is a Vendor object with following fields:
- VendorId
- VendorType
- Name
- RegNo
- Contact
- PhoneNo
- Email
- CurrencyCode
- PaymentDeadLine
- BankAccount
- HomePage
- ReferenceNo
- Address
- City
- County
- PostalCode
- CountryName
- CountryCode
- PhoneNo2
- FaxNo
- OverdueCharge
- VendorGroupName
- VatRegNo
- VatAccountable
- Dimensions  (Array of dimensioons)
- ChangedDate

Dimensions object:
- Id
- DimId
- DimValueId
- DimCode


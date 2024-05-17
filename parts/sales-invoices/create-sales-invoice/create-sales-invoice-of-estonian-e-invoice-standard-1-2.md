# Create Sales Invoice of Estonian e-invoice standard 1.2

## Endpoints
<!--@include: @/dist/md/api_url.md-->v2/sendinvoicexml`

## Query Payload

`"<xml version='1.0' encoding='utf-8'> …. </xml>"`

[File Format](https://wp.itl.ee/files/Estonian_e-invoice_description_ver1.2_eng.pdf)

In the input xml file required EAN or SellerProductID of sales articles.
## Successful Result

|Field|Type|Comment|
|-----|----|-------|
|CustomerId|Guid||
|InvoiceId|Guid||
|InvoiceNo|Str||
|RefNo|Str||
|ErrMsg|Str||

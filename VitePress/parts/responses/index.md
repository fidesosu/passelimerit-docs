---
lastUpdated: true
---
# Responses
## Successful responses
Successful response is represented as JSON with response code 200. In many cases, when needed and possible, response will also include details of fulfilled requests (like added document id, transaction id or customer id).

Response to the successful request is usually something like this
```json
{
  "CustomerId":"665f01a4-357a-4a6b-a565-2f17e6e1da13",
  "InvoiceId":"5f91033c-9d0f-416e-a079-d3c892b8c317",
  "InvoiceNo":"1121",
  "RefNo":"11219"
} 
```
## Unsuccessful responses
|response.statusCode|response.statusMessage|response.body|Description|
|-------------------|----------------------|-------------|-----------|
|400|Bad Request||API Id is wrong – make sure you haven’t copied spaces.|
|400|Bad Request||Description of an error|
|401|Unauthorized|api-wrongsignature|This could be because of the body, because it is a part of the signature.|
|401|Unauthorized|api-wronglicense|This company’s creator did not have PRO or PREMIUM license|
|500|Internal Server Error|Stacktrace|Should not happen. An alert is generated and sent to our development team.|
:::info From february 8, the new output format for the API:

The previous output is a string containing json.
Example send sales invoice:
```text
Status code:  200  —  OK
Headers:  application/json; charset=utf-8
Body:  {“CustomerId”:”29fecd2e-ed07-4a1d-93f8-e6c24372f7d6″,”InvoiceId”:”b6948bbc-79be-49ce-b92c-d17cd8c76001″,”InvoiceNo”:”KALA00009″,”RefNo”:null,”NewCustomer”:null}
```

The new output is an object (json):
Example send sales invoice:

```json
Status code:  200  —  OK
Headers:  application/json; charset=utf-8
Body:  {
  CustomerId: ‘4feba750-4184-42f1-a278-1ed738b6cddd’,
  InvoiceId: ‘432aedaa-0998-46e0-9ecc-266134d11705’,
  InvoiceNo: ‘KALA00009’,
  RefNo: null,
  NewCustomer: null
}
```
:::
::: info
The date format in the new output is: `YYYY-mm-DDTHH:mm:ss` (The T is supposed to be there.)<br>
Please make changes to your API applications that work with Passeli Merit.
:::
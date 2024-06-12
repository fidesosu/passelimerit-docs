# Customer Payment Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getcustpaymrep`

## Query Payload
```json
{
  "CustName": "",
  "CustId": "",
  "PeriodStart": "yyyyMMdd",
  "PeriodEnd": "yyyyMMdd",
  "CurrncyCode": "EUR"
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|CustName|Str 150||
|CustId|Quid||
|PeriodStart|Date||
|PeriodEnd|Date||
|CurrncyCode|Str 4||
:::

## Successful Result
```json
{
  "Data": "[{\"CustId\":\"7da4cd44-9b49-4a35-8d1b-f339a68e7058\",\"CustName\":\"FirstCustomer Inc\",\"DocDate\":\"\/Date(1484265600000)\/\",\"DocNo\":\"123\",\"DocId\":\"ec87ddbf-3b7c-4c35-b40d-3b9b0a60e853\",\"TotalAmount\":2000.00,\"DueDate\":\"\/Date(1485302400000)\/\",\"UnPaidAmount\":2000.00,\"OverDue\":2680},}]",
  "HasMore": false,
  "Id4More": "00000000-0000-0000-0000-000000000000"
}
```
:::details Click to see the result parameters
|Field|Comment|
|-----|-------|
|Data|Data Object|
|HasMore|true/false|
|Id4More||

### DataObject
|Field|Comment|
|-----|-------|
|CustName||
|CustId||
|DocDate||
|DocNo||
|DocId||
|TotalAmount||
|DueDate||
|UnPaidAmount||
|OverDue||
:::

>If `HasMore` is `true`, send a new request to the `v2/getmoredata` endpoint using the GUID from `Id4More`.

## Endpoints
<!--@include: @/dist/md/api_url.md-->v2/getmoredata`

---
:::info Query Payload
```json
{
  "Id4More": "00000000-0000-0000-0000-000000000000"
}
```
:::

> The request must repeat until HasMore is false
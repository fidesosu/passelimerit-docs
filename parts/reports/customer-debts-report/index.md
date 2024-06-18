# Customer Debts Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getcustdebtrep`

## Query Payload
```json
{ 
  "CustName": "FirstCustomer Inc",
  "CustId": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
  "OverDueDays": 5,
  "DebtDate":"YYYYmmDD" 
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|CustName|Str 150|Required if CustId not used. <br><br>If the CustName `""` then all customers are selected.|Required?|
|CustId|Guid|||
|OverDueDays|Int 3|more exceeded days||
|DebtDate|Date|Date in the format YYYYmmDD, if not used then it defaults to the current date.||
:::

## Successful Result
```json
[
  {
    "PartnerId": "7da4cd44-9b49-4a35-8d1b-f339a68e7058",
    "PartnerName": "FirstCustomer Inc",
    "DocType": "MA",
    "DocDate": "2017-01-13T00:00:00",
    "DocNo": "123",
    "DocId": "ec87ddbf-3b7c-4c35-b40d-3b9b0a60e853",
    "RefNo": "1232",
    "DueDate": "2017-01-25T00:00:00",
    "TotalAmount": 2000.00,
    "PaidAmount": 0.0,
    "UnPaidAmount": 2000.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000
  },
  // ...
]
```
:::details Click to see the result parameters
|Field|Comment|
|-----|-------|
|PartnerId||
|PartnerName||
|DocType|SO offer, MA invoice, SBx() initial balance, PR and BA from program.|
|DocDate||
|DocNo||
|RefNo||
|DueDate||
|TotalAmount||
|PaidAmount||
|UnPaidAmount||
|CurrencyCode||
|CurrencyRate||
:::
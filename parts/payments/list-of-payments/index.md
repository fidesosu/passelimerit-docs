# List of Payments

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/getpayments`

## Endpoints v2

<!--@include: @/dist/md/api_url.md-->v2/getpayments`

---
:::info Query Payload
```json
{ 
  "PeriodStart": "yyyyMMdd",
  "PeriodEnd": "yyyyMMdd" 
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date|In format yyyyMMdd|
|PeriodEnd|Date|In format yyyyMMdd. Period length max 3 months!|
|UnPaid|Bool|true/false|
:::
---
:::info Successful Result v1
```json
[
  {
    "PHId": "350999b0-7015-44e3-82c4-cd64b7357950",
    "BankName": "testaus",
    "CounterPartType": 2,
    "CounterPartName": "Mari Maasikas",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "DocumentDate": "2019-04-13T00:00:00",
    "DocumentNo": "9",
    "Direction": 1,
    "Amount": 100.00
  },
  // ...
]
```
:::details Click to see the v1 result parameters
|Field|Type|Comment|
|-----|----|-------|
|PIHId|Guid||
|BankName|Str||	
|CounterPartType|Int|2 – customer,<br>3 - vendor|
|CounterPartName|Str||	
|CurrencyCode|Str||	
|CurrencyRate|Decimal||	
|DocumentDate|Date||
|DocumentNo|Str||	
|Direction|Int|1 - transactions with customers,<br> 2 - with vendors,<br> 3 - other income,<br> 4 - other expenses|
|Amount|Decimal||
:::
---
:::info Successful Result v2
```json
[
  {
    "PHId": "350999b0-7015-44e3-82c4-cd64b7357950",
    "BankName": "testaus",
    "CounterPartType": 2,
    "CounterPartName": "Mari Maasikas",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "DocumentDate": "2019-04-13T00:00:00",
    "DocumentNo": "9",
    "Direction": 1,
    "Amount": 100.00,
    "Details": [
      {
        "PaymId": "350999b0-7015-44e3-82c4-cd64b7357950",
        "DocNo": "BL942019-PGG",
        "DocAmount": 100.00,
        "PaidAmount": 100.00,
        "CurrencyCode": "EUR",
        "CurrencyRate": 1.0000000
      }
    ]
  },
  // ...
]
```
:::details Click to see the v2 result parameters
|Field|Type|Comment|
|-----|----|-------|
|PIHId|Guid|| 	
|BankName|Str||	
|CounterPartType|Int|2 – customer,<br> 3- vendor|
|CounterPartName|Str||
|CurrencyCode|Str||
|CurrencyRate|Decimal||
|DocumentDate|Date||
|DocumentNo|Str||
|Direction|Int|1- transactions with customers, <br>2- with vendors,<br> 3- other income,<br> 4- other expenses
|Amount|Decimal||	
|PaymAPIDetails|PaymAPIDetails object||

### PaymAPIDetails Object

|Field|Type|Comment|
|-----|----|-------|
|PaymId|Guid||
|DocNo|Str|Document (Invoice, Offer,Order) No|
|DocAmount|Decimal||
|PaidAmount|Decimal|Amount paid by payment|
|CurrencyCode|Str||
|CurrencyRate|Decimal|Document currency rate|
:::
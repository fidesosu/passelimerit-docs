# List of Payments

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/getpayments`

## Endpoints v2

<!--@include: @/dist/md/api_url.md-->v2/getpayments`

## Query Payload

```json
{ 
  PeriodStart: "YYYYMMdd" , 
  PeriodEnd: " YYYYMMdd" 
}
```

|Field|Type|Comment|
|-----|----|-------|
|PeriodStart|Date|In format yyyymmdd|
|PeriodEnd|Date|In format yyyymmdd . Period length max 3 months!|
|UnPaid|Bool|true/false|


## Successful Result v1

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

## Successful Result v2

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

## PaymAPIDetails Object

|Field|Type|Comment|
|-----|----|-------|
|PaymId|Guid||
|DocNo|Str|Document (Invoice, Offer,Order) No|
|DocAmount|Decimal||
|PaidAmount|Decimal|Amount paid by payment|
|CurrencyCode|Str||
|CurrencyRate|Decimal|Document currency rate|
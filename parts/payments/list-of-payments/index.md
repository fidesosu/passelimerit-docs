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


## Successful result v1

|Field|Type|Comment|
|-----|----|-------|
|PIHId|Guid||
|BankName|String||	
|CounterPartType|Int|2 – customer,<br>3 - vendor|
|CounterPartName|String||	
|CurrencyCode|String||	
|CurrencyRate|Decimal||	
|DocumentDate|Date||
|DocumentNo|String||	
|Direction|Int|1 - transactions with customers,<br> 2 - with vendors,<br> 3 - other income,<br> 4 - other expenses|
|Amount|Decimal||

## Successful result v2

|Field|Type|Comment|
|-----|----|-------|
|PIHId|Guid|| 	
|BankName|String||	
|CounterPartType|Int|2 – customer,<br> 3- vendor|
|CounterPartName|String||
|CurrencyCode|String||
|CurrencyRate|Decimal||
|DocumentDate|Date||
|DocumentNo|String||
|Direction|Int|1- transactions with customers, <br>2- with vendors,<br> 3- other income,<br> 4- other expenses
|Amount|Decimal||	
|PaymAPIDetails|PaymAPIDetails object||

## PaymAPIDetails Object

|Field|Type|Comment|
|-----|----|-------|
|PaymId|Guid||
|DocNo|String|Document (Invoice, Offer,Order) No|
|DocAmount|Decimal||
|PaidAmount|Decimal|Amount paid by payment|
|CurrencyCode|String||
|CurrencyRate|Decimal|Document currency rate|
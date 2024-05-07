# Sales Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getsalesrep`

## Query payload

|Field|Type|Comment|
|-----|----|-------|
|StartDate|Date||	
|EndDate|Date||
|ReportType|Int|1-By Invoices,<br> 2-By Customers,<br> 3-By Articles,<br> 4-By Countries,<br> 5-By Countries, general|
|UserFilter|Str||
|CustGrpFilter|Str||	
|CustFilter|Str||	
|ItemGrFilter|Str|Array of itrm groups|
|ItemFilter|Str|Array of items|
|DepartFilter|Str|Array of departments|
|FixAssetFilter|Str||

## Successful Result Report types 1, 5, 6

|Field|Type|Comment|
|-----|----|-------|
|DocId|Guid||
|InvoiceNo|Str||
|CurrencyCode|Str||
|CurrencyRate|Decimal||
|CustomerId|Guid||
|CustomerName|Str||
|RegNo|Str||
|VatRegNo|Str||
|InvoiceDate|Date||
|Amount|Decimal||
|VatAmount|Decimal||
|RoundingAmount|Decimal||
|TotalAmount|Decimal||
|ExpenseClaim|Bool||
|BatchId|Guid||
|BatchCode|Str||
|BatchNo|Int||
|Ctry|Str||

## Successful Result Report type 2

|Field|Type|Comment|
|-----|----|-------|
|CustomerId|Guid||	
|CurrencyCode|Str	||
|CustomerName|Str	||
|RegNo|Str||
|VatRegNo|Str||
|Amount|Decimal||
|CAmount|Decimal||
|VatAmount|Decimal||
|RoundingAmount|Decimal||	
|TotalAmount|Decimal||
|CVatAmount|Decimal||
|CRoundingAmount|Decimal||
|CTotalAmount|Decimal||
|LnCnt|Decimal||
|DiscAmt|Decimal||
|CDiscAmt|Decimal||

## Successful Result Report type 3

|Field|Type|Comment|
|-----|----|-------|
|ItemId|Guid||
|ItemCode|Str||
|ItemName|Str||
|ItemGrId|Guid||
|ItemGrName|Str||
|CurrencyCode|Str||
|Unit|Str||
|Quantity|Decimal||
|Price|Decimal||
|Amount|Decimal||
|UOMId1|Guid||
|UOMId2|Guid||

## Successful Result Report type 4

|Field|Type|Comment|
|-----|----|-------|
|DocId|Guid||	
|FaId|Guid||	
|InventaryNo|Str||	
|Name|Str||	
|CurrencyCode|Str||	
|Quantity|Decimal||	
|Price|Decimal||	
|Amount|Decimal||	
|RemAmount|Decimal||	
|DocNo|Str||	
|DocDate|Date||
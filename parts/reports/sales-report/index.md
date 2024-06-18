# Sales Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getsalesrep`

## Query Payload
```json
{
  "StartDate": "YYYYmmDD",
  "EndDate": "YYYYmmDD",
  "ReportType": 1,
  "UserFilter": "",
  "CustGrpFilter": "",
  "CustFilter": "",
  "ItemGrFilter": [],
  "ItemFilter": [],
  "DepartFilter": [],
  "FixAssetFilter": ""
}
```
:::details Click to see the query parameters
|Field|Type|Comment|Required|
|-----|----|-------|--------|
|StartDate|Date||Required|
|EndDate|Date||Required|
|ReportType|Int|1 - By Invoices,<br> 2 - By Customers,<br> 3 - By Articles,<br> 4 - By Countries,<br> 5 - By Countries, general|Required|
|UserFilter|Str|||
|CustGrpFilter|Str|||
|CustFilter|Str|||
|ItemGrFilter|Str|Array of itrm groups||
|ItemFilter|Str|Array of items||
|DepartFilter|Str|Array of departments||
|FixAssetFilter|Str|||
:::

## Successful Result 
### Report types 1, 5, 6
```json
[
  {
    "DocId": "036324e1-2f8b-4c52-8e8f-102cbe732181",
    "InvoiceNo": "BL942019-PGG",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "CustomerId": "88d0362a-5e55-4184-b9ff-ace2a4f93da4",
    "CustomerName": "Mari Maasikas",
    "RegNo": null,
    "VatRegNo": null,
    "InvoiceDate": "2019-04-13T00:00:00",
    "Amount": 1000.00,
    "VatAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 1000.00,
    "ExpenseClaim": false,
    "BatchId": "00000000-0000-0000-0000-000000000000",
    "BatchCode": null,
    "BatchNo": 0,
    "Ctry": null
  },
  // ...
]
```
:::details Click to see the result parameters
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
:::

### Report type 2
```json
[
  {
    "CustomerId": "88d0362a-5e55-4184-b9ff-ace2a4f93da4",
    "CurrencyCode": "EUR",
    "CustomerName": "Mari Maasikas",
    "RegNo": null,
    "VatRegNo": null,
    "Amount": 1600.00,
    "CAmount": 1600.000000000000000,
    "VatAmount": 0.00,
    "RoundingAmount": 0.000000,
    "TotalAmount": 1600.00,
    "CVatAmount": 0.000000000000000,
    "CRoundingAmount": 0.000000000000000,
    "CTotalAmount": 1600.000000000000000,
    "LnCnt": 0.0,
    "DiscAmt": 0.00,
    "CDiscAmt": 0.000000000000000
  },
  // ...
]
```
:::details Click to see the result parameters
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
:::

### Report type 3
```json
[
  {
    "ItemId": "c9a417e7-bf34-4443-9f11-daf0912e99df",
    "ItemCode": "",
    "ItemName": "",
    "ItemGrId": "00000000-0000-0000-0000-000000000000",
    "ItemGrName": null,
    "CurrencyCode": null,
    "Unit": "kg",
    "Quantity": 7.000,
    "Price": 228.57142857142857142857142857,
    "Amount": 1600.000000000000000,
    "UOMId1": "a5a94f59-59d3-477f-9509-69879910cda4",
    "UOMId2": "a5a94f59-59d3-477f-9509-69879910cda4"
  },
  // ...
]
```
:::details Click to see the result parameters
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
:::

### Report type 4
```json
[]
```
:::details Click to see the result parameters
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
:::
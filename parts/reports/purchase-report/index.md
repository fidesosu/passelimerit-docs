# Purchase Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpurchrep`

## Query Payload
```json
{
  "StartDate": "YYYYmmDD",
  "EndDate": "YYYYmmDD",
  "ReportType": 1,
  "VendChoice": 1,
  "VendGrpFilter": "",
  "VendFilter": "",
  "ItemGrFilter": "",
  "ItemFilter": [],
  "DepartFilter": [],
  "FixAssetFilter": [],
  "ByEntryNo": false
}
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|StartDate|Date||
|EndDate|Date||
|ReportType|Int|1-By Invoices,<br> 2-By Vendors,<br> 3-By-Articles,<br> 4-By Fixed assets |
|VendChoice|Int|1-Vendor and Reporting entry,<br> 2-Vendor,<br> 3-Reporting entry |
|VendGrpFilter|Str||
|VendFilter|Str||
|ItemGrFilter|Str||
|ItemFilter|Str|Array of items|
|DepartFilter|Str|Array of departments|
|FixAssetFilter|Str|Array of Fixed assets|
|ByEntryNo|Bool|true/false|
:::

## Successful Result
### Report type 1
```json
[
  {
    "DocId": "c28546dc-ab9a-4ecd-b9d5-1cf4a0a97348",
    "InvoiceNo": "987654324",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "CustomerId": "00000000-0000-0000-0000-000000000000",
    "CustomerName": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "InvoiceDate": "2020-05-06T00:00:00",
    "Amount": 471.20,
    "VatAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ExpenseClaim": false,
    "BatchId": "70348d4c-4860-4abb-a376-20fcf7512c2e",
    "BatchCode": "OS",
    "BatchNo": 4,
    "Ctry": null
  },
  // ...
]
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|DocId|Guid||
|InvoiceNo|Str||
|CurrencyCode|Str||
|CurrencyRate|Decimal||
|VendorId|Guid||
|VendorName|Str||
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
    "CustomerId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "CurrencyCode": "EUR",
    "CustomerName": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "Amount": 2827.20,
    "CAmount": 2827.200000000000000,
    "VatAmount": 0.00,
    "RoundingAmount": 0.000000,
    "TotalAmount": 2827.20,
    "CVatAmount": 0.000000000000000,
    "CRoundingAmount": 0.000000000000000,
    "CTotalAmount": 2827.200000000000000,
    "LnCnt": 0.0,
    "DiscAmt": 0.0,
    "CDiscAmt": 0.0
  },
  // ...
]
```
:::details Click to see the query parameters
|Field|Type|Comment|
|-----|----|-------|
|CustomerId|Guid||
|CurrencyCode|Str||
|VendorName|Str||
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
    "ItemId": "00000000-0000-0000-0000-000000000000",
    "ItemCode": "ENVOICE_SERVICE",
    "ItemName": "Rehvivahetuse ettemaks",
    "ItemGrId": "00000000-0000-0000-0000-000000000000",
    "ItemGrName": null,
    "CurrencyCode": null,
    "Unit": null,
    "Quantity": 6.000,
    "Price": 471.200000000000,
    "Amount": 2827.200000000000000,
    "UOMId1": "00000000-0000-0000-0000-000000000000",
    "UOMId2": "00000000-0000-0000-0000-000000000000"
  },
  // ...
]
```
:::details Click to see the query parameters
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
:::details Click to see the query parameters
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
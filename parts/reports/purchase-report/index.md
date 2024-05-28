# Purchase Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getpurchrep`

---
:::info Query payload
```json
{
  "StartDate": "yyyyMMdd",
  "EndDate": "yyyyMMdd",
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
---
:::info Successful Result for Report type 1
```json
[]
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
---
:::info Successful Result for Report type 2
```json
[]
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
---
:::info Successful Result for Report type 3
```json
[]
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
---
:::info Successful Result for Report type 4
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
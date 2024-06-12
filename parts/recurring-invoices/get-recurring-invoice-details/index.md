# Get Recurring Invoice details

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getperinvoice`

## Query Payload

```json
{    
  "Id": "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx"
}
```

## Successful Result
```json

```
:::details Click to see the result parameters
|Field|Type|Comment|
|-----|----|-------|
|CustomerName|Str||
|PayerName|Str||	
|Code|Str||
|DepartmentCode|Str	
|InvoiceNo|Str||	
|StartDate|Date||
|EndDate|Date||
|CurrencyId|Int||	
|CurrencyCode|Str||	
|CurrencyRate|Decimal||	
|HComment|Str||
|FComment|Str||	
|NextDate|Date||	
|Cycle|Int||
|Period|Int||
|PaymentDay|Int||	
|PaymentMonth|Int||	
|ReferenceNo|Str||
|PriceInclVat|Bool||
|RoundingPrec|Int||	
|RoundingAmount|Decimal||	
|TotalAmount|Decimal||	
|TotalSum|Decimal||	
|PerLen|Int||	
|Dimensions|Array of dimensions objects||	
|TaxAmount|Decimal||
|Lines|Array of Invoice Row Objects||
:::

### InvoiceRowObject
:::details Click to see the InvoiceRowObject parameters
|Field|Type|Comment|
|-----|----|-------|
|SILID|Guid||
|ItemCode|Str||	
|LocationCode|Str||	
|Description|Str||	
|Quantity|Decimal||	
|Price|Decimal||	
|TaxId|Guid||	
|DepartmentCode|Str||	
|GLAccountCode|Str||
|Dimensions|Array of Line dimensions objects||	
|AmountExclVat|Decimal||	
|AmountInclVat|Decimal||	
|VatAmount|Decimal||	
|DiscountPct|Decimal||	
|DiscountAmount|Decimal||	
|StartIndVal|Decimal||	
|EndIndVal|Decimal||
|UnitofMeasure|Str||
:::

### DimensionsObject
:::details Click to see the DimensionsObject parameters
|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||
|DimValueId|Guid||	
|DimCode|Str||
:::

### LineDimensionsObject 
:::details Click to see the LineDimensionsObject parameters
|Field|Type|Comment|
|-----|----|-------|
|DimId|Int||	
|Code|Str||	
|AllocPct|Decimal||	
|AllocAmount|Decimal||
:::
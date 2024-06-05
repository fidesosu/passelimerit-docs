# Get purchase invoice details

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/getpurchorder`

## Endpoints v2

<!--@include: @/dist/md/api_url.md-->v2/getpurchorder`

---
:::info Query Payload
```json
{ 
  "Id":  "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx" .
}
```
:::
# Successful Result V1
::::info Successful Result v1
```json
{
  "Header": {
    "PIHId": "5312a13d-64ad-4032-b523-d81c420d246a",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "CostCenterCode": null,
    "BatchInfo": "OS-3",
    "BillNo": "987654324",
    "DocumentDate": "2020-05-06T00:00:00",
    "TransactionDate": "2020-05-06T00:00:00",
    "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "VendorName": "Mingi Firma AS",
    "VendorRegNo": "123456789",
    "DueDate": "2020-05-06T00:00:00",
    "Fine": 0.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ProfitAmount": 471.20,
    "TotalSum": 471.20,
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": "EE123456789",
    "PaidAmount": 380.00,
    "FileExists": true,
    "InboundTime": "2024-06-03T09:44:46.547",
    "Operator": null,
    "Paid": false
  },
  "Lines": [
    {
      "PILId": "8b3c11dc-9356-482c-89eb-84eaa87283ad",
      "ArticleCode": "ENVOICE_SERVICE",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 471.2000000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 471.20,
      "AmountInclVat": 471.20,
      "VatAmount": 0.00,
      "AccountCode": "1531",
      "DepartmentName": null,
      "DepartmentCode": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 471.20,
      "Description": "Rehvivahetuse ettemaks",
      "UOMName": null,
      "FixAsset": false,
      "ProjectAllocation": [],
      "CostCenterAllocation": [
        {
          "Code": "testCostCenterCode",
          "AllocPct": 100.0000000,
          "AllocAmount": 471.20
        }
      ]
    }
  ],
  "Payments": [
    {
      "PaymDate": "2024-06-03T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": null,
      "PaymentId": "4d4554e7-372b-478a-9bcb-794224916b5e"
    }
  ],
  "Attachment": {
    "FileName": "file.pdf",
    "FileContent": "YmFzZTY0"
  }
}
```
:::details Click to see the result parameters
|Field Name|Type|Comment|
|----------|----|-------|
|[Header](#header1)|SalesHeader object||
|[Lines](#linesv1)|Array of Line objects||
|[Payments](#paymentsv1)|Array of Payment objects||
|[Allocations](#costallocation)|Project and Cost Center allocations (if existing)||
:::

## Header Object {#header1}
```json
{
  "Header": {
    "PIHId": "5312a13d-64ad-4032-b523-d81c420d246a",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "CostCenterCode": null,
    "BatchInfo": "OS-3",
    "BillNo": "987654324",
    "DocumentDate": "2020-05-06T00:00:00",
    "TransactionDate": "2020-05-06T00:00:00",
    "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "VendorName": "Mingi Firma AS",
    "VendorRegNo": "123456789",
    "DueDate": "2020-05-06T00:00:00",
    "Fine": 0.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ProfitAmount": 471.20,
    "TotalSum": 471.20,
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": "EE123456789",
    "PaidAmount": 380.00,
    "FileExists": true,
    "InboundTime": "2024-06-03T09:44:46.547",
    "Operator": null,
    "Paid": false
  },
  // ...
}
```
:::details Header Object
|Field Name|Comment|
|----------|-------|
|PIHId|| 	 
|DepartmentCode||	
|DepartmentName|| 	 
|ProjectCode|| 	 
|ProjectName|| 	 
|BatchInfo|GL transaction code and #|
|InvoiceNo|| 	 
|DocumentDate|| 	 
|TransactionDate|| 	 
|CustomerName|| 	 
|HComment|| 	 
|FComment|| 	 
|DueDate|| 	 
|CurrencyCode|| 	 
|CurrencyRate|| 	 
|TaxAmount|VAT amount|
|RoundingAmount| 	 
|TotalAmount|Amount wo. VAT|
|ProfitAmount|Margin amount|
|TotalSum|Total amount with taxes and rounding|
|UserName|| 	 
|ReferenceNo|| 	 
|PriceInclVat|| 	 
|VatRegNo||
|InboundTime||
|Operator||
:::

## Lines Object {#linesv1}
```json
{
  // ...
  "Lines": [
    {
      "PILId": "8b3c11dc-9356-482c-89eb-84eaa87283ad",
      "ArticleCode": "ENVOICE_SERVICE",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 471.2000000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 471.20,
      "AmountInclVat": 471.20,
      "VatAmount": 0.00,
      "AccountCode": "1531",
      "DepartmentName": null,
      "DepartmentCode": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 471.20,
      "Description": "Rehvivahetuse ettemaks",
      "UOMName": null,
      "FixAsset": false,
      "ProjectAllocation": [],
      "CostCenterAllocation": [
        // ...
      ]
    }
  ],
  // ...
}
```
:::details InvoiceRow Object
|Field Name|Comment|
|----------|-------|
|ArticleCode||
|LocationCode||
|Quantity||
|Price||
|TaxName||
|TaxPct||
|AmountExclVat||
|AmountInclVat||
|VatAmount||
|AccountCode||
|DepartmentCode||
|DepartmentName||
|ItemCostAmount||
|ProfitAmount||
|DiscountPct||
|DicountAmount||
|Description||
|UOMName||
|FixAsset||
|ProjectAllocation|Array(CostAllocation)|
|CostCenterAllocation|Array(CostAllocation)|
:::

## Payments Object {#paymentsv1}
```json
{
  // ...
  "Payments": [
    {
      "PaymDate": "2024-06-03T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": null,
      "PaymentId": "4d4554e7-372b-478a-9bcb-794224916b5e"
    }
  ],
  // ...
}
```
:::details Payment Object
|Field Name|Comment|
|----------|-------|
|PaymDate||
|Amount||
|PaymentMethod||	
|PaymentId||
:::

## CostAllocation Object {#costallocation}
```json
{
  // ...
  "Lines": [
    {
      // ...
      "CostCenterAllocation": [
        {
          "Code": "testCostCenterCode",
          "AllocPct": 100.0000000,
          "AllocAmount": 471.20
        }
      ]
    }
  ],
  // ...
}
```
:::details CostAllocation Object
|Field Name|Comment|
|----------|-------|
|Code|Code of project / cost center|
|AllocPct|Allocation percentage|
|AllocAmount|Allocation amount|
:::
::::

# Successful Result V2

::::info Successful Result v2
```json
{
  "Header": {
    "Dimensions": [],
    "PIHId": "c28546dc-ab9a-4ecd-b9d5-1cf4a0a97348",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "CostCenterCode": null,
    "BatchInfo": "OS-4",
    "BillNo": "987654324",
    "DocumentDate": "2020-05-06T00:00:00",
    "TransactionDate": "2020-05-06T00:00:00",
    "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "VendorName": "Mingi Firma AS",
    "VendorRegNo": "123456789",
    "DueDate": "2020-05-06T00:00:00",
    "Fine": 0.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ProfitAmount": 471.20,
    "TotalSum": 471.20,
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": "EE123456789",
    "PaidAmount": 380.00,
    "FileExists": true,
    "InboundTime": "0001-01-01T00:00:00",
    "Operator": null,
    "Paid": false
  },
  "Lines": [
    {
      "PILId": "fe0f1268-b315-4b4e-8a9e-55acd06e6ccf",
      "ArticleCode": "ENVOICE_SERVICE",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 471.2000000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 471.20,
      "AmountInclVat": 471.20,
      "VatAmount": 0.00,
      "AccountCode": "1531",
      "DepartmentName": null,
      "DepartmentCode": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 471.20,
      "Description": "Rehvivahetuse ettemaks",
      "UOMName": null,
      "FixAsset": false,
      "DimAllocation": [
        {
          "DimId": 1,
          "Code": "testCostCenterCode",
          "AllocPct": 100.0000000,
          "AllocAmount": 471.20
        }
      ]
    }
  ],
  "Payments": [
    {
      "PaymDate": "2024-06-03T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": null,
      "PaymentId": "42235110-1b86-4f4d-9d23-686d7d0b4d0a"
    }
  ],
  "Attachment": {
    "FileName": "file.pdf",
    "FileContent": "YmFzZTY0"
  }
}
```
:::details Click to see the result parameters
|Field|Type|comment|
|-----|----|-------|
|[Header](#headerv2)|HeaderObject||
|[Lines](#linesv2)|Array of LinesObjects||	
|[Payments](#paymentsv2)|Array of PaymentObjects||	
|[Attachment](#attachmentv2)|Attachment Object||
:::

## Header Object {#headerv2}
```json
{
  "Header": {
    "Dimensions": [],
    "PIHId": "c28546dc-ab9a-4ecd-b9d5-1cf4a0a97348",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "CostCenterCode": null,
    "BatchInfo": "OS-4",
    "BillNo": "987654324",
    "DocumentDate": "2020-05-06T00:00:00",
    "TransactionDate": "2020-05-06T00:00:00",
    "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
    "VendorName": "Mingi Firma AS",
    "VendorRegNo": "123456789",
    "DueDate": "2020-05-06T00:00:00",
    "Fine": 0.00,
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 0.00,
    "TotalAmount": 471.20,
    "ProfitAmount": 471.20,
    "TotalSum": 471.20,
    "ReferenceNo": null,
    "PriceInclVat": false,
    "VatRegNo": "EE123456789",
    "PaidAmount": 380.00,
    "FileExists": true,
    "InboundTime": "0001-01-01T00:00:00",
    "Operator": null,
    "Paid": false
  },
  // ...
}
```
:::details Header Object
|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of DimensionObjects||
|PIHId|Guid||	
|DepartmentCode|Str||	
|DepartmentName|Str||	
|ProjectCode|Str||	
|CostCenterCode|Str||	
|BatchInfo|Str||	
|BillNo|Str||	
|DocumentDate|Date||	
|TransactionDate|Date||	
|VendorId|Guid||	
|VendorName|Str||	
|VendorRegNo|Str||	
|DueDate|Date||	
|Fine|||		
|CurrencyCode|Str||	
|CurrencyRate|Dec||	
|TaxAmount|Dec||	
|RoundingAmount|Dec||	
|TotalAmount	Dec||
|ProfitAmount|Dec||	
|TotalSum|Dec||	
|ReferenceNo|Str||	
|PriceInclVat|Bool|true/false|
|VatRegNo|Str||	
|PaidAmount|Dec||	
|FileExists|Bool||	
|InboundTime|Date||	
|Operator|||		
|Paid|Bool|true/false|
:::

## Dimensions Object
```json
{
  "Header": {
    "Dimensions": [],
    // ...
  },
  // ...
}
```
:::details Dimensions Object
|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||	
|DimValueId|Guid||	
|DimCode|Str||
:::

## Lines Object {#linesv2}
```json
{
  // ...
  "Lines": [
    {
      "PILId": "fe0f1268-b315-4b4e-8a9e-55acd06e6ccf",
      "ArticleCode": "ENVOICE_SERVICE",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 471.2000000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 471.20,
      "AmountInclVat": 471.20,
      "VatAmount": 0.00,
      "AccountCode": "1531",
      "DepartmentName": null,
      "DepartmentCode": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 471.20,
      "Description": "Rehvivahetuse ettemaks",
      "UOMName": null,
      "FixAsset": false,
      "DimAllocation": [
        // ...
      ]
    }
  ],
  // ...
}
```
:::details InvoiceRow Object
|Field|Type|Comment|
|-----|----|-------|
|PILId|Guid||	
|ArticleCode|Str||	
|LocationCode|Str||	
|Quantity|Dec||	
|Price|Dec||	
|TaxName|Str||	
|TaxPct|Dec||	
|AmountExclVat|Dec||	
|AmountInclVat|Dec||	
|VatAmount|Dec||	
|AccountCode|Str||	
|DepartmentName|Str||	
|DepartmentCode|Str||	
|ItemCostAmount|Dec||	
|ProfitAmount|Dec||	
|Description|Str||	
|UOMName|Str||
|FixAsset|Bool|true/false|
|DimAllocation|Array of DimensionsAllocationObjects|
:::

## DimensionAllocation Object
```json
{
  // ...
  "Lines": [
    {
      // ...
      "DimAllocation": [
        {
          "DimId": 1,
          "Code": "testCostCenterCode",
          "AllocPct": 100.0000000,
          "AllocAmount": 471.20
        }
      ]
    }
  ],
  // ...
}
```
:::details DimensionAllocation Object
|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|Code|Str||
|AllocPct|Dec||
|AllocAmount|Dec||
:::

## Payments Object {#paymentsv2}
```json
{
  // ...
  "Payments": [
    {
      "PaymDate": "2024-06-03T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": null,
      "PaymentId": "42235110-1b86-4f4d-9d23-686d7d0b4d0a"
    }
  ],
  // ...
}
```
:::details Payment Object
|Field|Type|Comment|
|-----|----|-------|
|PaymDate|Date||	
|Amount|Dec||
|PaymentMethod|Str||	
|PaymentId|Guid||
:::

## Attachment Object {#attachmentv2}
```json
{
  // ...
  "Attachment": {
    "FileName": "file.pdf",
    "FileContent": "YmFzZTY0"
  }
}
```
:::details Attachment Object
|Field|Type|Comment|
|-----|----|-------|
|Filename|Str||
|FileContent|Str|File in base64|
:::
::::
# Get sales invoice details
### Endpoints v1
<!--@include: @/dist/md/api_url.md-->v1/getinvoice`

### Endpoints v2
<!--@include: @/dist/md/api_url.md-->v2/getinvoice`

---

:::info Query Payload:
```json
{ 
   "Id":  "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
   "AddAttachment": true/false
}
```
:::

:::details Click to see the payload parameters
|field|type|description|Required|
|-----|----|-----------|--------|
|Id|Guid|The user Id, sometimes called `SIHId`.|Required|
|AddAttachment|bool|true/false (lowercase)|Required|
:::

[Successful result v2](#resV2)

## V1 <br> Successful result

The result, if not empty:

:::info Output
```json
{
  "Header": {
    // ...
  },
  "Lines": [
    // ...
  ],
  "Payments": [],
  "Attachment": null
}
```
:::

:::details Click to see the object details
|FieldName|Type|Comment|
|---|---|---|
|Header|SalesHeader object||
|Lines|Array of Line objects||
|Payments|Array of Payment objects||
|Allocations|Project and Cost Center allocations (if existing)||
:::

## SalesHeaderObject

:::info Output
```json
{
  "Header": {
    "Dimensions": [],
    "SIHId": "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "ProjectName": null,
    "AccountingDoc": 0,
    "BatchInfo": "MY-1",
    "InvoiceNo": "TEST00001",
    "DocumentDate": "2024-04-29T00:00:00",
    "TransactionDate": "2024-04-29T00:00:00",
    "CustomerId": "88d0362a-5e55-4184-b9ff-ace2a4f93da4",
    "CustomerName": "Mari Maasikas",
    "CustomerRegNo": null,
    "HComment": null,
    "FComment": null,
    "DueDate": "2024-04-29T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 5.00,
    "TotalAmount": 375.00,
    "ProfitAmount": 375.00,
    "TotalSum": 380.00,
    "UserName": "Merit API",
    "ReferenceNo": "000013",
    "PriceInclVat": false,
    "VatRegNo": null,
    "PaidAmount": 0.00,
    "EInvSent": false,
    "EmailSent": "1901-01-01T00:00:00",
    "EInvOperator": 0,
    "OfferId": "00000000-0000-0000-0000-000000000000",
    "OfferDocType": null,
    "OfferNo": null,
    "FileExists": false,
    "PerSHId": "00000000-0000-0000-0000-000000000000",
    "ContractNo": null,
    "Paid": false,
    "Contact": null
  },
  // ...
}
```
:::

:::details Click to see the object details
|Field Name|Comment|
|----------|-------|
|SIHId||
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
|RoundingAmount||
|TotalAmount|Amount wo. VAT|
|ProfitAmount|Margin amount|
|TotalSum|Total amount with taxes and rounding|
|UserName||
|ReferenceNo||
|PriceInclVat||
|VatRegNo||
|OfferId||
|OfferDocType||
|OfferNo||
|FileName|Str|
|FileContent|File in base64|
|PerSHId||
|ContractNo||
:::

## InvoiceRowObject

:::info Output
```json
{
  // ...
  "Lines": [
    {
      "SILId": "c508f6ba-79b5-4272-8701-128371358063",
      "ArticleCode": "MAAKLER",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 416.6700000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 375.00,
      "AmountInclVat": 375.00,
      "VatAmount": 0.00,
      "AccountCode": "3010",
      "DepartmentCode": null,
      "DepartmentName": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 375.00,
      "DiscountPct": 10.00,
      "DiscountAmount": 41.67,
      "Description": "Maaklerteenus",
      "UOMName": null,
      "FixAsset": false,
      "DimAllocation": []
    }
  ],
  // ...
}
```
:::

:::details Click to see the object details
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

## PaymentObject

:::info Output
```json
{
  // ...
  "Payments": [
    {
      "PaymDate": "2024-04-29T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": "Pangalink",
      "PaymentId": "00000000-0000-0000-0000-000000000000"
    }
  ],
  // ...
}
```
:::

:::details Click to see the object details
|Field Name|Comment|
|----------|-------|
|PaymDate||
|Amount||
|PaymentMethod||
|PaymentId||
:::

## CostAllocationObject

:::info Output
```json
{
  // ...
  "Allocations": [
    {
      "Code": "101",
      "AllocPct": 100.00,
      "AllocAmount": 375.00
    }
  ]
```
:::

:::details Click to see the object details
|Name|Type|Comment|
|----|----|-------|
|Code|Str|Code of project / cost center|
|AllocPct|Int|Allocation percentage|
|AllocAmount|Int|Allocation amount|
:::

## V2 <br> Successful result {#resV2}

:::info Output
```json
{
  "Header": {
    // ...
  },
  "Lines": [
    // ...
  ],
  "Payments": [],
  "Attachment": null
}
```
:::

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|Header|Header Object||
|Lines|Lines Object||
|Payments|Payment Object||
|Attachment|Attachment object||
:::

## Invoice header object

:::info Output
```json
{
  "Header": {
    "Dimensions": [],
    "SIHId": "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
    "DepartmentCode": null,
    "DepartmentName": null,
    "ProjectCode": null,
    "ProjectName": null,
    "AccountingDoc": 0,
    "BatchInfo": "MY-1",
    "InvoiceNo": "TEST00001",
    "DocumentDate": "2024-04-29T00:00:00",
    "TransactionDate": "2024-04-29T00:00:00",
    "CustomerId": "88d0362a-5e55-4184-b9ff-ace2a4f93da4",
    "CustomerName": "Mari Maasikas",
    "CustomerRegNo": null,
    "HComment": null,
    "FComment": null,
    "DueDate": "2024-04-29T00:00:00",
    "CurrencyCode": "EUR",
    "CurrencyRate": 1.0000000,
    "TaxAmount": 0.00,
    "RoundingAmount": 5.00,
    "TotalAmount": 375.00,
    "ProfitAmount": 375.00,
    "TotalSum": 380.00,
    "UserName": "Merit API",
    "ReferenceNo": "000013",
    "PriceInclVat": false,
    "VatRegNo": null,
    "PaidAmount": 0.00,
    "EInvSent": false,
    "EmailSent": "1901-01-01T00:00:00",
    "EInvOperator": 0,
    "OfferId": "00000000-0000-0000-0000-000000000000",
    "OfferDocType": null,
    "OfferNo": null,
    "FileExists": false,
    "PerSHId": "00000000-0000-0000-0000-000000000000",
    "ContractNo": null,
    "Paid": false,
    "Contact": null
  }
}
```
:::

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|Dimensions|Array of Dmensions Objects||
|SIHId|Guid||
|DepartmentCode|Str||
|DepartmentName|Str||
|ProjectCode|Str||
|ProjectName|Str||
|AccountingDock|||
|BatchInfo|Str||
|InvoiceNo|Str||
|DocumentDate|Date||
|TransactionDate|Date||
|CustomerId|Guid||
|CustomerName|Str||
|CustomerRegNo|Str||
|HComment|Str||
|FComment|Str||
|DueDate|Date||
|CurrencyCode|Str||
|CurrencyRate|Dec||
|TaxAmount|Dec||
|RoundingAmount|Dec||
|TotalAmount|Dec||
|ProfitAmount|Dec||
|TotalSum|Dec||
|UserName|Str||
|ReferenceNo|Str||
|PriceInclVat|Bool|true/false|
|VatRegNo|Str||
|PaidAmount|Dec||
|EInvSent|Bool|true/false|
|EmailSent|Date||
|EInvOperator|Int|1 – Not exist, 2 – E-invoices to the bank through Omniva, 3 – Bank ( full extent E-invoice), 4- Bank (limited extent E-invoice)|
|OfferId|Guid||
|OfferDocType|Int|1=quote, 2=sales order, 3=prepayment invoice|
|OfferNo|Str||
|FileExists|Bool|true/false|
|PerSHId|Guid||
|ContractNo|Str||
|Paid|Bool||
|Contact|Str||
:::

## DimensionsObject

:::info Output
```json
{
  "header": {
    "Dimensions": [// [!code focus:7]
      {
        "DimId": "Dim1",
        "DimValueId": "00000000-0000-0000-0000-000000000000",
        "DimCode": "101"
      }
    ]
    // ...
  }
}
```
:::

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|DimValueId|Guid||
|DimCode|Str||
:::

## InvoiceRowObject

:::info Output
```json
{
  // ...
  "Lines": [
    {
      "SILId": "c508f6ba-79b5-4272-8701-128371358063",
      "ArticleCode": "MAAKLER",
      "LocationCode": null,
      "Quantity": 1.000,
      "Price": 416.6700000,
      "TaxName": "Ei veronalainen",
      "TaxPct": 0.00,
      "AmountExclVat": 375.00,
      "AmountInclVat": 375.00,
      "VatAmount": 0.00,
      "AccountCode": "3010",
      "DepartmentCode": null,
      "DepartmentName": null,
      "ItemCostAmount": 0.00,
      "ProfitAmount": 375.00,
      "DiscountPct": 10.00,
      "DiscountAmount": 41.67,
      "Description": "Maaklerteenus",
      "UOMName": null,
      "FixAsset": false,
      "DimAllocation": []
    }
  ]
  // ...
}
```
:::

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|SILId|Guid||
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
|DepartmentCode|Str||
|DepartmentName|Str||
|ItemCostAmount|Dec||
|ProfitAmount|Dec||
|DiscountPct|Dec||
|DiscountAmount|Dec||
|Description|Str||
|UOMName|Str||
|FixAsset|Bool|true/false|
|DimAllocation|Array of Dimensions Allocation Objects||
:::

## DimensionsAllocationObject

:::info Output
```json
{
  "Lines": [
    {
      "DimAllocation": [  // [!code focus:7]
        {
          "DimId": "Dim1",
          "DimValueId": "00000000-0000-0000-0000-000000000000",
          "DimCode": "101"
        }
      ]
    }
  ]
}
```
:::

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|DimId|Str||
|Code|Str||
|AllocPct|Dec||
|AllocAmount|Dec||
:::

## PaymentObject

:::info Output
```json
{
  // ...
  "Payments": [
    {
      "PaymDate": "2024-04-29T00:00:00",
      "Amount": 380.00,
      "PaymentMethod": "Pangalink",
      "PaymentId": "00000000-0000-0000-0000-000000000000"
    }
  ]
  // ...
}
```

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|PaymDate|Date||
|Amount|Dec||
|PaymentMethod|Str||
|PaymentId|Guid||
:::

## AttachmentObject

:::info Output
```json
{
  "Attachment": {
    "Filename": "test.pdf",
    "FileContent": "", // PDF in base64
  }
}
```

:::details Click to see the object details
|Field|Type|Comment|
|-----|----|-------|
|Filename|Str||
|FileContent|Str|File in base64|
:::
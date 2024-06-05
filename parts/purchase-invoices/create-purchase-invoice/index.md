# Create Purchase Invoice

## Endpoints v1

<!--@include: @/dist/md/api_url.md-->v1/sendpurchinvoice`

---
>[!IMPORTANT]
>This endpoint creates document and general ledger records without any confirmation. If you need solution where book keepers are approving puchase orders and expanse claims, use different endpoint: sendpurchorder.
---
::::info Query Payload
```json
{
  "Vendor": {
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": "7",
    "OverDueCharge": "0",
    "RefNoBase": "1",
    "Address": "Mingi Tänav 5",
    "County": "Estonia",
    "CountryCode": "EE",
    "City": "Keskus, Pealinnas",
    "PostalCode": "75306",
    "PhoneNo": "",
    "PhoneNo2": "",
    "Email": ""
  },
  "ExpenseClaim": false,
  "DocDate": "20200506",
  "DueDate": "20200506",
  "TransactionDate": "20200506",
  "BillNo": "987654324",
  "RefNo": null,
  "BankAccount": "",
  "CurrencyCode": "EUR",
  "InvoiceRow": [
    {
      "Item": {
        "Code": "ENVOICE_SERVICE",
        "Description": "Rehvivahetuse ettemaks",
        "Type": 2,
        "UOMName": null
      },
      "Quantity": 1,
      "Price": 380.0,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "GLAccountCode": "1531",
      "CostCenterCode": "testCostCenterCode"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 0.20
    } 
  ],
  "Payment": {
    "PaymentMethod": "testaus",
    "PaidAmount": 380.00,
    "PaymDate": "202406031240"
  },
  "TotalAmount": 380.00,
  "Hcomment": null,
  "Fcomment": "Ülemuse autol veel vahetamata"
}
```
:::details Purchase Invoice
|Field|Type|Comment|
|-----|----|-------|
|Vendor|VendorObject||
|ExpenseClaim|bool|If false, it indicates a normal purchase invoice. If true, the purchase invoice is handled as presented by responsible employee for expense claim.|
|DocDate|Date||
|DueDate|Date||
|TransactionDate|Date||
|BillNo|Str 35||
|RefNo|Str 36||
|BankAccount|Str 50||
|CurrencyCode|Str 4||
|CurrencyRate|Decimal 18.7||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|ProjectCode|Str 20|If used then must be found in the company database.|
|InvoiceRow|Array of InvoiceRowObjects||
|TaxAmount|Array of TaxObjects|Required|
|RoundingAmount|Decimal 18.2||
|TotalAmount|Decimal 18.2|Amount without VAT|
|Payment|Payment object||
|Hcomment|Str 4K|Comment before invoice rows|
|Fcomment|Str 4K|Comment after invoice rows|
|Attachment|AttachmentObject||
|PolDocType|int 1|Poland only 1-purchmk 2-purchvatrr 3-purchwe 0-nochoise|
:::

## Vendor Object
```json
{
  "Vendor": {
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": "7",
    "OverDueCharge": "0",
    "RefNoBase": "1",
    "Address": "Mingi Tänav 5",
    "County": "Estonia",
    "CountryCode": "EE",
    "City": "Keskus, Pealinnas",
    "PostalCode": "75306",
    "PhoneNo": "",
    "PhoneNo2": "",
    "Email": ""
  },
  // ...
}
```
:::details Vendor Object
|Field|Type|Comment|
|-----|----|-------|
|Id|Guid|If filled and vendor is found in the database then following fields are not important. If not found, the vendor is added using the following fields.|
|Name|Str 150|Required when vendor is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
:::

## Item Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        "Code": "ENVOICE_SERVICE",
        "Description": "Rehvivahetuse ettemaks",
        "Type": 2,
        "UOMName": null
      },
      // ...
    }
  ],
  // ...
}
```
:::details Item Object
|Field|Type|Comment|
|-----|----|-------|
|Code|Str 20|Required. Must be found in company database.|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit. Required for stock item|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required if the item is a stock item and does not exist yet.|
:::

## InvoiceRow Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        // ...
      },
      "Quantity": 1,
      "Price": 380.0,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "GLAccountCode": "1531",
      "CostCenterCode": "testCostCenterCode"
    }
  ],
  // ...
}
```
:::details InvoiceRow Object
|Field|Type|Comment|
|-----|----|-------|
|Item|ItemObject||
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|Str 10|General ledger Account code. If used then must be found in the company database|
|ProjectCode|Str 20|If used then must be found in the company database|
|CostCenterCode|Str 20|If used then must be found in the company database|
:::

## TaxAmount Object
```json
{
  // ...
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 0.20
    } 
  ],
  // ...
}
```
:::details Tax Object
|Field|Type|Comment|
|-----|----|-------|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||
:::

## Payment Object
```json
{
  // ...
  "Payment": {
    "PaymentMethod": "Nordea",
    "PaidAmount": 380.00,
    "PaymDate": "202406031240"
  },
  // ...
}
```
:::details Payment Object
|Field|Type|Comment|
|-----|----|-------|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|
:::

## Attachment Object
```json
{
  // ...
  "Attachment": {
    "FileName": "ZmlsZS5wZGY=",
    "FileContent": "YmFzZTY0"
  },
  // ...
}
```
:::details Attachment Object
|Field|Type|Comment|
|-----|----|-------|
|FileName|Str||
|FileContent|Str|PDF In Base64 format|
:::
::::

## Endpoints v2

`https://aktiva.meritaktiva.fi/api/v2/sendpurchinvoice`

---
::::info Query Payload
## Purchase Invoice
```json
{
  "Vendor": {
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": "7",
    "OverDueCharge": "0",
    "RefNoBase": "1",
    "Address": "Mingi Tänav 5",
    "County": "Estonia",
    "CountryCode": "EE",
    "City": "Keskus, Pealinnas",
    "PostalCode": "75306",
    "PhoneNo": "",
    "PhoneNo2": "",
    "Email": ""
  },
  "ExpenseClaim": false,
  "DocDate": "20200506",
  "DueDate": "20200506",
  "TransactionDate": "20200506",
  "BillNo": "987654324",
  "RefNo": null,
  "BankAccount": "",
  "CurrencyCode": "EUR",
  "InvoiceRow": [
    {
      "Dimensions": [
        {
          "DimId": 2,
          "DimValueId": "7fc5f7f0-0537-4d64-b4cc-a8647bd217ac",
          "DimCode": "hfif"
        }
      ],
      "Item": {
        "Code": "ENVOICE_SERVICE",
        "Description": "Rehvivahetuse ettemaks",
        "Type": 2,
        "UOMName": null
      },
      "Quantity": 1,
      "Price": 380.0,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "GLAccountCode": "1531",
      "CostCenterCode": "testCostCenterCode"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 0.20
    }
  ],
  "Payment": {
    "PaymentMethod": "testaus",
    "PaidAmount": 380.00,
    "PaymDate": "202406031240"
  },
  "Attachment": {
    "FileName": "ZmlsZS5wZGY=",
    "FileContent": "YmFzZTY0"
  },
  "Receiver": {
    "Id": "01b7732d-ef2b-43a1-bb25-0ad715cf6b22",
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatAccountable": true,
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "Mingi Tänav 5",
    "City": "Keskus, Pealinnas",
    "County": "Estonia",
    "PostalCode": "75306",
    "CountryCode": "EE",
    "PhoneNo": "",
    "PhoneNo2": "",
    "HomePage": "",
    "Email": ""
  },
  "TotalAmount": 380.00,
  "Hcomment": null,
  "Fcomment": "Ülemuse autol veel vahetamata"
}
```
:::details Purchase Invoice
|Field|Type|Comment|
|-|-|-|
|Vendor|VendorObject||
|ExpenseClaim|bool|If false, it indicates a normal purchase invoice. If true, the purchase invoice is handled as presented by responsible employee for expense claim.|
|DocDate|Date||
|DueDate|Date||
|TransactionDate|Date||
|BillNo|Str 35||
|RefNo|Str 36||
|CurrencyCode|Str 4||
|CurrencyRate|Decimal 18.7||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|Dimensions|Array of dimensions objects|If used then must be found in the company database.|
|InvoiceRow|Array of InvoiceRowObjects||
|TotalAmount|Decimal 18.2|Amount without VAT|
|RoundingAmount|Decimal 18.2||
|TaxAmount|Array of TaxObjects|Required|
|Payment|Payment object||
|Hcomment|Str 4K|Comment before invoice rows|
|Fcomment|Str 4K|Comment after invoice rows|
|Attachment|AttachmentObject||
|BankAccount|Str 50||
|Receiver|ReceiverObject||
:::

## Vendor Object
```json
{
  "Vendor": {
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": "7",
    "OverDueCharge": "0",
    "RefNoBase": "1",
    "Address": "Mingi Tänav 5",
    "County": "Estonia",
    "CountryCode": "EE",
    "City": "Keskus, Pealinnas",
    "PostalCode": "75306",
    "PhoneNo": "",
    "PhoneNo2": "",
    "Email": ""
  },
  // ...
}
```
:::details Vendor Object
|Field|Type|Comment|
|-|-|-|
|Id|Guid|If filled and vendor is found in the database then following fields are not important. If not found, the vendor is added using the following fields.|
|Name|Str 150|Required when vendor is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when vendor is added. Allowed true or false (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
:::

## InvoiceRow Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        // ...
      },
      "Quantity": 1,
      "Price": 380.0,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "GLAccountCode": "1531",
      "CostCenterCode": "testCostCenterCode"
    }
  ],
  // ...
}
```json

```
:::details InvoiceRow Object
|Field|Type|Comment|
|-|-|-|
|Item|Item Object||
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|Str 10|General ledger Account code. If used then must be found in the company database|
|Dimensions|Array of Dimensions objects|If used then must be found in the company database|
|VatDate|Str 20||
|SalesAccCode|Str 10||
|PurchaseAccCode|Str 10|If included GLAccountCode then the PurchaseAccCode not be used|
|InventoryAccCode|Str 10||
|CostAccCode|Str 10||
:::

## Item Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        "Code": "ENVOICE_SERVICE",
        "Description": "Rehvivahetuse ettemaks",
        "Type": 2,
        "UOMName": null
      },
      // ...
    }
  ],
  // ...
}
```
:::details Item Object
|Field|Type|Comment|
|-|-|-|
|Code|Str 20|Required. Must be found in company database.|
|Description|Str 100|Required|
|Type|Int|1 = stock item, 2 = service, 3 = item. Required.|
|UOMName|Str 64|Name for the unit. Required for stock item|
|DefLocationCode|Str 20|If company has more than one (default) stock, stock code in this field is required if the item is a stock item and does not exist yet.|
:::

## Dimensions Object
```json
{
  // ...
  "InvoiceRow": [
    {
      // ...
      "Dimensions": [
        {
          "DimId": 2,
          "DimValueId": "7fc5f7f0-0537-4d64-b4cc-a8647bd217ac",
          "DimCode": "hfif"
        }
      ],
      // ...
    }
  ],
  // ...
}
```

:::details Dimensions Object
|Field|Type|Comment|
|-|-|-|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||
:::

## TaxAmount Object
```json
{
  // ...
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 0.20
    }
  ],
  // ...
}
```
:::details Tax Object
|Field|Type|Comment|
|-|-|-|
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|Amount|Decimal 18.2||
:::

## Payment Object
```json
{
  // ...
  "Payment": {
    "PaymentMethod": "Nordea",
    "PaidAmount": 380.00,
    "PaymDate": "202406031240"
  },
  // ...
}
```
:::details Payment Object
|Field|Type|Comment|
|-|-|-|
|PaymentMethod|Str 150|Name of the payment method. Must be found in the company database.|
|PaidAmount|Decimal 18.2|Amount with VAT (not more) or less if partial payment|
|PaymDate|Date|YYYYmmddHHii|
:::

## Attachment Object
```json
{
  // ...
  "Attachment": {
    "FileName": "ZmlsZS5wZGY=",
    "FileContent": "YmFzZTY0"
  },
  // ...
}
```
:::details Attachment Object
|Field|Type|Comment|
|-|-|-|
|FileName|Str||
|FileContent|Str|PDF In Base64 format|
:::

## Receiver Object
```json
{
  // ...
  "Receiver": {
    "Id": "",
    "Name": "Mingi Firma AS",
    "RegNo": "123456789",
    "VatAccountable": true,
    "VatRegNo": "EE123456789",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "Mingi Tänav 5",
    "City": "Keskus, Pealinnas",
    "County": "Estonia",
    "PostalCode": "75306",
    "CountryCode": "EE",
    "PhoneNo": "",
    "PhoneNo2": "",
    "HomePage": "",
    "Email": ""
  },
  // ...
}
```
:::details Receiver Object
|Field|Type|Comment|
|-|-|-|
|Id|Guid|If filled and receiver (vendor) is found in the database then following fields are not important. If not found, the receiver is added using the following fields.|
|Name|Str 150|Required when receiver is added|
|RegNo|Str 30||
|VatAccountable|Bool|Required when receiver is added. Allowed "true" or "false" (lowercase).|
|VatRegNo|Str 30||
|CurrencyCode|Str 4||
|PaymentDeadLine|Int|If missing then taken from default settings.|
|OverDueCharge|Decimal 5.2|If missing then taken from default settings.|
|Address|Str 100||
|City|Str 30||
|County|Str 100||
|PostalCode|Str 15||
|CountryCode|Str 2|Required when adding|
|PhoneNo|Str 50||
|PhoneNo2|Str 50||
|HomePage|Str 80||
|Email|Str 80||
:::
::::
---
:::info Successful Result
## Successful Result
```json
{
  "VendorId": "cbd0cd6b-c6ce-42c5-9162-0eb4942f2dd5",
  "BillId": "23b7203d-bcb4-4cf4-963a-8cc30c298c25",
  "BillNo": "987654324",
  "RefNo": null,
  "BatchInfo": "OS-1"
}
```
:::

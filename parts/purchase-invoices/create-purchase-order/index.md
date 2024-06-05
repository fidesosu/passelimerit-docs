# Create Purchase Invoice Waiting Approval
---

- [Create Purchase Invoice Waiting Approval v1](#ver1)
- [Create Purchase Invoice Waiting Approval v2](#ver2)

## Endpoints v1 {#ver1}

<!--@include: @/dist/md/api_url.md-->v1/sendpurchorder`

---

>[!NOTE]
>Please make sure the PDF is a valid file and correctly encoded into Base64. We validate these attachements. This is quite otfen that API responds with error because of attachment that is broken file. <br><br>Also, if you want to send expense document instead of invoice, please use attribute  `ExpenseClaim: true`. <br><br>If you want to send document straight to book keeping with general ledger records and stuff. Please use endpoint `sendpurchinvoice`.
---
::::info Query Payload
```json
{
  "Vendor": {
    "Name": "VendorName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "VendorAddress",
    "City": "VendorCity",
    "County": "VendorCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.vendor.com",
    "Email": "",
    "VatRegNo": "12345678"
  },
  "DocDate": "20170113131239",
  "DueDate": "20170125131239",
  "BillNo": "123",
  "RefNo": "1232",
  "BankAccount": "FI123456789",
  "CurrencyCode": "EUR",
  "CurrencyRate": 1.0,
  "DepartmentCode": "",
  "ProjectCode": "",
  "InvoiceRow": [
    {
      "Item": {
        "Code": "1234567",
        "Description": "Bag of goldflakes",
        "Type": 3,
        "UOMName": "kg"
      },
      "Quantity": 2.00,
      "Price": 1000.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
    }
  ],
  "RoundingAmount": 0.00,
  "TotalAmount": 2000.00,
  "Payment": {
    "PaymentMethod": "Nordea",
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
  },
  "Hcomment": "",
  "Fcomment": "",
  "Attachment": {
    "FileName": "invoice.pdf",
    "FileContent": "Base64EncodedPDF"
  }
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
|PolDocType|int 1|Poland only, 1-purchmk 2-purchvatrr 3-purchwe 0-nochoise|
:::

## Vendor Object
```json
{
  "Vendor": {
    "Name": "VendorName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "VendorAddress",
    "City": "VendorCity",
    "County": "VendorCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.vendor.com",
    "Email": "",
    "VatRegNo": "12345678"
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

## Item Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        "Code": "1234567",
        "Description": "Bag of goldflakes",
        "Type": 3,
        "UOMName": "kg"
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

## InvoiceRow Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        // ...
      },
      "Quantity": 2.00,
      "Price": 1000.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
  // ...
}
```
:::details InvoiceRow Object
|Field|Type|Comment|
|-|-|-|
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

## Tax Object
```json
{
  // ...
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
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
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
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
    "FileName": "invoice.pdf",
    "FileContent": "Base64EncodedPDF"
  }
}
```
:::details Attachment Object
|Field|Type|Comment|
|-|-|-|
|FileName|Str||
|FileContent|Str|PDF In Base64 format|
:::
::::

## Endpoints v2 {#ver2}

<!--@include: @/dist/md/api_url.md-->v2/sendpurchorder`

---
::::info Query Payload
## Purchase Invoice
```json
{
  "PolDocType": 1,
  "Vendor": {
    "Name": "VendorName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "VendorAddress",
    "City": "VendorCity",
    "County": "VendorCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.vendor.com",
    "Email": "",
    "VatRegNo": "12345678"
  },
  "DocDate": "20170113131239",
  "DueDate": "20170125131239",
  "BillNo": "123",
  "RefNo": "1232",
  "BankAccount": "FI123456789",
  "CurrencyCode": "EUR",
  "DepartmentCode": "",
  "InvoiceRow": [
    {
      "Item": {
        "Code": "1234567",
        "Description": "Bag of goldflakes",
        "Type": 3,
        "UOMName": "kg"
      },
      "Quantity": 2.00,
      "Price": 1000.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
    }
  ],
  "RoundingAmount": 0.00,
  "TotalAmount": 2000.00,
  "Payment": {
    "PaymentMethod": "Nordea",
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
  },
  "Hcomment": "",
  "Fcomment": "",
  "Attachment": {
    "FileName": "invoice.pdf",
    "FileContent": "Base64EncodedPDF"
  },
  "ExpenseClaim": false,
  "Dimensions": [
    {
    "DimId": 2,
    "DimValueId": "7fc5f7f0-0537-4d64-b4cc-a8647bd217ac",
    "DimCode": "hfif"
    }
  ],
  "Receiver": {
    "Name": "ReceiverName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "ReceiverAddress",
    "City": "ReceiverCity",
    "County": "ReceiverCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.receiver.com",
    "Email": "",
    "VatRegNo": "12345678"
  }
}
```
:::details Purchase Invoice
|Field|Type|Comment|
|-|-|-|
|PolDocType|int 1|Poland only 1-purchmk 2-purchvatrr 3-purchwe 0-nochoise|
|Vendor|VendorObject||
|DocDate|Date||
|DueDate|Date||
|BillNo|Str 35||
|RefNo|Str 36||
|CurrencyCode|Str 4||
|DepartmentCode|Str 20|If used then must be found in the company database.|
|Dimensions|Array of Dimensions objects||
|InvoiceRow|Array of InvoiceRowObjects||
|TotalAmount|Decimal 18.2|Amount without VAT|
|RoundingAmount|Decimal 18.2||
|TaxAmount|Array of TaxObjects|Required|
|Hcomment|Str 4K|Comment before invoice rows|
|Fcomment|Str 4K|Comment after invoice rows|
|Attachment|AttachmentObject||
|Payment|Payment object||
|BankAccount|Str 50||
|ExpenseClaim|bool|If false, it indicates a normal purchase invoice. If true, the purchase invoice is handled as presented by responsible employee for expense claim.|
|Receiver|ReceiverObject||
:::

## Vendor Object
```json
{
  "Vendor": {
    "Name": "VendorName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "VendorAddress",
    "City": "VendorCity",
    "County": "VendorCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.vendor.com",
    "Email": "",
    "VatRegNo": "12345678"
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

## Item Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        "Code": "1234567",
        "Description": "Bag of goldflakes",
        "Type": 3,
        "UOMName": "kg"
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

## InvoiceRow Object
```json
{
  // ...
  "InvoiceRow": [
    {
      "Item": {
        // ...
      },
      "Quantity": 2.00,
      "Price": 1000.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
  // ...
}
```
:::details InvoiceRow Object
|Field|Type|Comment|
|-|-|-|
|Item|ItemObject||
|Quantity|Decimal 18.3||
|Price|Decimal 18.7||
|TaxId|Guid|Required. Use gettaxes endpoint to detect the guid needed|
|LocationCode|Str 20|Used for stock items and multiple stocks. If used then must be found in the company database.|
|DepartmentCode|Str 20|If used then must be found in the company database.|
|GLAccountCode|Str 10|General ledger Account code. If used then must be found in the company database|
|ProjectCode|Str 20|If used then must be found in the company database|
|CostCenterCode|Str 20|If used then must be found in the company database|
|Dimensions|Array of Dimensions objects||
:::

## Tax Object
```json
{
  // ...
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
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
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
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
    "FileName": "invoice.pdf",
    "FileContent": "Base64EncodedPDF"
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

## Dimensions Object
```json
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
```
:::details Dimensions Object
|Field|Type|Comment|
|-|-|-|
|DimId|Int||
|DimValueId|Guid||
|DimCode|Str||
:::

## Receiver Object
```json
{
  // ...
  "Receiver": {
    "Name": "ReceiverName",
    "RegNo": "12345678",
    "VatAccountable": true,
    "VatRegNo": "12345678",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "Address": "ReceiverAddress",
    "City": "ReceiverCity",
    "County": "ReceiverCounty",
    "PostalCode": "12345",
    "CountryCode": "FI",
    "PhoneNo": "123456789",
    "PhoneNo2": "123456789",
    "HomePage": "www.receiver.com",
    "Email": ""
  }
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
:::info
## Successful Result
```json
{
  "VendorId": "00000000-0000-0000-0000-000000000000",
  "BillId": "b68bda7c-d82e-490d-b9c5-2f124098a11b",
  "BillNo": "123",
  "RefNo": "1232",
  "BatchInfo": null
}
```
:::
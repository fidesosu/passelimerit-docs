# Example create purchase invoice with proportional VAT
---
Tax % 20,   Proportion used on VAT deduction in percents 34

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
    "Address": "Mingi Tänav kusagil",
    "County": "Estonia",
    "CountryCode": "EE",
    "City": "Keskus, Linnas",
    "PostalCode": "75306",
    "PhoneNo": "",
    "PhoneNo2": "",
    "Email": ""
  },
  "ExpenseClaim": false,
  "DocDate": "20200506",
  "DueDate": "20200506",
  "TransactionDate": "20200506",
  "BillNo": "987654323",
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
      "Price": 10.0,
      "TaxId": "340e8fbf-7609-4449-ac12-50b0ff31ef6d",
      "GLAccountCode": "1000",
      "CostCenterCode": "MAS"
    }
  ],
  "TaxAmount": [
    {
      "TaxId": "340e8fbf-7609-4449-ac12-50b0ff31ef6d",
      "Amount": 0.68
    }
  ],
  "TotalAmount": 11.32
}
```
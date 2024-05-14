# Example: Create Sales Invoice WITH PAYMENT

---
```json
{
  "Customer":{
    "Name":"Mari Maasikas",
    "NotTDCustomer":"true",
    "Address":"Tuleviku tee 6, Lohkva, Luunja vald, Tartumaa",
    "CountryCode":"EE",
    "PhoneNo":"",
    "Email":"mari@example.com"
  },
  "DocDate": "20190413202154",
  "DueDate": "20190413202154",
  "InvoiceNo": "BL942019-PGG",
  "RefNo": "",
  "DepartmentCode": "",
  "ProjectCode": "",
  "InvoiceRow": [{
    "item": {
      "Code": 1234567,
      "Description": "Bag of goldflakes",
      "Type": 3,
      "UOMName": "kg"
    },
    "Quantity": 1,
    "Price": 100,
    "DiscountPct": 0,
    "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21"
   }],
  "TaxAmount": [{
    "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21"
  }],
  "RoundingAmount": 0,
  "TotalAmount": 100,
  "Payment": {
    "PaymentMethod": "Swedbank",
    "PaidAmount": "100",
    "PaymDate": "20190413202154"
  },
  "HComment": "",
  "FComment": ""
}
```
---
:::info Additional Information
- Change the `PaymentMethod` value to the bank associated with your company's account.
- The `PaidAmount` **can't** be more than the `TotalAmount`. 
:::
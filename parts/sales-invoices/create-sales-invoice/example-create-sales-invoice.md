# Example: Create Sales Invoice
---
```json
{
  "Customer": {
    "Name": "FirstCustomer Inc",
    "RegNo": "1122334755",
    "NotTDCustomer": false,
    "VatRegNo": "11222344",
    "CurrencyCode": "EUR",
    "PaymentDeadLine": 7,
    "OverDueCharge": 0,
    "RefNoBase": 1,
    "Address": "Merimiehenkatu 31",
    "CountryCode": "FI",
    "County": "Finland",
    "City": "Helsinki",
    "PostalCode": "",
    "PhoneNo": "6548765",
    "PhoneNo2": "",
    "HomePage": "",
    "Email": "customermail@gmail.com"
  },
  "DocDate": "20170113131239",
  "DueDate": "20170125131239",
  "InvoiceNo": "123",
  "RefNo": "1232",
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
      "DiscountPct": 0,
      "DiscountAmount": 0.00,
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "LocationCode": "1"
    }
  ],
  "TotalAmount": 2000.00,
  "RoundingAmount": 0.00,
  "TaxAmount": [
    {
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      "Amount": 400.00
    }
  ],
  "HComment": "",
  "FComment": ""
}
 ```
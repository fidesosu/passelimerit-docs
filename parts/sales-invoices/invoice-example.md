  # Example: Create Sales Invoice

  ```json
  var reqJson = {
   "Customer": {
     //"Id": null,
     "Name": "FirstCustomer Inc",
     "RegNo": "1122334455",
     "NotTDCustomer": false,
     "VatRegNo": "11223344",
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
     "Email": "customermail@gmail.com",
   },
   "DocDate": "20170113131239",
   "DueDate": "20170125131239",
   "InvoiceNo": "123",
   "RefNo": "1232",
   "DepartmentCode": "",
   "ProjectCode": "",
   "InvoiceRow": [
     {
       "Item":
         {
           "Code": "1234567",
           "Description": "Bag of goldflakes",
           "Type": 3,
           "UOMName": "kg",
         },
       "Quantity": 2.00,
       "Price": 1000.00,
       "DiscountPct": 0,
       "DiscountAmount": 0.00,
       "TaxId": "665f01a4-357a-4a6b-a565-2f17e6e1da13",
       "LocationCode": "1",
     },
   ],
   "TotalAmount": 2000.00,
   "RoundingAmount": 0.00,
   "TaxAmount": [{ 
        "TaxId": "665f01a4-357a-4a6b-a565-2f17e6e1da13", 
        "Amount": 400.00 }],
   "HComment": "",
   "FComment": "",
 };
  ```
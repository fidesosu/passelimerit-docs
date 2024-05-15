# Example create purchase invoice
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
      "Price": 10.0, 
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21", 
      "GLAccountCode": "1000", 
      "CostCenterCode": "MAS"   
    } 
  ], 
  "TaxAmount": [  
    { 
      "TaxId": "b9b25735-6a15-4d4e-8720-25b254ae3d21", 
      "Amount": 0.20   
    } 
  ], 
  "TotalAmount": 10.00,
  "Hcomment": null,
  "Fcomment": "Ülemuse autol veel vahetamata"
}
```

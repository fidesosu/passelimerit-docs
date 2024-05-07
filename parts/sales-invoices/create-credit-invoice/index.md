# Create Credit Invoice

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendinvoice`

## Query Payload

It is the same as create sales invoice, but use negative quantity. If you have discount, the DiscountAmount has to be negative value as well.

This is the normal Sales invoice, we’re going to credit with second payload:

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
    "DocDate":"20200106000000",
    "DueDate":"20200116000000",
    "TransactionDate":"20200106000000",
    "InvoiceNo":"A00001",
    "RefNo":"99999",
    "CurrencyCode":"EUR",
    "InvoiceRow":[
       {
          "Item":{
             "Code":"MAAKLER",
             "Description":"Maaklerteenus",
             "Type":2
          },
          "Quantity":"1.000",
          "Price":"416.67",
          "DiscountPct":"10.00",
          "DiscountAmount":"41.67",
          "TaxId":"b9b25735-6a15-4d4e-8720-25b254ae3d21"
       }
    ],
    "TotalAmount":"375.00",
    "TaxAmount":[
       {
          "TaxId":"b9b25735-6a15-4d4e-8720-25b254ae3d21",
          "Amount":"75.00"
       }
    ],
    "HComment":"",
    "FComment":""
 }
```

<br>
This is the payload to credit the first payload

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
    "DocDate":"20200106000000",
    "DueDate":"20200116000000",
    "TransactionDate":"20200106000000",
    "InvoiceNo":"C00001",
    "RefNo":"99999",
    "CurrencyCode":"EUR",
    "InvoiceRow":[
       {
          "Item":{
             "Code":"MAAKLER",
             "Description":"Maaklerteenus",
             "Type":2
          },
          "Quantity":"-1.000",
          "Price":"416.67",
          "DiscountPct":"10.00",
          "DiscountAmount":"-41.67",
          "TaxId":"b9b25735-6a15-4d4e-8720-25b254ae3d21"
       }
    ],
    "TotalAmount":"-375.00",
    "TaxAmount":[
       {
          "TaxId":"b9b25735-6a15-4d4e-8720-25b254ae3d21",
          "Amount":"75.00"
       }
    ],
    "HComment":"",
    "FComment":""
 }
```
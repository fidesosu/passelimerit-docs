# Example create sales offer
---
```json
{
  Customer: {
    Name: "Hindre",
    PartyCode: "50055",
    SalesInvLang: "ET",
    NotTDCustomer: false,
    CountryCode: "EE"
  },
  DocDate: "20200602",
  ExpireDate: "20200602",
  DeliveryDate: "20200606",
  DocType: 2,
  DocStatus: 3,
  ReserveItems: false,
  CurrencyCode: "EUR",
  OfferNo: "MPO-2001",
  OfferRow: [
    {
      Item: {
        EANCode: "094393450511",
        Description: "Udupeen Kaup",
        Type: 3
      },
      Quantity: 1.0,
      Price: 100.0,
      TaxId: "b9b25735-6a15-4d4e-8720-25b254ae3d21"
    }
  ],
  TaxAmount: [
    {
      TaxId: "b9b25735-6a15-4d4e-8720-25b254ae3d21",
      Amount: 20.0
    }
  ],
  TotalAmount: 100.0, 
  Hcomment: "säilivusaja tekst",
  Fcomment: "Kauba kohaletoimetamise tekst",
  ContactInfo: "Helista teisipäeval telefonile 123456789" 
}
```
# Customer Debts Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getcustdebtrep`

## Query payload
```json
{ 
  “CustName”: “Kliendinimi”,
  “CustId”: “3a274294-9c60-4a3d-93f0-1874253f073e”,
  “OverDueDays”: 5,
  “DebtDate”:”20220501″ 
}
```

|Field|Type|Comment|
|-----|----|-------|
|CustName|Str 150|Required if CustId not used. If  the CustName "" then all customers are selected.|
|CustId|Guid||
|OverDueDays|Int 3|more exceeded days|
|DebtDate|Date|Date in the format yyyyMMdd, if not used the current date.|


## Successful result

|Field|Comment|
|-----|-------|
|PartnerName||
|PartnerId||
|DocType|SO offer, MA invoice, SBx() initial balance, PR and BA from program.|
|DocDate||
|DocNo||
|RefNo||
|DueDate||
|TotalAmount||
|PaidAmount||
|UnPaidAmount||
|CurrencyCode||
|CurrencyRate||

# Banks List

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/getbanks`

## Query Payload
```json
{ }
```

## Successful Result
```json
[
  {
    "BankId": "93f8d710-d0d2-4e9c-8c66-XXXXXXXXXXXX",
    "Name": "test",
    "IBANCode": "FI32 3623 6540 XXXX XX",
    "Description": "test",
    "CurrencyCode": "EUR"
  }
]
```
:::details Click to see the result parameters
|Field Name|Type|
|----------|----|
|Name|Str 20|
|IBANCode|Str 64|
|Description|Str 20|
|BankId|Guid|
|CurrencyCode|Str|
:::
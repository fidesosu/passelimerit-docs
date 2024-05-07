# Send Indication Values

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendindvalues`

## Query Payload

```json
{ 
  ArtCode: "", 
  Values: [ 
    { EndValue: 100.00, Address: "Sipelga 14-3\nLohkva" } 
  ]
}  
```

### Payload

|Field|Type|Comment|
|-|-|-|
|ArtCode|string 100|Article code to add value|
|IndValue|IndValue Object||


### IndValue Object

|Field|Type|comment|
|-|-|-|
|Address|string||
|CustomerId|guid||
|EndValue|decimal||
|Quantity|decimal|If used then, EndValue is ignored|


## Successful Result

Näidud kanti üle x lepingu x reale ja kogused ning summad arvutati uuesti.


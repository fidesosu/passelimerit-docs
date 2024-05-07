# Send Indication Values

## Endpoints

<!--@include: @/dist/md/api_url.md-->v1/sendindvalues`

## Query Payload

```json
{ 
  ArtCode: "EU-maat tav", 
  Values: [ 
    { 
      EndValue: 100.00, 
      CustomerId: "7da4cd44-9b49-4a35-8d1b-f339a68e7058" 
    } 
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
|Quantity|decimal|If used, EndValue is ignored|


## Successful Result

`"The readings were moved to line 1 of 1 contract and the quantities and sums were recalculated."`

:::info Additional Information
You can find the CustomerId using [`v1/getcustomers`](../../customers/get-customer-list/)
:::
# Customer Payment Report

## Endpoints

<!--@include: @/dist/md/api_url.md-->v2/getcustpaymrep`

## Query Payload

|Field|Type|Comment|
|-----|----|-------|
|CustName|Str 150||
|CustId|Quid||
|PeriodStart|Date||
|PeriodEnd|Date||
|CurrncyCode|Str 4||


## Successful Result

|Field|Comment|
|-----|-------|
|Data|Data Object|
|HasMore|true/false|
|Id4More||


If `HasMore` is `true` then new request to endpoint:<br>

<!--@include: @/dist/md/api_url.md-->v2/getmoredata`

## Query Payload
```json
{ 
  Id4More from previous request
}
```
The request must repeat until HasMore is false

## DataObject

|Field|Comment|
|-----|-------|
|CustName||
|CustId||
|DocDate||
|DocNo||
|TotalAmount||
|DueDate||
|UnPaidAmount||
|OverDue||

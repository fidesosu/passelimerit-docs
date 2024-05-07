# Example of Getting List [PHP]
---
```php
<?php
function signURL($id, $key, $timestamp, $json) {
 $signable = $id.$timestamp.$json;
 // NOTICE:  bool $raw_output = TRUE
 $rawSig = hash_hmac('sha256', $signable, $key, true);
 $base64Sig = base64_encode($rawSig);
 return $base64Sig;

}

function postStuff($stuff, $endpoint) {
  $ch = curl_init(); 

  // random test company
  $APIID = "14741dd4-6707-4236-832d-xxxxxxxx"; 
  $APIKEY = "xxxxxxxxxxx"; 
  $TIMESTAMP = date("YmdHis");

  $signature = signURL($APIID,$APIKEY, $TIMESTAMP,  json_encode($stuff));
 curl_setopt($ch, CURLOPT_URL, "https://aktiva.merit.ee/api/v1/".$endpoint."?ApiId=".$APIID."&timestamp=".$TIMESTAMP."&signature=".$signature);
 curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
 curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($stuff));
 curl_exec($ch);
 if(curl_getinfo($ch, CURLINFO_RESPONSE_CODE) != 200) {
 print("ERROR ".curl_getinfo($ch, CURLINFO_RESPONSE_CODE)."\r\n");
   print_r(curl_getinfo($ch));
 }
 curl_close($ch);
 }
 
$payloadGetInvoices = array("PeriodStart" => "20190101", "PeriodEnd" => "20190301");

postStuff($payloadGetInvoices, "getinvoices");
```
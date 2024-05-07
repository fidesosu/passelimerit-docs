# Example: Create Sales Invoice in PHP
---
```php
  <?php

    // error reporting
    function callError($subject, $error) {

      // log error
      print("[API-TEST]: " . $subject);
      print($error);

    }

    // signing process
    function signURL($id, $key, $timestamp, $json) {
      $signable = $id.$timestamp.$json;
      // NOTICE:  bool $raw_output = TRUE
      $rawSig = hash_hmac('sha256', $signable, $key, true);
      $base64Sig = base64_encode($rawSig);
      return $base64Sig;

    }

    // curl that POST stuff to endpoints
    function postStuff($stuff, $endpoint) {

      $responseString = "";

      $ch = curl_init();

      // random test company
      $APIID = "4f065c-------------------------";
      $APIKEY = "zVBpW4//////////////////////////";
      $TIMESTAMP = date("YmdHis");

      $signature = signURL($APIID,$APIKEY, $TIMESTAMP,  json_encode($stuff));
      curl_setopt($ch, CURLOPT_URL, "https://aktiva.merit.ee/api/v1/".$endpoint."?ApiId=".$APIID."&timestamp=".$TIMESTAMP."&signature=".$signature);
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
      curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));
      curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($stuff));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_HEADER, 1);
      $response = curl_exec($ch);

      $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
      $header = substr($response, 0, $header_size);
      $body = substr($response, $header_size);

      if(curl_getinfo($ch, CURLINFO_RESPONSE_CODE) != 200) {

        callError("HTTP error ". curl_getinfo($ch, CURLINFO_RESPONSE_CODE), json_encode(curl_getinfo($ch)) . ", ". $body );
        exit;

      } else {

        $woSlashes = stripslashes($body);
        $strLen = strlen($woSlashes);
        // removing slashes and dashes
        $responseString = substr(substr($woSlashes, 1, $strLen), 0, $strLen-2);

      }
      curl_close($ch);
      return $responseString;
    }

    $CurTime = date("Ymd");
    $sendInvoice = [
      "Customer" => [
        "Name" => "Mari Maasikas",
        "NotTDCustomer" => "true",
        "Address" => "Tuleviku tee 10",
        "City" => "Lohkva",
        "County" => "Luunja vald, Tartumaa",
        "PostalCode" => "EE80034",
        "CountryCode" => "EE",
        "PhoneNo" => "",
        "Email" => "mari@example.com"
      ],
      "DocDate" => $CurTime,
      "DueDate" => $CurTime,
      "TransactionDate" => $CurTime,
      "InvoiceNo" => "TEST00001",
      "RefNo" => null,
      "CurrencyCode" => "EUR",
      "InvoiceRow" => [
        [
          "Item" => [
            "Code" => "MAAKLER",
            "Description" => "Maaklerteenus",
            "Type" => 2
          ],
          "Quantity" => "1.000",
          "Price" => "416.67",
          "DiscountPct" => "10.00",
          "DiscountAmount" => "41.67",
          "TaxId" => "b9b25735-6a15-4d4e-8720-25b254ae3d21"
        ]
      ],
      "RoundingAmount" => 5,
      "TotalAmount" => "375.00",
      "TaxAmount" => [
        [
          "TaxId" => "b9b25735-6a15-4d4e-8720-25b254ae3d21",
          "Amount" => "75.00"
        ]
      ],
      "HComment" => "",
      "FComment" => ""
    ];

    // sending invoice to Merit
    $sendingResponse = postStuff($sendInvoice, "sendinvoice");
    $sendingResponseArray = json_decode($sendingResponse, true);

    // was the response valid JSON?
    if($sendingResponseArray == null) {
      callError("HTTP response was not JSON", $sendingResponse);
      exit;
    }

    // extract GUID
    $guid = strtoupper($sendingResponseArray['InvoiceId']);

    // Check if GUID is valid
    if (preg_match('/^\{?[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}\}?$/', $guid)) {

      // Print message if GUID is valid
      print("InvoiceId guid OK, write it down somewhere \n\r");

      // Delete invoice afterwards
      /*
      $deleteInvoice = [
            "Id"=>$guid
      ];
      $deletingResponse = postStuff($deleteInvoice, "deleteinvoice");
      print ("delete: " . $deletingResponse);
      */

    } else {

      callError("It was response, but guid invalid", $sendingResponse);
      exit;


    }
  ```


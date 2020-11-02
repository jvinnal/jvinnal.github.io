<?php
// Set your return content type
header('Content-type: application/xml');

// Website url to open
$url = 'https://riigihanked.riik.ee/rhr/api/public/v1/opendata/notice/2019/month/1/';

// Get that website's content
$handle = fopen($url, "r");

// If there is something, read and return
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>
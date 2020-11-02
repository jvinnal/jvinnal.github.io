<?php

$cacheName = 'somefile.xml.cache';
// generate the cache version if it doesn't exist or it's too old!
$ageInSeconds = 3600; // one hour
if(!file_exists($cacheName) || filemtime($cacheName) > time() + $ageInSeconds) {
  $contents = file_get_contents('http://192.168.56.1:8080/HT_2019_1.xml');
  file_put_contents($cacheName, $contents);
}

$xml = simplexml_load_file($cacheName);

header('Content-type: application/xml');
echo $xml;

?>
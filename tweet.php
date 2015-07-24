<?php

if (!$_GET['update']) {
	echo 'fail!';
} else {

$username = 'genhaiku';
$password = 'xdac0cmeb';

$update = str_replace('<br />', ' / ', $_GET['update']);

if (strlen($update) > 140) die('bigger then 140 chars');

$url = 'http://twitter.com/statuses/update.json';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$url");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "status=".$update);
curl_setopt($ch, CURLOPT_USERPWD, $username.":".$password);
$result = curl_exec($ch);
curl_close($ch);

if($result)
    echo 'success';
else 
	echo 'no curl?!';

}

?>;

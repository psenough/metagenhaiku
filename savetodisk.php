<?php

if (!$_GET['update']) {
	echo 'fail!';
} else {

$update = str_replace('<br />', "\n", $_GET['update']);


$today = getdate();
//print_r($today);
/*    [seconds] => 40
    [minutes] => 58
    [hours]   => 21
    [mday]    => 17
    [wday]    => 2
    [mon]     => 6
    [year]    => 2003
    [yday]    => 167
    [weekday] => Tuesday
    [month]   => June
    [0]       => 1055901520*/


$ourFileName = "logs/log".$today['mday'].$today['month'].".txt";
$ourFileHandle = fopen($ourFileName, 'a+') or die("can't open file");

fwrite($ourFileHandle, "\n\n".$update);

fclose($ourFileHandle);

}

?>

<?php  
$url = $_REQUEST['datastring'];

if(file_exists(''.$url.'.html'))
echo file_get_contents(''.$url.'.html');

else echo $url+'There is no such page!';

?>

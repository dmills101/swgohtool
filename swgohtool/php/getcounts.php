<?php

$count_page = ("hitcount.txt");
$hits = file_get_contents($count_page);

echo $hits;
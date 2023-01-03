
<?php

foreach (scandir("C:/xampp/htdocs/airdrunk/upload") as $item) {
  if (is_dir($item)==FALSE) {
    $option = '<option>'.$item.'</option>';
    echo $option;
  }
}
?>


<?php

foreach (scandir("./upload") as $item) {
  if (is_dir($item)==FALSE) {
    $option = '<option>'.$item.'</option>';
    echo $option;
  }
}
?>

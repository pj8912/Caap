<?php

$conn = mysqli_connect('localhost', 'root', '','test_cam');

$sql = "SELECT * FROM images ORDER by on_date desc ";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)){
    echo $row['image'].'<br>';
    // echo $row['image_name'].'<Br>';
}
?>  

<script src="script.js "></script>

<div id="newImages"></div>
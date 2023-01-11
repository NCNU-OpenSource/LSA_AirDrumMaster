<!DOCTYPE html>
<html lang="tw">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" />
    <meta http-equiv="X-US-Compatible" content="ie=edge"/>
    <link rel="stylesheet" href="./style.css">
    <title>空氣鼓達人</title>
    
</head>
<body>
    <dvi>
        <h1>
            空氣鼓達人
        </h1>
    </dvi>    

    <video id="video"></video>
    
    <audio id = "audio"  src="./instrument/small_drum1.mp3"></audio>
   
    <div class="notes">
        <h3>大鼓</h3>
        <h3>低音</h3>
        <h3>小鼓</h3>
        <h3>高鼓</h3>
        
    </div>
    
    <div class="content">
        
        <h3>選擇空氣樂器:<h3>
        <a href="drum.php">鼓</a>
        <a href="piano.php">鋼琴</a>
        <a href="guitar.php">吉他</a>
        <br>
        <br>
        <input id="fileupload" type="file" name="fileupload" /> 
        <button id="upload-button" onclick="uploadFile()"> 上傳 </button>
        <br>
        <br>
        <h3>選擇背景音樂:<h3>
        <audio id = "bgm_audio" controls autoplay muted loop>
            <source id="bgm" src="">
        </audio>
    
        <select id="select_bgm" name="select_bgm" onchange="select_change()">
            <option>不播放<option>
            <?php
                require_once "findmusic.php";
            ?>
        </select>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/handtrackjs@latest/dist/handtrack.min.js"> </script>
    <script src="upload.js"></script>
    <script src="drum.js"></script>
    <script src="play.js"></script>
</body>
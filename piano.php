<!DOCTYPE html>
<html lang="tw">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width,inital-scale=1.0"/>
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
    <audio src="./instrument/pianoC.mp3" id="audio"></audio>
   
    <div class="notes">
        <h3>鋼A</h3>
        <h3>鋼B</h3>
        <h3>鋼C</h3>
        <h3>鋼D</h3>
        
    </div>
    
    <div class="content">
        
        <h3>選擇空氣樂器:<h3>
        <a href="drum.php">鼓</a>
        <a href="piano.php">鋼琴</a>
        <a href="guitar.php">吉他</a>
        <br>
        <br>
        <input id="fileupload" type="file" name="fileupload" /> 
        <button id="upload-button" onclick="uploadFile()"> Upload </button>
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
    <script src="piano.js"></script>
    <script src="play.js"></script>
</body>
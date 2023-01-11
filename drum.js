const modelParams={
   flipHorizontal:true,
   imageScaleFactor:0.7, //水平是否映象反轉，如攝像頭資料
   maxNumBoxes:1,//最大偵測的數目1
   iouThreshold:0.5,//ios分數
   scoreThreshold:0.6// confidence threshold for predictions.//相似度闕值，過濾掉相似度低於多少的圖像
}
navigator.getUserMedia=
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia||
    navigator.mozGetUserMedia||
    navigator.msGetUserMedia;

const video = document.querySelector('#video');
//const audio = document.querySelector('#audio');
const audio = document.querySelector('#audio');

let model;

handTrack.startVideo(video).then(status =>{
    if(status){
        navigator.getUserMedia({video:{}}
        ,stream =>{
            video.srcObject = stream;
            //run
            setInterval(runDetction,100);
        },
        err=> console.log(err)
        );
    }
});

function runDetction(){
    model.detect(video).then(predictions=>{
        if(predictions.length !==0 && predictions[0].label!='face'){
            let hand1 = predictions[0].bbox;
            let x = hand1[0];
            let y = hand1[1];
            console.log(predictions);
            if (y>200){
                if(x<100){
                    audio.src = "./instrument/lowdrum.mp3";

                }
                else if(x>400 && x<500){
                    audio.src = "./instrument/drum1.mp3";

                }
                else if (x>300 ){
                    audio.src = "./instrument/bass_drum.mp3";
                }
                else if (x>190 ){
                    audio.src = "./instrument/small_drum1.mp3";
                }
            }
            audio.play();
        }
        
    });
    
}
handTrack.load(modelParams).then(lmodel=>{
    model = lmodel;
});



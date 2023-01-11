
const modelParams={
    flipHorizontal:true,
    imageScaleFactor:0.7,
    maxNumBoxes:1,
    iouThreshold:0.5,
    scoreThreshold:0.6// confidence threshold for predictions.
 }
 
navigator.getUserMedia=
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia||
    navigator.mozGetUserMedia||
    navigator.msGetUserMedia;
 
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
let model;
 
handTrack.startVideo(video).then(status =>{
    if(status){
        navigator.getUserMedia({video:{}}
        ,stream =>{
            video.srcObject = stream;
            //run
            setInterval(runDetction,300);
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
                    audio.src = "./instrument/guitar.mp3";
                }
                else if(x>400 && x<500) {
                    audio.src = "./instrument/guitar2.mp3";
                }
                else if (x>300){
                    audio.src = "./instrument/guitar3.mp3";
                }
                else if (x>190 ){
                    audio.src = "./instrument/guitar4.mp3";
                }
            }
            
            audio.play();
         }
         
     });
     
 }
handTrack.load(modelParams).then(lmodel=>{
    model = lmodel;
});
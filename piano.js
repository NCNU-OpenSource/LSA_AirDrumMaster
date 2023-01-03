const modelParams={
    flipHorizontal:true,
    imageScaleFactor:0.7,
    maxNumBoxes:1,
    iouThreshold:0.5,
    scoreThreshold:0.79// confidence threshold for predictions.
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
             setInterval(runDetction,100);
         },
         err=> console.log(err)
         );
     }
 });
 
function runDetction(){
    model.detect(video).then(predictions=>{
        if(predictions.length !==0){
            let hand1 = predictions[0].bbox;
            let x = hand1[0];
            let y = hand1[1];
            console.log(predictions);
            if (y>300){
                if(x<200){
                    audio.src = "./instrument/pianoB.mp3";
                }
                else if(x>400) {
                     audio.src = "./instrument/pianoC.mp3";
                }
                else if (x>300){
                    audio.src = "./instrument/pianoC2.mp3";
                }
                else if (x>200 ){
                    audio.src = "./instrument/pianoF.mp3";
                }
            }
            
            audio.play();
        }
         
    });
     
}
handTrack.load(modelParams).then(lmodel=>{
    model = lmodel;
});
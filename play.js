
const bgm = document.querySelector('#bgm');
const bgm_audio = document.querySelector('#bgm_audio');
function select_change(){
    const select_bgm = document.getElementById('select_bgm').value;
    if (select_bgm!='不播放'){
        bgm.src = './upload/'+select_bgm;
        console.log(select_bgm);
        bgm_audio.load();
    }

}
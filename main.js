let sound = new Audio('cancion.mp3');
let flg = false 
BtnPlay.addEventListener('click',()=>{
    flg = !flg
    if(flg){
        sound.play();
    }
    else{
        sound.pause();
    }
s
});



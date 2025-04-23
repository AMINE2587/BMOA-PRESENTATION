let btnPlay = document.getElementById('btn');
let btnPause = document.getElementById('btnPause');



function musicPlay(){
    let music = document.getElementById('aud');
    
    music.play();
};
function musicPause(){
    let music = document.getElementById('aud');
    music.pause();
};

btnPlay.onclick = function(){
    musicPlay();
    this.style.display = 'none';
    btnPause.style.display = 'block';
};
btnPause.onclick = function(){
    this.style.display = 'none';
    btnPlay.style.display = 'block';
    musicPause();
};



window.onscroll = function(){
    if(scrollY > 100){
        btnPause.style.display = 'none';
        btnPlay.style.display = 'none';
        
    }else{
        btnPause.style.display = 'none';
        btnPlay.style.display = 'block';
    }
}






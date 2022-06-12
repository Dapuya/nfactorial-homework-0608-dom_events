
const background = document.getElementById("video-background")
const container = document.getElementById("container")
let playVideoBtn = document.getElementById("btn-change-background")
const playPauseTrackBtn = document.getElementById("playpause-track")
const audio = document.getElementById("audio")
const progressBar = document.getElementById("progressBar")


function playVideo(){
    if(background.paused){
        background.play();
        playVideoBtn.style.backgroundColor = 'black'
        playVideoBtn.innerHTML = '<i class="fa fa-video " style="color:white; padding:2px; opacity: 70%"></i>'

    }else{
        background.pause()
        playVideoBtn.style.backgroundColor = 'transparent'
        playVideoBtn.innerHTML = '<i class="fa fa-video " style="color:white; padding:2px;"></i>'
    }
}

function playPauseTrack(){
    if(audio.paused){
        audio.play();
        playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    }else{
        audio.pause();
        playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

    }
}


function progressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);
    durationTime.textContent = formatTime(audio.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function changeProgressBar() {
    audio.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);

document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');

const controlsContainer = document.querySelector('.controls-container');
const leftSideControls = document.querySelector('.left-side-controls');

const volumeControl = document.querySelector('.volume-control');
const volumePanel = document.querySelector('.volume-panel');
const volumeRange = volumePanel.querySelector('input');
const volumeProgress = volumePanel.querySelector('.volume-progress');

const playPauseButton = document.querySelector('.play-pause-btn');
const volumeButton = document.querySelector('.volume-btn');
const fullScreenButton = document.querySelector('.full-screen-btn');
const playButton = playPauseButton.querySelector('.play');
const pauseButton = playPauseButton.querySelector('.pause');
const fullVolumeButton = volumeButton.querySelector('.full-volume');
const halfVolumeButton = volumeButton.querySelector('.half-volume');
const mutedButton = volumeButton.querySelector('.muted');
const maximizeButton = fullScreenButton.querySelector('.maximize');
const minimizeButton = fullScreenButton.querySelector('.minimize');

const progressBar = document.querySelector('.progress-bar');
const watchedBar = document.querySelector('.watched-bar');
const playHead = document.querySelector('.playhead');

pauseButton.style.display = 'none';
halfVolumeButton.style.display = 'none';
mutedButton.style.display = 'none';
minimizeButton.style.display = 'none';

window.onresize = function () {
    var width = window.innerWidth - 30;
    controlsContainer.style.width = width + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    var width = window.innerWidth - 30;
    controlsContainer.style.width = width + 'px';
});

const playPause = () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
        pauseButton.style.display = '';
    } else {
        video.pause();
        playButton.style.display = '';
        pauseButton.style.display = 'none';
    }
};

const toggleMute = () => {
    video.muted = !video.muted;
    if (video.muted) {
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = '';
        volumeRange.value = '0';
    } else {
        volumeRange.value = video.volume * 100;

        if (video.volume <= 0.5) {
            fullVolumeButton.style.display = 'none';
            halfVolumeButton.style.display = '';
            mutedButton.style.display = 'none';
        } else if (video.volume > 0.5) {
            fullVolumeButton.style.display = '';
            halfVolumeButton.style.display = 'none';
            mutedButton.style.display = 'none';
        }      
    }
};

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('fullscreenchange', function () {
    if (!document.fullscreenElement) {
        maximizeButton.style.display = '';
        minimizeButton.style.display = 'none';
    } else {
        maximizeButton.style.display = 'none';
        minimizeButton.style.display = '';
    }
});

video.addEventListener('timeupdate', function() {
    var watched = 100 / video.duration * video.currentTime;
    watchedBar.style.width = watched + '%';
    playHead.style.left = watched + '%';

    if(video.ended) {
        playButton.style.display = '';
        pauseButton.style.display = 'none';
    }
});

progressBar.addEventListener('mousedown', function(event) {
    const pos = (event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) / progressBar.offsetWidth;
    video.currentTime = pos * video.duration;
}); 


video.addEventListener('click', playPause);

video.addEventListener('dblclick', toggleFullScreen);

playPauseButton.addEventListener('click', playPause);

volumeButton.addEventListener('click', toggleMute);

fullScreenButton.addEventListener('click', toggleFullScreen);

volumeRange.addEventListener('input', function(e) {
    volumeProgress.style.width = volumeRange.value + '%';

    video.volume = volumeRange.value / 100;

    if (volumeRange.value <= 0) {
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = '';
    } else if (volumeRange.value <= 50) {
        video.muted = false;
        fullVolumeButton.style.display = 'none';
        halfVolumeButton.style.display = '';
        mutedButton.style.display = 'none';
    } else if (volumeRange.value > 50) {
        video.muted = false;
        fullVolumeButton.style.display = '';
        halfVolumeButton.style.display = 'none';
        mutedButton.style.display = 'none';
    }
}, false);

volumeButton.addEventListener('mouseenter', function() {
    volumeControl.style.margin = '0px 2px 0px 0px';
    volumePanel.style.width = '52px';
});

leftSideControls.addEventListener('mouseleave', function() {
    volumeControl.style.margin = '0px 0px 0px 0px';
    volumePanel.style.width = '0px';
});

setInterval(function() {
    volumeProgress.style.width = volumeRange.value + '%';
}, 1);
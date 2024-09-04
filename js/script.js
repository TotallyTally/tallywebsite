let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

function ToggleFunction() {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const checkpoint1 = 300
const checkpoint2 = 800

window.addEventListener("scroll", () => {
    if (window.scrollY - checkpoint1 <= checkpoint1) {
        document.querySelector(".secondary-section h1").style.opacity = (window.scrollY - checkpoint1) / checkpoint1;
        document.querySelector(".secondary-section p").style.opacity = (window.scrollY - checkpoint1) / checkpoint1;
    } else {
        document.querySelector(".secondary-section h1").style.opacity = 1;
        document.querySelector(".secondary-section p").style.opacity = 1;
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY - checkpoint2 <= checkpoint2) {
        document.querySelector(".third-section h1").style.opacity = (window.scrollY - checkpoint2) / (checkpoint2 / 2);
        document.querySelector(".video-section").style.opacity = (window.scrollY - checkpoint2) / (checkpoint2 / 2);
    } else {
        document.querySelector(".third-section h1").style.opacity = 1;
        document.querySelector(".video-section").style.opacity = 1;
    }
  });

let vid = document.getElementById("vidplayer");
let x = 1

var playButton = document.getElementById("play-button");

function changeVidRight() { 
    if (x < 8) {
        x += 1;
    } else {
        x = 1;
    }
    vid.src = "./videos/" + x + ".mp4";
    playButton.classList = "bx bx-play";
    vid.load();
}

function changeVidLeft() { 
    if (x > 1) {
        x -= 1;
    } else {
        x = 8;
    }
    vid.src = "./videos/" + x + ".mp4";
    playButton.classList = "bx bx-play";
    vid.load();
}

playButton.addEventListener("click", function() {
  if (vidplayer.paused == true) {
    vidplayer.play();

    playButton.classList = "bx bx-pause";
  } else {
    vidplayer.pause();

    playButton.classList = "bx bx-play";
  }
});

document.getElementById("vidplayer").addEventListener("ended", function() {
    playButton.classList = "bx bx-play";
});




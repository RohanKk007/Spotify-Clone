//return to index0(Home page) on home button click
let arrow_btn = document.querySelector(".arrow_btn1");
let homeButton = document.querySelector("#HomeButton");
homeButton.addEventListener("click", redirect);
arrow_btn.addEventListener("click", redirect);

function redirect() {
        window. location = "index.html";
}




const songs = [
        {
                id: 0,
                name: "Suna Kaanchi",
                poster: "svgs/sunaKaanchicover.jpeg",
                audio: "Songs/Suna Kanchhi.mp3",
                duration: "4:47"
        },
        {
                id: 1,
                name: "Sasto Mutu",
                poster: "svgs/sastoMutuCover.jpeg",
                audio: "Songs/Sasto Mutu.mp3",
                duration: "5:02"
        },
        {
                id: 2,
                name: "Chhithi Bhitra",
                poster: "svgs/chittiVitraCover.jpg",
                audio: "Songs/Chhithi bhitra.mp3",
                duration: "5:03"
        },
        {
                id: 3,
                name: "Naganya Maya",
                poster: "svgs/naganyaMayaCover.jpeg",
                audio: "Songs/Naganya maya.mp3",
                duration: "5:02"
        }
];




Array.from(document.getElementsByClassName('song')).forEach((e, i) => {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
});

let masterplayImg = document.getElementById('song-img');
let masterplayName = document.getElementById('song-name');
let index = 0;
let music = new Audio('Songs/Suna Kanchhi.mp3');
Array.from(document.getElementsByClassName('songName')).forEach((e) => {
        e.addEventListener('click', (el, index) => {
                index = el.target.id;
                masterplayImg.src = songs[index].poster;
                masterplayName.innerHTML = songs[index].name;
                document.querySelector('#masterPlay').style.display = "flex";
                music.src = `${songs[index].audio}`;
                music.play();

        })
})



let PlayButton = document.getElementById('play-Button');
PlayButton.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
                music.play();
                PlayButton.src = 'svgs/pause.svg';
        } else {
                music.pause();
                PlayButton.src = 'svgs/play.svg';
        }
});

let currentStart = document.getElementById('CurrentStart');
let currentEnd = document.getElementById('CurrentEnd');
let seek = document.getElementById('seekbar');
music.addEventListener('timeupdate', () => {
        let musicCurr = music.currentTime;
        let musicDur = music.duration;

       
        let minDur = Math.floor(musicDur / 60);
        let secDur = Math.floor(musicDur % 60);
        if (secDur < 10) {
                secDur = `0${secDur}`
        }
        currentEnd.innerText = `${minDur}:${secDur}`;


        let minCur = Math.floor(musicCurr / 60);
        let secCur = Math.floor(musicCurr % 60);
        if (secCur < 10) {
                secCur = `0${secCur}`
        }
        currentStart.innerText = `${minCur}:${secCur}`;

        let masterProgress = parseInt((musicCurr / musicDur) * 100);
        seek.value = masterProgress;

        seek.addEventListener('change', () => {
                music.currentTime = seek.value * music.duration / 100; 
        })
})


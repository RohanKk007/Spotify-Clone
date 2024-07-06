//return to index0(Home page) on home button click
let arrow_btn = document.querySelector(".arrow_btn1");
let homeButton = document.querySelector("#HomeButton");
homeButton.addEventListener("click", redirect);
arrow_btn.addEventListener("click", redirect);

function redirect() {
        window. location = "index.html";
}


//banner appear on song click.
// let element = document.getElementsByClassName('song');
// for(var i=0; i<element.length; i++){
//         element[i].addEventListener('click', () => {
//                 document.querySelector(".songBanner").style.display = "flex";
//         })
// }


const songs = [
        {
                id: 0,
                name: "Suna Kaanchi",
                poster: "svgs/sunaKaanchicover.jpeg",
                audio: "Songs/Suna Kanchhi.mp3",
                duration: "4:47"
        },
        {
                id: 2,
                name: "Sasto Mutu",
                poster: "svgs/sastoMutuCover.jpeg",
                audio: "Songs/Sasto Mutu.mp3",
                duration: "5:02"
        },
        {
                id: 3,
                name: "Chhithi Bhitra",
                poster: "svgs/chittiVitraCover.jpg",
                audio: "Songs/Chhithi bhitra.mp3",
                duration: "5:03"
        },
        {
                id: 4,
                name: "Naganya Maya",
                poster: "svgs/naganyaMayaCover.jpeg",
                audio: "Songs/Naganya maya.mp3",
                duration: "5:02"
        }
];




Array.from(document.getElementsByClassName('song')).forEach((e, i) => {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
});


const music = new Audio('Songs/Chhithi bhitra.mp3');
// music.play();

//music play/pause onclick
let PlayButton = document.getElementById('play-Button');
PlayButton.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
                music.play();
                PlayButton.src = 'svgs/pause.svg';
        } else {
                music.pause();
                PlayButton.src = 'svgs/play.svg';
        }
})

//select songs to play
let index = 0;
Array.from(document.getElementsByClassName('song')).forEach((e) => {
        e.addEventListener('click', (el) => {
                index = el.target.id;
                console.log(index);
        })
})
//return to index0(Home page) on home button click
let arrow_btn = document.querySelector(".arrow_btn1");
let homeButton = document.querySelector("#HomeButton");
homeButton.addEventListener("click", redirect);
arrow_btn.addEventListener("click", redirect);

function redirect() {
        window. location = "index.html";
}


//banner appear on song click.
let element = document.getElementsByClassName('song');
for(var i=0; i<element.length; i++){
        element[i].addEventListener('click', () => {
                document.querySelector(".songBanner").style.display = "flex";
        })
}


const songs = [
        {
                id: 0,
                name: "Suna Kaanchi",
                image: "svgs\sunaKaanchicover.jpeg",
                audio: "Songs\Suna Kanchhi.mp3",
                duration: "4:47"
        },
        {
                id: 1,
                name: "Sasto Mutu",
                image: "svgs\sastoMutuCover.jpeg",
                audio: "Songs\Sasto Mutu.mp3",
                duration: "4:47"
        }
];

let 
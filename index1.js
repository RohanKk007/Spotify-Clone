//return to index0(Home page) on home button click
let arrow_btn = document.querySelector(".arrow_btn1");
let homeButton = document.querySelector("#HomeButton");
homeButton.addEventListener("click", redirect);
arrow_btn.addEventListener("click", redirect);

function redirect() {
        window. location = "index.html";
}


//banner appear on song click
let element = document.getElementsByClassName('song');
for(var i=0; i<element.length; i++){
        element[i].addEventListener('click', () => {
                document.querySelector(".songBanner").style.display = "flex";
        })
}
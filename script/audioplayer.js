let souraList = document.getElementById("listOfSoura");
let buttons = document.getElementById("buttons");
let selectedMode = "playMode";
let souraRunningNow = 1;
let audio = document.getElementById("audio");

function disActiveAll (){
    let button = document.getElementsByClassName("button");
    for(let i = 0; i < button.length; i++){
        button[i].classList.remove("active");
    }
}

function runAudio (){
    audio.run()
}

audio.addEventListener("ended", function(){
    if(selectedMode === 1){
        audio.removeAttribute("loop");
        souraRunningNow = (souraRunningNow + 1) % souraList.childElementCount
        audio.src =  `./audio/${souraRunningNow}.mp3`
    }else if(selectedMode === 3){
        audio.loop = false;
        let randomAudio = Math.ceil(Math.random() * souraList.childElementCount);
        console.log(randomAudio);
        audio.src = `./audio/${randomAudio}.mp3`;

    }
});

buttons.addEventListener("click", function(e) {
    if (e.target.id == "repeatMode") {
        console.log("repeatMode mode are work");
        disActiveAll ();
        selectedMode = 2;
        audio.loop = true;
        e.target.parentNode.classList.toggle("active");
    }else if (e.target.id == "playMode"){
        console.log("playMode mode are work");
        audio.removeAttribute("loop");
        disActiveAll ();
        selectedMode = 1;
        e.target.parentNode.classList.toggle("active");
    }else if (e.target.id == "shuffleMode") {
        console.log("shuffleMode mode are work");
        audio.removeAttribute("loop");
        disActiveAll ();
        selectedMode = 3;
        e.target.parentNode.classList.toggle("active");
    }
})



souraList.addEventListener("click", function(e) {
    souraRunningNow = e.target.parentNode.id
    audio.src = `./audio/${souraRunningNow}.mp3`;
})
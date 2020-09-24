let scoResult = document.querySelector("#scoResult");
let hitResult = document.querySelector("#hitResult");
let missResult = document.querySelector("#missResult");

let lv1hits = document.querySelector("#lv1hits");
let lv1miss = document.querySelector("#lv1miss");
let lv2hits = document.querySelector("#lv2hits");
let lv2miss = document.querySelector("#lv2miss");
let lv3hits = document.querySelector("#lv3hits");
let lv3miss = document.querySelector("#lv3miss");

const ageResult = JSON.parse(localStorage.getItem("ageLocal"));
const localscore = JSON.parse(localStorage.getItem("score"));
const localhit = JSON.parse(localStorage.getItem("hit"));
const localmiss = JSON.parse(localStorage.getItem("miss"));

const level1hit = JSON.parse(localStorage.getItem("Lv1hit"));
const level1miss = JSON.parse(localStorage.getItem("Lv1miss"));
const level2hit = JSON.parse(localStorage.getItem("Lv2hit"));
const level2miss = JSON.parse(localStorage.getItem("Lv2miss"));
const level3hit = JSON.parse(localStorage.getItem("Lv3hit"));
const level3miss = JSON.parse(localStorage.getItem("Lv3miss"));

//audio
var audio = document.querySelector("#audio");
 audio.currentTime = JSON.parse(localStorage.getItem("Music"));
 audio.play();

document.querySelector("#name").innerHTML += localStorage.getItem("nameLocal");
document.querySelector("#age").innerHTML += JSON.parse(localStorage.getItem("ageLocal"));
scoResult.innerHTML += localscore;
hitResult.innerHTML += localhit;
missResult.innerHTML += localmiss;

lv1hits.innerHTML += level1hit;
lv1miss.innerHTML += level1miss;
lv2hits.innerHTML += level2hit;
lv2miss.innerHTML += level2miss;
lv3hits.innerHTML += level3hit;
lv3miss.innerHTML += level3miss;

let btn = document.querySelector("#btn");
let start = () => {
    window.location.href = '/HTML/Start.html';  
}
btn.addEventListener("click", start);
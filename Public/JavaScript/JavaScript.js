//restart button
let restartbtn = document.querySelector("#restartbtn");

localStorage.removeItem("score");
localStorage.removeItem("hit");
localStorage.removeItem("miss");

let numscore = 0;
let hit1 = 0;
let mis = 0;
let lv1count_hit = 0;
let lv1countmiss = 0;
let lv2count_hit = 0;
let lv2countmiss = 0;
let lv3count_hit = 0;
let lv3countmiss = 0;
let timer = 0;

function play() {
    var audio = document.querySelector("#audio");
    audio.play();
}
let sName = 0;
let sAge = 0;


//restart the game
let restart = () => {
    
    sName = localStorage.getItem("saveName");
    sAge = JSON.parse(localStorage.getItem("saveAge"));

    let sScore = JSON.parse(localStorage.getItem("saveScore"));
    let sHit = JSON.parse(localStorage.getItem("saveHit"));
    let sMiss = JSON.parse(localStorage.getItem("saveMiss"));

    let slv1Hit = JSON.parse(localStorage.getItem("saveLv1hit"));
    let slv1Miss = JSON.parse(localStorage.getItem("saveLv1miss"));
    let slv2Hit = JSON.parse(localStorage.getItem("saveLv2hit"));
    let slv2Miss = JSON.parse(localStorage.getItem("saveLv2miss"));
    let slv3Hit = JSON.parse(localStorage.getItem("saveLv3hit"));
    let slv3Miss = JSON.parse(localStorage.getItem("saveLv3miss"));

    let sTime = JSON.parse(localStorage.getItem("saveTime"));

    tempname = sName;
    tempage = sAge;
    numscore = sScore;
    hit1 = sHit;
    mis = sMiss;
    lv1count_hit = slv1Hit;
    lv1countmiss = slv1Miss;
    lv2count_hit = slv2Hit;
    lv2countmiss = slv2Miss;
    lv3count_hit = slv3Hit;
    lv3countmiss = slv3Miss;
    timel = sTime;

    localStorage.setItem("nameLocal", tempname);
    localStorage.setItem("ageLocal", tempage);
    localStorage.setItem("score", numscore);
    localStorage.setItem("hit", hit1);
    localStorage.setItem("miss", mis);

    localStorage.setItem("Lv1hit", lv1count_hit);
    localStorage.setItem("Lv1miss", lv1countmiss);
    localStorage.setItem("Lv2hit", lv2count_hit);
    localStorage.setItem("Lv2miss", lv2countmiss);
    localStorage.setItem("Lv3hit", lv3count_hit);
    localStorage.setItem("Lv3miss", lv3countmiss);

    let lvStage = JSON.parse(localStorage.getItem("levelStage"));

    if (lvStage === 1) {
        localStorage.setItem("localTime", timel);
        window.location.href = '../HTML/Level1.html';
    }
    else if (lvStage === 2) {
        localStorage.setItem("localTime2", timel);
        window.location.href = '../HTML/Level2.html';
    }
    else {
        localStorage.setItem("localTime3", timel);
        window.location.href = '../HTML/Level3.html';
    }
}
restartbtn.addEventListener("click", restart);
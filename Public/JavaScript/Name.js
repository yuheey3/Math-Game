let btn = document.querySelector("#btn");

const userName = JSON.stringify(localStorage.getItem("saveName"));

localStorage.removeItem("nameLocal");
localStorage.removeItem("ageLocal");
localStorage.removeItem("score");
localStorage.removeItem("hit");
localStorage.removeItem("miss");
localStorage.removeItem("localTime");
localStorage.removeItem("localTime2");
localStorage.removeItem("localTime3");

localStorage.setItem("localTime", 30);
localStorage.setItem("localTime2", 30);
localStorage.setItem("localTime3", 30);

let numscore = 0;
let hit1 = 0;
let mis = 0;
let lv1count_hit = 0;
let lv1countmiss = 0;
let lv2count_hit = 0;
let lv2countmiss = 0;
let lv3count_hit = 0;
let lv3countmiss = 0;

//audio
var audio = document.querySelector("#audio");
 audio.currentTime = JSON.parse(localStorage.getItem("Music"));
 audio.play();

//start the game
let start = () => {
   
    let check = 0;
    var nameValue = document.querySelector("#name").value;
    let ageValue = document.querySelector("#age").value;

    localStorage.setItem("nameLocal", nameValue);

    localStorage.setItem("score", numscore);
    localStorage.setItem("hit", hit1);
    localStorage.setItem("miss", mis);
    localStorage.setItem("Lv1hit", lv1count_hit);
    localStorage.setItem("Lv1miss", lv1countmiss);
    localStorage.setItem("Lv2hit", lv2count_hit);
    localStorage.setItem("Lv2miss", lv2countmiss);
    localStorage.setItem("Lv3hit", lv3count_hit);
    localStorage.setItem("Lv3miss", lv3countmiss);

    //validation
    for (let i = 1; i < 100; i++) {
        if (ageValue == i) {
            check = 1;
            break;
        }
    }
    if (nameValue != "") {
        localStorage.setItem("nameLocal", nameValue);

        if (check == 1) {
            localStorage.setItem("ageLocal", ageValue);
            var musicTime = audio.currentTime;
            localStorage.setItem("Music", musicTime);
            window.location.href = '../HTML/Level1.html';
        }
        else
            alert(`Please Enter the age`);
    }
    else
        alert(`Please Enter the name`);
}
btn.addEventListener("click", start);

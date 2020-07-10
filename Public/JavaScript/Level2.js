const div = document.querySelector("#container");
const donut1 = document.querySelector("#donut1");
const donut2 = document.querySelector("#donut2");
const donut3 = document.querySelector("#donut3");
const donut4 = document.querySelector("#donut4");
const donut5 = document.querySelector("#donut5");
const donut6 = document.querySelector("#donut6");
const donut7 = document.querySelector("#donut7");
const donut8 = document.querySelector("#donut8");
const donut9 = document.querySelector("#donut9");

let interval;
const score1 = document.querySelector("#score1");
const hit = document.querySelector("#hit");
const miss = document.querySelector("#miss");
const time = document.querySelector("#time");

const savebtn = document.querySelector("#savebtn");

const localscore = JSON.parse(localStorage.getItem("score"));
const localhit = JSON.parse(localStorage.getItem("hit"));
const localmiss = JSON.parse(localStorage.getItem("miss"));
const llv2hit = JSON.parse(localStorage.getItem("Lv2hit"));
const llv2miss = JSON.parse(localStorage.getItem("Lv2miss"));

const ltime = JSON.parse(localStorage.getItem("localTime2"));

time.innerHTML = ltime;
let timer = ltime;
score1.innerHTML = localscore;
hit.innerHTML = localhit;
miss.innerHTML = localmiss;

let numscore = 0;
let hit1 = 0;
let mis = 0;
let lv2count_hit = 0;
let lv2countmiss = 0;

numscore = localscore;
hit1 = localhit;
mis = localmiss;
lv2count_hit = llv2hit;
lv2countmiss = llv2miss;
let lName = 0;
let lAge = 0;

//audio
var audio = document.querySelector("#audio");
audio.currentTime = JSON.parse(localStorage.getItem("Music"));
audio.play();


//save the data
let saveinfo = () => {
    alert(`Your data is saved`);

    lName = localStorage.getItem("nameLocal");
    lAge = JSON.parse(localStorage.getItem("ageLocal"));

    let timeCk = 1;

    localStorage.setItem("saveName", lName);
    localStorage.setItem("saveAge", lAge);
    localStorage.setItem("saveScore", numscore);
    localStorage.setItem("saveHit", hit1);
    localStorage.setItem("saveMiss", mis);
    localStorage.setItem("saveLv1hit", lv2count_hit);
    localStorage.setItem("saveLv1miss", lv2countmiss);
    localStorage.setItem("levelStage", 2);
    localStorage.setItem("saveTime", timer);

    var audio = document.querySelector("#audio");
    var musicTime = audio.currentTime;
    localStorage.setItem("Music", musicTime);

    window.location.href = '../HTML/HtmlPage.html';
}
savebtn.addEventListener("click", saveinfo);

//display
let display = () => {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;

    if (num1 < num2) {
        var temp = num2;
        num2 = num1;
        num1 = temp;
    }
    const number1 = document.querySelector("#number1");
    number1.innerHTML = `${num1}`;

    const number2 = document.querySelector("#number2");
    number2.innerHTML = `${num2}`;

    let donutAns1 = Math.floor(Math.random() * 30);
    const answer1 = document.querySelector("#answer1");
    answer1.innerHTML = `${donutAns1}`;

    let donutAns2 = Math.floor(Math.random() * 30) + 1;
    const answer2 = document.querySelector("#answer2");
    answer2.innerHTML = `${donutAns2}`;

    let donutAns3 = Math.floor(Math.random() * 30) + 1;
    const answer3 = document.querySelector("#answer3");
    answer3.innerHTML = `${donutAns3}`;

    let donutAns4 = Math.floor(Math.random() * 30) + 1;
    const answer4 = document.querySelector("#answer4");
    answer4.innerHTML = `${donutAns4}`;

    let donutAns5 = Math.floor(Math.random() * 30) + 1;
    const answer5 = document.querySelector("#answer5");
    answer5.innerHTML = `${donutAns5}`;

    let real = num1 - num2;
    const realAnswer = document.querySelector("#realAnswer");
    realAnswer.innerHTML = `${real}`;

    let donutAns7 = Math.floor(Math.random() * 30) + 1;
    const answer7 = document.querySelector("#answer7");
    answer7.innerHTML = `${donutAns7}`;

    let donutAns8 = Math.floor(Math.random() * 30) + 1;
    const answer8 = document.querySelector("#answer8");
    answer8.innerHTML = `${donutAns8}`;

    let donutAns9 = Math.floor(Math.random() * 30) + 1;
    const answer9 = document.querySelector("#answer9");
    answer9.innerHTML = `${donutAns9}`;

    moveElement();
}
//move the donouts
const moveElement = () => {
    const newHeight1 = Math.random() * (div.offsetHeight - 200);
    const newWidth1 = Math.random() * (div.offsetWidth - 100);
    const newHeight2 = Math.random() * (div.offsetHeight - 500);
    const newWidth2 = Math.random() * (div.offsetWidth - 750);
    const newHeight3 = Math.random() * (div.offsetHeight - 500);
    const newWidth3 = Math.random() * (div.offsetWidth - 750);
    const newHeight4 = Math.random() * (div.offsetHeight - 500);
    const newWidth4 = Math.random() * (div.offsetWidth - 750);
    const newHeight5 = Math.random() * (div.offsetHeight - 450);
    const newWidth5 = Math.random() * (div.offsetWidth - 750);
    const newHeight6 = Math.random() * (div.offsetHeight - 450);
    const newWidth6 = Math.random() * (div.offsetWidth - 750);
    const newHeight7 = Math.random() * (div.offsetHeight - 500);
    const newWidth7 = Math.random() * (div.offsetWidth - 750);
    const newHeight8 = Math.random() * (div.offsetHeight - 500);
    const newWidth8 = Math.random() * (div.offsetWidth - 750);
    const newHeight9 = Math.random() * (div.offsetHeight - 500);
    const newWidth9 = Math.random() * (div.offsetWidth - 750);

    donut1.style.top = `${newHeight1}px`;
    donut1.style.left = `${newWidth1}px`;
    donut2.style.top = `${newHeight2}px`;
    donut2.style.left = `${newWidth2}px`;
    donut3.style.top = `${newHeight3}px`;
    donut3.style.left = `${newWidth3}px`;
    donut4.style.top = `${newHeight4}px`;
    donut4.style.left = `${newWidth4}px`;
    donut5.style.top = `${newHeight5}px`;
    donut5.style.left = `${newWidth5}px`;
    donut6.style.top = `${newHeight6}px`;
    donut6.style.left = `${newWidth6}px`;
    donut7.style.left = `${newWidth7}px`;
    donut7.style.top = `${newHeight7}px`;
    donut8.style.left = `${newWidth8}px`;
    donut8.style.left = `${newWidth8}px`;
    donut9.style.top = `${newHeight9}px`;
    donut9.style.left = `${newWidth9}px`;
}

let mouseMove = (event) => {
    document.querySelector("#mouse").style.left = `${event.clientX}px`;
    document.querySelector("#mouse").style.top = `${event.clientY}px`;
}
//when hit the correct donut
function success() {
    numscore += 5;
    hit1 += 1;
    lv2count_hit += 1;
    hit.innerHTML = `${hit1}`;
    score1.innerHTML = `${numscore}`;

    display();
}
//when hit the wrong donut
function wrong() {
    if (numscore > 0) {
        numscore -= 5;
    }
    mis += 1;
    lv2countmiss += 1;
    score1.innerHTML = `${numscore}`;
    miss.innerHTML = `${mis}`;
    if (mis === 6) {
        localStorage.setItem("score", numscore);
        localStorage.setItem("hit", hit1);
        localStorage.setItem("miss", mis);
        localStorage.setItem("Lv2hit", lv2count_hit);
        localStorage.setItem("Lv2miss", lv2countmiss);
        localStorage.setItem("localTime2", 30);

        var musicTime = audio.currentTime;
        localStorage.setItem("Music", musicTime);
        alert(`Game over`);
        window.location.href = '../HTML/score.html';
    }
    else
        display();
}
//timer
const timecheck = () => {
    timer--;
    time.innerHTML = timer;
    if (timer <= 0) {

        localStorage.setItem("score", numscore);
        localStorage.setItem("hit", hit1);
        localStorage.setItem("miss", mis);
        localStorage.setItem("Lv2hit", lv2count_hit);
        localStorage.setItem("Lv2miss", lv2countmiss);
        localStorage.setItem("localTime2", 30);

        clearInterval(interval);
        var musicTime = audio.currentTime;
        localStorage.setItem("Music", musicTime);
        window.location.href = '../HTML/Level3.html';
    }
}
interval = setInterval(timecheck, 1000);

window.addEventListener("load", display);

setInterval(moveElement, 1000);


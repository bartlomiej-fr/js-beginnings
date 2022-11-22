// window.onload = function () {};

const btnStart = document.getElementById("button-start");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");

const displaySeconds = document.getElementById("seconds");
const displayTens = document.getElementById("tens");

let seconds = 0;
let tens = 0;
let secTimeout;
let tensTimeout;

let state = false;

const secondsChange = () => {
    seconds++;
    seconds < 10 ? (seconds = "0" + seconds) : seconds;
    displaySeconds.textContent = seconds;
};

const tensChange = () => {
    tens++;
    tens < 10 ? (tens = "0" + tens) : tens;
    if (tens === 60) {
        tens = 0;
    }
    displayTens.textContent = tens;
};

Start = () => {
    if (!state) {
        secTimeout = setInterval(secondsChange, 1000);
        tensTimeout = setInterval(tensChange, 10);
        state = !state;
    }
};

Stop = () => {
    if (state) {
        clearInterval(secTimeout);
        clearInterval(tensTimeout);
        state = !state;
    }
};

Reset = () => {
    clearInterval(secTimeout);
    clearInterval(tensTimeout);
    seconds = 0;
    tens = 0;
    displaySeconds.textContent = "00";
    displayTens.textContent = "00";
};

btnStart.addEventListener("click", Start);
btnStop.addEventListener("click", Stop);
btnReset.addEventListener("click", Reset);

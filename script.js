let timeDisplay = document.getElementById("time-display");
let pomo =  {"time": 25 * 60,
            "intervals": 3,
            "work": 25 * 60,
            "shortbreak": 5 * 60,
            "longbreak": 20 * 60};
let startButton = document.getElementById("start-button");

function runTimer() {
    if (pomo.time == 0) {
        clearInterval();
        interval--;
    }
    else {
        pomo.time--;
        timeDisplay.textContent = secondsToString();
    }
}

function secondsToString() {
    let hours = Math.floor(pomo.time / 3600);
    let minutes = Math.floor(pomo.time % 3600 / 60);
    let seconds = Math.floor(pomo.time % 3600 % 60);
    let hString = (hours >= 10) ? hours : "0" + hours;
    let mString = (minutes >= 10) ? minutes : "0" + minutes;
    let sString = (seconds >= 10) ? seconds : "0" + seconds;
    return hString + ":" + mString + ":" + sString;
}

function updatePomo() {
    if 
}

startButton.addEventListener('click', () => {
    pomo.time++;  // add 1 second so we can see the full length time when the button is pressed
    runTimer();  // manual call so it doesn't take a second to see the time
    setInterval(runTimer, 1000);
})




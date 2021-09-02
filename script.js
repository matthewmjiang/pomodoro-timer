let timeDisplay = document.getElementById("time-display");
let intervalsDisplay = document.getElementById("intervals-display");
let loop;
let pomo =  {"time": 25 * 60,
            "intervals": 3,
            "mode": "work",
            "numintervals": 3,
            "work": 25 * 60,
            "shortbreak": 5 * 60,
            "longbreak": 15 * 60};
let startButton = document.getElementById("start-button");

/* Timer logic */
function runTimer() {
    if (pomo.time == 0) {
        clearInterval(loop);
        updatePomo();
        console.log("timer stopped");
    }
    else {
        pomo.time--;
        timeDisplay.textContent = secondsToString();
    }
}

/* Convert time (stored in seconds) to HH:MM:SS */
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
    
    if (pomo.mode == "work") {  // just finished an interval
        pomo.intervals--;
        if (pomo.intervals == 0) {  // go to longbreak if we're done with our intervals
            pomo.mode = "longbreak";
            pomo.intervals = pomo.numintervals;  // reset intervals
        }
        else {  // otherwise go to shortbreak
            pomo.mode = "shortbreak";
        } 
        intervalsDisplay.textContent = pomo.intervals;  // update intervals display
    }

    else {  // otherwise go to work
        pomo.mode = "work";
    }
    pomo.time = pomo[pomo.mode];  // reset timer to appropriate time
}

function resetTime() {
    
}

startButton.addEventListener('click', () => {
    pomo.time++;  // add 1 second so we can see the full length time when the button is pressed
    intervalsDisplay.textContent = pomo.intervals;
    runTimer();  // manual call so it doesn't take a second to see the time
    loop = setInterval(runTimer, 1);
})




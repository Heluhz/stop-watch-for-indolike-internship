let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    } else {
        interval = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;
    const ms = milliseconds < 100 ? '0' + milliseconds / 10 : milliseconds / 10;

    display.textContent = `${m}:${s}:${ms}`;
}

function reset() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    isRunning = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
}

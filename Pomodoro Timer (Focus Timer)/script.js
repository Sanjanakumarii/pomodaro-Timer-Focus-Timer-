let workTime = 25;
let breakTime = 5;
let timer;
let isRunning = false;
let minutes = workTime;
let seconds = 0;

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const workBtn = document.getElementById("work");
const breakBtn = document.getElementById("break");

function updateDisplay() {
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("Time's up!");
        isRunning = false;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = workTime;
  seconds = 0;
  updateDisplay();
}

function setWork() {
  workTime = 25;
  minutes = workTime;
  seconds = 0;
  updateDisplay();
}

function setBreak() {
  breakTime = 5;
  minutes = breakTime;
  seconds = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
workBtn.addEventListener("click", setWork);
breakBtn.addEventListener("click", setBreak);

updateDisplay();

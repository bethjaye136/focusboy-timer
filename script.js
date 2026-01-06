const minutesInput = document.getElementById("minutes-input");
const secondsDisplay = document.getElementById("seconds-display");
const startBtn = document.getElementById("start-btn");
const wrapper = document.querySelector(".console-wrapper");

let timeLeft;
let timerId = null;
let isRunning = false;
let originalMinutes = 25; // Default time 25 minutes

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (!timeLeft || timeLeft <= 0) {
    originalMinutes = parseInt(minutesInput.value);
    timeLeft = originalMinutes * 60;
  }

  minutesInput.disabled = true;
  isRunning = true;
  startBtn.innerText = "PAUSE";

  timerId = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      timerFinished();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  isRunning = false;
  startBtn.innerText = "RESUME";
}

function resetTimer() {
  clearInterval(timerId);
  isRunning = false;
  timeLeft = 0;

  minutesInput.value = originalMinutes.toString().padStart(2, "0");
  secondsDisplay.innerText = "00";

  startBtn.innerText = "START";
  minutesInput.disabled = false; // Unlock so user can type a new time
}

function timerFinished() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
  startBtn.innerText = "DONE";
  minutesInput.disabled = false;
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  minutesInput.value = minutes.toString().padStart(2, "0");
  secondsDisplay.innerText = seconds.toString().padStart(2, "0");
}
let currentSkin = 1;
const totalSkins = 4; // 4 images to switch between

function changeTheme() {
  wrapper.classList.remove(`skin-${currentSkin}`);
  currentSkin++;
  if (currentSkin > totalSkins) {
    currentSkin = 1;
  }
  wrapper.classList.add(`skin-${currentSkin}`);
}

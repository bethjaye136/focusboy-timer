const minutesInput = document.getElementById('minutes-input');
const secondsDisplay = document.getElementById('seconds-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const themeBtn = document.getElementById('theme-btn');
const petImg = document.getElementById('pet-img');
const petSpeech = document.getElementById('pet-speech');

let timerId = null;
let endTime = null;
let timeLeft = 0;
let isRunning = false;
let currentSkin = 1;
const totalSkins = 4;

startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);
themeBtn.addEventListener('click', changeTheme);

function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (!timeLeft) {
    const minutes = parseInt(minutesInput.value) || 25;
    timeLeft = minutes * 60;
  }

  isRunning = true;
  minutesInput.disabled = true;
  startBtn.innerText = 'PAUSE';

  petImg.src = '/images/walk.gif';
  petSpeech.innerText = "Let's Go!";

  endTime = Date.now() + timeLeft * 1000;

  timerId = setInterval(() => {
    const secondsLeft = Math.ceil((endTime - Date.now()) / 1000);
    timeLeft = secondsLeft;

    if (timeLeft <= 0) {
      timerFinished();
    } else {
      updateDisplay();
    }
  }, 200);
}

function pauseTimer() {
  clearInterval(timerId);
  isRunning = false;
  startBtn.innerText = 'RESUME';

  petImg.src = '/images/idle.gif';
  petSpeech.innerText = 'Paused...';
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
  timeLeft = 0;

  minutesInput.value = '25';
  secondsDisplay.innerText = '00';
  minutesInput.disabled = false;
  startBtn.innerText = 'START';

  petImg.src = '/images/idle.gif';
  petSpeech.innerText = 'Ready?';
}

function timerFinished() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
  timeLeft = 0;

  minutesInput.value = '00';
  secondsDisplay.innerText = '00';
  minutesInput.disabled = false;
  startBtn.innerText = 'DONE';

  petImg.src = '/images/roll.gif';
  petSpeech.innerText = 'Great Job!';
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  minutesInput.value = minutes.toString().padStart(2, '0');
  secondsDisplay.innerText = seconds.toString().padStart(2, '0');
}

function changeTheme() {
  document.body.classList.remove(`skin-${currentSkin}`);
  currentSkin = (currentSkin % totalSkins) + 1;
  document.body.classList.add(`skin-${currentSkin}`);
}

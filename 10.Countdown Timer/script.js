// Get DOM elements
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

let timeInSeconds = 0;
let timerInterval;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      timeInSeconds++;
      timerDisplay.textContent = formatTime(timeInSeconds);
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeInSeconds = 0;
  timerDisplay.textContent = formatTime(timeInSeconds);
}

// Attach event listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

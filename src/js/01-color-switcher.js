const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");
let timerId = null;

startBtn.addEventListener('click', onStartButtonClick);
stopBtn.addEventListener('click', onStopButtonClick);


function onStartButtonClick() {
    startBtn.setAttribute('disabled', 'true');
    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function onStopButtonClick() {
    startBtn.removeAttribute('disabled');
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
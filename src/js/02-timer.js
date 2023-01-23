import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerminutes = document.querySelector("[data-minutes]");
const timerseconds = document.querySelector("[data-seconds]");
let temeId = null;

startBtn.setAttribute('disabled', 'true');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < options.defaultDate) {
        Notify.failure("Please choose a date in the future", {
          width: '300px', 
          position: 'center-top',
          fontFamily: 'Roboto',
          fontSize: '20px',
          cssAnimationStyle:'from-top'
        });
        return;
                  
    } 
     startBtn.removeAttribute('disabled');
     inputEl.setAttribute('disabled', 'true');
     options.defaultDate = selectedDates[0];
    },
};

flatpickr(inputEl, options);

startBtn.addEventListener(`click`, setTimerOnBtnClick);

function setTimerOnBtnClick () {
  startBtn.setAttribute('disabled', 'true');
  
  timerId = setInterval(()=> {
    const delta = options.defaultDate - Date.now() ;
    if (delta < 1000) {
      clearInterval(timerId);
      }
    const time = convertMs(delta);
    updateMarkup(time);
  }, 1000);
};
  
  function updateMarkup ({days, hours, minutes, seconds}) {
    // daysEl.textContent = addLeadingZero(days);
    if (days.toString().length >= 2) {
      timerDays.textContent = days.toString();
    } else {
      timerDays.textContent = addLeadingZero(days);
    }
    
    timerHours.textContent = addLeadingZero(hours);
    timerminutes.textContent = addLeadingZero(minutes);
    timerseconds.textContent = addLeadingZero(seconds);
};



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return `${value}`.length === 2 ? `${value}` : `0${value}`;
};

import { intervalToDuration } from "./node_modules/date-fns/intervalToDuration.mjs";

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const daysToLaunch = 8;
const today = new Date();
const launchDay = new Date(today);
launchDay.setDate(today.getDate() + daysToLaunch);

//console.log(launchDay);

setInterval(() => {
  let now = new Date();
  let difference = intervalToDuration({
    start: now,
    end: launchDay,
  });

  if (difference.days) {
    days.textContent = difference.days;
    days.textContent = days.textContent.padStart(2, "0")
  } else {
    days.textContent = "00";
  }
  if (difference.hours) {
    hours.textContent = difference.hours
    hours.textContent = hours.textContent.padStart(2, "0")

  } else {
    hours.textContent = "00";
  }
  if (difference.minutes) {
    minutes.textContent = difference.minutes;
    minutes.textContent = minutes.textContent.padStart(2, "0")

    
  } else {
    minutes.textContent = "00";
  }
  if (difference.seconds) {
    seconds.textContent = difference.seconds;
    seconds.textContent = seconds.textContent.padStart(2, "0");

  } else {
    seconds.textContent = "00";
  }
}, 1000);

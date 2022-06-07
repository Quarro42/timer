document.addEventListener('DOMContentLoaded', () => {
  const someEvent = new Date('Jul 1 2022 00:00:00');

  const daysVal = document.querySelector('.time-count__days .time-count__val');
  const hoursVal = document.querySelector('.time-count__hours .time-count__val');
  const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
  const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

  const daysText = document.querySelector('.time-count__days .time-count__text');
  const hoursText = document.querySelector('.time-count__hours .time-count__text');
  const minutesText = document.querySelector('.time-count__minutes .time-count__text');
  const secondsText = document.querySelector('.time-count__seconds .time-count__text');

  function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
  }



  const timeCount = () => {
    let now = new Date();
    let leftUntil = someEvent - now;
    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days > 9 ? days : '0' + days;
    hoursVal.textContent = hours > 9 ? hours : '0' + hours;
    minutesVal.textContent = minutes > 9 ? minutes : '0' + minutes;
    secondsVal.innerText = seconds > 9 ? seconds : '0' + seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
  } 
  timeCount();
  setInterval(timeCount, 1000)
})

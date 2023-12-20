/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== DAY COUNTER FOR CHRISTMAS ===============*/

const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas');

const christmasCounter = () => {
    let now = new Date(),
        currentMonth = now.getMonth() + 1,
        currentDay = now.getDate();

    let nextChristmasYear = now.getFullYear();
    if (currentMonth === 12 && currentDay > 25) {
        nextChristmasYear += 1;
    }

    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`,
        christmasDay = new Date(nextChristmasDate),
        timeleft = christmasDay - now;

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;

    if (currentMonth !== 12 || (currentMonth === 12 && currentDay !== 25)) {
        days = Math.floor(timeleft / 1000 / 60 / 60 / 24);
        hours = Math.floor(timeleft / 1000 / 60 / 60) % 24;
        minutes = Math.floor(timeleft / 1000 / 60) % 60;
        seconds = Math.floor(timeleft / 1000) % 60;
    }

    numberData.innerHTML = days < 10 ? `0${days}` : days;
    textData.innerHTML = 'Days';

    if (currentDay === 24) {
        numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
        textData.innerHTML = 'Hours';
    }

    if (currentDay == 24 && hours == 0) {
        numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        textData.innerHTML = 'Minutes';
    }

    if (currentDay == 24 && hours === 0 && minutes === 0){
        numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        textData.innerHTML = 'Seconds';

    }

    if(currentMonth == 12 && currentDay == 25){
        titleData.style.display = 'none'
        msgChristmas.style.display = 'block'
        msgChristmas.innerHTML = 'Today is Dec 25, Merry Christmas'
    }

    if(currentMonth == 12 && currentDay == 26){
        titleData.style.display = 'block'
        msgChristmas.style.display = 'none'
    }


};

setInterval(christmasCounter, 1000);

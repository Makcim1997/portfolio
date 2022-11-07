import { i18Obj } from './translate.js';
import { navigation } from './burger.js';

const playBtn = document.querySelector('.btn-play');
const play = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const volumeControl = document.querySelector('.volume');
const itemsVideo = document.querySelector('.items-video');1

let video;
let display;
let progress;

video = document.querySelector('.video-player');
progress = document.querySelector('.progress');

video.addEventListener('timeupdate', progressUpdate);
progress.addEventListener('click', videoRewind);


playBtn.addEventListener('click', playVideo);
play.addEventListener('click', playVideo);
pauseBtn.addEventListener('click', pauseVideo);
stopBtn.addEventListener('click', stop);
volumeControl.addEventListener('input', volume);


function playVideo() {
  video.play();
  playBtn.classList.add('active-btn')
  itemsVideo.classList.remove('active-items')
};

function pauseVideo() {
  video.pause();
};

function stop() {
  video.pause();
  video.currentTime = 0;
  playBtn.classList.remove('active-btn')
};

function volume() {
  let v = this.value
  video.volume = v / 100;
};

function progressUpdate() {
  
  let d = video.duration;
  let c = video.currentTime;

  progress.value = (100 * c) / d
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = (100 * o) / w;
  video.currentTime = video.duration * (o / w)
}


// languege 

const switchLang = document.querySelector('.switch-lang');
const btnsLang = document.querySelectorAll('.lang');
const elemForTranslate = document.querySelectorAll('[data-i18]');
const btnLangRu = document.querySelector('.lang-ru');
const btnLangEn = document.querySelector('.lang-en');


switchLang.addEventListener('click', activeLangBtn);

function activeLangBtn(event) {
  if (event.target.classList.contains('lang')) {
    btnsLang.forEach(elem => elem.classList.remove('active-lang'))
  }

  if (event.target.classList.contains('lang-ru')) {
    setTransleteRu()
  
  } else if ( event.target.classList.contains('lang-en')) {
    setTransleteEn()
  }
  
  if (event.target.classList.contains('lang')) {
    event.target.classList.add('active-lang')
  }
}

function setTransleteRu() {
  elemForTranslate.forEach(item => item.textContent = i18Obj.ru[item.dataset.i18])
}

function setTransleteEn() {
  elemForTranslate.forEach(item => item.textContent = i18Obj.en[item.dataset.i18])
}

// languege 

// ToggleSeasons

const listSeasons = document.querySelector('.list-seasons');
const seasonsBtns = document.querySelectorAll('.season');
const portfolioImages = document.querySelectorAll('.photo');

listSeasons.addEventListener('click', activeBtnSeason);

function activeBtnSeason(event) {
  seasonsBtns.forEach(elem => elem.classList.remove('season_active'));
  if (event.target.classList.contains('season')) {
    event.target.classList.add('season_active');
    let nameBtn = [...seasonsBtns].findIndex((elem) => elem.classList.contains('season_active'));
    portfolioImages.forEach((img, index) => img.src = `./assets/images/seasons/${nameBtn}/${index + 1}.jpg`);
  }
}

// ToggleSeasons

// ToggleTheme

const elemSvg = document.querySelectorAll('.topic');
const topics = document.querySelector('.topics');
const sunSvg = document.querySelector('.sun-svg');
const lunaSvg = document.querySelector('.luna-svg');
const changeTopic = document.querySelectorAll('.change-topic');
const links = document.querySelectorAll('.link');
const lines = document.querySelectorAll('.line');
const themeBtns = document.querySelectorAll('.theme-btn');
const mainContainer = document.querySelector('.main-container');
const body = document.querySelector('body');


topics.addEventListener('mouseover', addHover);
topics.addEventListener('mouseout', removeHover);
topics.addEventListener('click', toggleTopic);


function toggleTopic(event) {
  if (event.target.classList.contains('sun-svg')) {
    event.target.classList.add('toggle-topic')
    lightTheme()
    lunaSvg.classList.remove('toggle-topic');
  } else if (event.target.classList.contains('luna-svg')) {
    event.target.classList.add('toggle-topic')
    sunSvg.classList.remove('toggle-topic');
    darkTheme()
  }
}

function removeHover(event) {
  if (event.target.classList.contains('topic-svg')) {
    elemSvg.forEach(elem => elem.classList.remove('active-switch'))
  }
} 

function addHover(event) {
  if (event.target.classList.contains('topic-svg')) {
    elemSvg.forEach(elem => elem.classList.add('active-switch'))
  }
}

function lightTheme() {
    changeTopic.forEach((elem) => elem.classList.add('active-topic'));
    links.forEach((elem) => elem.classList.remove('link'));
    lines.forEach((line) => line.style.background = '#1C1C1C');
    themeBtns.forEach((btn) => btn.classList.add('change-theme-btn'));
    seasonsBtns.forEach((btn) => btn.classList.remove('season__color'));
    seasonsBtns.forEach((btn) => btn.classList.add('season__theme'));
    mainContainer.style.background = `url(./assets/images/bg.jpg)`;
    mainContainer.style.backgroundSize = 'cover'
    body.classList.add('change-body');
}

function darkTheme() {
    changeTopic.forEach((elem) => elem.classList.remove('active-topic'));
    links.forEach((elem) => elem.classList.add('link'));
    lines.forEach((line) => line.style.background = '#BDAE82');
    themeBtns.forEach((btn) => btn.classList.remove('change-theme-btn'));
    seasonsBtns.forEach((btn) => btn.classList.remove('season__theme'));
    seasonsBtns.forEach((btn) => btn.classList.add('season__color'));
    mainContainer.style.background = `url(./assets/images/photo.jpg)`;
    body.classList.remove('change-body');
}

// LocalStorage 

const navContainer = document.querySelector('.nav-container');

navContainer.addEventListener('click', setLocalStorage)

function setLocalStorage(e) {
  let lang = '';
  let theme = '';

  if (e.target.classList.contains('lang-ru')) {
    lang = 'lang-ru'
  } else {
    lang = 'lang-en'
  }

  if (e.target.classList.contains('sun-svg')) {
    theme = 'sun-svg'
  } else if (e.target.classList.contains('luna-svg')) {
    theme = 'luna-svg'
  }
  
  localStorage.setItem('theme', theme);
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage(e) {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    
    if (lang === 'lang-ru') {
      btnsLang.forEach(elem => elem.classList.remove('active-lang'))
      btnLangRu.classList.add('active-lang')
      setTransleteRu(lang)
    } else if (lang === 'lang-en') {
      btnsLang.forEach(elem => elem.classList.remove('active-lang'))
      btnLangEn.classList.add('active-lang')
    }
  }

  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');

    if (theme === 'sun-svg') {
      lightTheme()
      sunSvg.classList.add('toggle-topic');
      lunaSvg.classList.remove('toggle-topic');

    } else if (theme === 'luna-svg') {
      darkTheme()
      sunSvg.classList.remove('toggle-topic');
      lunaSvg.classList.add('toggle-topic');
    }
  }
}

window.addEventListener('load', getLocalStorage)

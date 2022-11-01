const menuBtn = document.querySelector('.menu_btn');
const itemsBtn = document.querySelectorAll('.item-btn');
const navigation = document.querySelector('.navigation');
const blackout = document.querySelector('.header-item');


menuBtn.addEventListener('click', toggleMenu);
blackout.addEventListener('click', deletBlackout);

function toggleMenu() {
    menuBtn.classList.toggle('active-span');
    menuBtn.classList.toggle('fixed-btn');
    navigation.classList.toggle('active-navigation');
    blackout.classList.toggle('blackout');
}

function deletBlackout() {
    blackout.classList.remove('blackout');
    menuBtn.classList.remove('active-span');
    menuBtn.classList.remove('fixed-btn');
    navigation.classList.remove('active-navigation');
    
}


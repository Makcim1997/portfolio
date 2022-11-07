const menuBtn = document.querySelector('.menu_btn');
const itemsBtn = document.querySelectorAll('.item-btn');
const navigation = document.querySelector('.navigation');
const blackout = document.querySelector('.header-item');

// menuBtn.addEventListener('mouseover', addHoverMenu)
// menuBtn.addEventListener('mouseout', removeHoverMenu)
menuBtn.addEventListener('click', toggleMenu);
blackout.addEventListener('click', deletBlackout);

// function addHoverMenu(event) {
//     if (event.target.classList.contains('menu_btn')) {
//         itemsBtn.forEach((item) => item.style.background = '#BDAE82')
//     }
// }

// function removeHoverMenu(event) {
//     if (event.target.classList.contains('menu_btn')) {
//         itemsBtn.forEach((item) => item.style.background = '#fff')
//     }
// }

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

export {navigation}

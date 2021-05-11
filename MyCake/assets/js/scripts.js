const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup .open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnclock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnclock) {
            bodyUnlock();
        }
    }
}

let header__burger = document.querySelector('.header__burger');
let adaptive__menu = document.querySelector('.adaptive-menu');
let adaptive__menu_links = document.querySelectorAll('.adaptive-menu a');

header__burger.addEventListener('click', function () {
    header__burger.classList.toggle('header__burger_active');
    adaptive__menu.classList.toggle('adaptive-menu_active');
})

if (adaptive__menu_links.length > 0) {
    for (let index = 0; index < adaptive__menu_links.length; index++) {
        const link = adaptive__menu_links[index];
        link.addEventListener('click', function () {
            header__burger.classList.toggle('header__burger_active');
            adaptive__menu.classList.toggle('adaptive-menu_active');
        })
    }
}

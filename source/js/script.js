const header = document.querySelector('.header__container');
const navHeader = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav-toggle');

header.classList.remove('header__container--nojs');

navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('header__nav--closed')) {
    navHeader.classList.remove('header__nav--closed');
    navHeader.classList.add('header__nav--opened');
  } else {
    navHeader.classList.add('header__nav--closed');
    navHeader.classList.remove('header__nav--opened');
  }
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('header__nav-toggle--close')) {
    navToggle.classList.remove('header__nav-toggle--close');
    navToggle.classList.add('header__nav-toggle--open');
  } else {
    navToggle.classList.add('header__nav-toggle--close');
    navToggle.classList.remove('header__nav-toggle--open');
  }
});

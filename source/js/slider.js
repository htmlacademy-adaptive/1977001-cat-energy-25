const sliderSwitch = document.querySelector('.slider__switch');
const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
const sliderBefore = document.querySelector('.slider__image--before');
const sliderAfter = document.querySelector('.slider__image--after');

leftButton.addEventListener('click', function () {
  sliderSwitch.classList.remove('slider__switch--right');
  sliderAfter.classList.add('slider__image--hidden');
  sliderBefore.classList.remove('slider__image--hidden');
});

rightButton.addEventListener('click', function () {
  sliderSwitch.classList.add('slider__switch--right');
  sliderBefore.classList.add('slider__image--hidden');
  sliderAfter.classList.remove('slider__image--hidden');
});

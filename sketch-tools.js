const slideValueEl = document.querySelector('.js-value');
inputSliderEl = document.querySelector('.js-slider');

inputSliderEl.oninput = (() => {
  let value = inputSliderEl.value;
  slideValueEl.textContent = value;
  updateGridSize(value);
});
let myTimer;

function randomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorSelect = `#${randomColor}`;
}

const rgbEl = document.querySelector('.js-rainbow-button');
rgbEl.addEventListener('click', () => {
  myTimer = setInterval(() => {
    randomColor();
  }, 100);
  rgbEl.style.backgroundImage = `linear-gradient(to right,
    #E7484F,
    #E7484F 16.65%,
    #F68B1D 16.65%,
    #F68B1D 33.3%,
    #FCED00 33.3%,
    #FCED00 49.95%,
    #009E4F 49.95%,
    #009E4F 66.6%,
    #00AAC3 66.6%,
    #00AAC3 83.25%,
    #732982 83.25%,
    #732982 100%,
    #E7484F 100%)`;
  rgbEl.style.animation = 'slidebg 2s linear infinite';
  rgbEl.style.color = 'white';

  colorButtonEl.style.backgroundColor = 'white';
  colorButtonEl.style.color = 'black';
  eraserEl.style.backgroundColor = 'white';
  eraserEl.style.color = 'black';
});

const colorButtonEl = document.querySelector('.js-color-button');
colorButtonEl.addEventListener('click', () => {
  clearInterval(myTimer);
  colorSelect = colorInputElement.value;
  colorButtonEl.style.backgroundColor = 'rgb(25, 25, 25)';
  colorButtonEl.style.color = 'white';

  rgbEl.style.backgroundImage = ``;
  rgbEl.style.animation = '';
  rgbEl.style.color = '';
  eraserEl.style.backgroundColor = 'white';
  eraserEl.style.color = 'black';
});

const eraserEl = document.querySelector('.js-eraser');
eraserEl.addEventListener('click', () => {
  clearInterval(myTimer);
  colorSelect = 'white';
  eraserEl.style.backgroundColor = 'rgb(25, 25, 25)';
  eraserEl.style.color = 'white';

  colorButtonEl.style.backgroundColor = 'white';
  colorButtonEl.style.color = 'black';
  rgbEl.style.backgroundImage = ``;
  rgbEl.style.animation = '';
  rgbEl.style.color = '';
});

const clearButtonEl = document.querySelector('.js-clear-button');
clearButtonEl.addEventListener('click', () => {
  const boxesEl = document.querySelectorAll('.js-sketch-boxes');
  boxesEl.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
});

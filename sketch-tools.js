

const slideValueEl = document.querySelector('.js-value');
inputSliderEl = document.querySelector('.js-slider');

inputSliderEl.oninput = (() => {
  let value = inputSliderEl.value;
  slideValueEl.textContent = value;
  updateGridSize(value);
});

const eraserEl = document.querySelector('.js-eraser');
eraserEl.addEventListener('click', () => {
  clearInterval(myTimer);
  colorSelect = 'white';
});

const rgbEl = document.querySelector('.js-rainbow-button');

let myTimer;

function randomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  colorSelect = `#${randomColor}`;
}

rgbEl.addEventListener('click', () => {
  myTimer = setInterval(() => {
    randomColor();
  }, 100);
});

const colorButtonEl = document.querySelector('.js-color-button');
colorButtonEl.addEventListener('click', () => {
  clearInterval(myTimer);
  colorSelect = colorInputElement.value;
});

const clearButtonEl = document.querySelector('.js-clear-button');
clearButtonEl.addEventListener('click', () => {
  const boxesEl = document.querySelectorAll('.js-sketch-boxes');
  boxesEl.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
});

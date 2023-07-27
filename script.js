let gridSize = {
  coloumnsNum: 16,
  rowsNum: 16
}

let sketchBoxEl = '';
let sketchContainerEl = document.querySelector('.js-sketch-container');
sketchContainerEl.innerHTML = sketchBoxEl;

function createGrid() {
  sketchBoxEl = '';
  for (let i = 0; i < (gridSize.coloumnsNum * gridSize.rowsNum); i++) {
    sketchBoxEl += `<div class = 'js-sketch-boxes'></div>`;
  }
  sketchContainerEl.innerHTML = sketchBoxEl;

  let boxesEl = document.querySelectorAll('.js-sketch-boxes');
  boxesEl.forEach((box) => {
    box.addEventListener('mousedown', (event) => {
      isDrawing = true;
      drawOnBox(box);
      event.preventDefault();
    })

    box.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    box.addEventListener('touchstart', () => {
      isDrawing = true;
      drawOnBox(box);
    });

    box.addEventListener('touchend', () => {
      isDrawing = false;
    });
  });
}

createGrid();
function updateGridSize(value) {
  gridSize.coloumnsNum = value;
  gridSize.rowsNum = value;

  sketchContainerEl.style.gridTemplateColumns = `repeat(${gridSize.coloumnsNum}, 1fr)`;
  sketchContainerEl.style.gridTemplateRows = `repeat(${gridSize.rowsNum}, 1fr)`;
  createGrid();
}

let colorInputElement = document.querySelector('.js-color-input');
let colorSelect = 'black'

colorInputElement.addEventListener('change', () => {
  colorSelect = colorInputElement.value;
});

let isDrawing = false;

function drawOnBox(box) {
  box.style.backgroundColor = colorSelect;
}

document.addEventListener('mousemove', (event) => {
  if (isDrawing === true) {
    const boxHover = document.elementFromPoint(event.clientX, event.clientY);
    if (boxHover && boxHover.classList.contains('js-sketch-boxes')) {
      drawOnBox(boxHover);
    }
  }
});

document.addEventListener('touchmove', (event) => {
  if (isDrawing === true) {
    const touch = event.touches[0];
    const boxHover = document.elementFromPoint(touch.clientX, touch.clientY);
    if (boxHover && boxHover.classList.contains('js-sketch-boxes')) {
      drawOnBox(boxHover);
    }
  }
});

sketchContainerEl.addEventListener("touchmove", (event) => {
  event.preventDefault();
});

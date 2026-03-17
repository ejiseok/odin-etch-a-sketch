// function createGrid(width) {
//   for (let i = 0; i < width * width; i++) {
//     const gridItem = document.createElement("div");

//     gridItem.classList.add("grid-item");
//     gridItem.style.flexBasis = `${100 / width}%`;
//     gridItem.style.height = `${960 / width}px`;

//     gridItem.addEventListener("mouseover", () => {
//       gridItem.classList.add("hovering");
//     });

//     container.appendChild(gridItem);
//   }
// }

function mouseDown(e) {
  isDrawing = true;
  if (e.target.classList.contains("grid-item")) {
    e.target.classList.add("hovering");
  }
}

function mouseOver(e) {
  if (isDrawing && e.target.classList.contains("grid-item")) {
    e.target.classList.add("hovering");
  }
}

function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("grid-item");
    gridItem.style.flexBasis = `${100 / width}%`;
    gridItem.style.height = `${960 / width}px`;

    gridItem.addEventListener("mouse", () => {
      gridItem.classList.add("hovering");
    });

    container.appendChild(gridItem);
  }
}

function resetGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    container.removeChild(item);
  });
  createGrid(width);
}

function resizeGrid() {
  let size = parseInt(prompt("그리드 사이즈를 입력 (1 ~ 100)"));
  if (size < 0 || size > 100) {
    alert("유효한 사이즈를 입력하세요.");
    return;
  }
  width = size;
  resetGrid();
}

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const newBtn = document.querySelector(".new-btn");

let isDrawing = false;
let width = 16;

window.addEventListener('mouseup', () => {
  isDrawing = false;
});

container.addEventListener("mousedown", mouseDown);
container.addEventListener("mouseover", mouseOver);

resetBtn.addEventListener("click", resetGrid);

newBtn.addEventListener("click", resizeGrid);

createGrid(width);

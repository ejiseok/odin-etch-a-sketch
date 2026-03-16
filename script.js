function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("grid-item");
    gridItem.style.flexBasis = `${100 / width}%`;
    gridItem.style.height = `${960 / width}px`;

    gridItem.addEventListener("mouseover", () => {
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
  width = parseInt(prompt("그리드 사이즈를 입력 (최대 100)"));
  resetGrid();
}

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const newBtn = document.querySelector(".new-btn");

let width = 16;

resetBtn.addEventListener("click", resetGrid);

newBtn.addEventListener("click", resizeGrid);

createGrid(width);

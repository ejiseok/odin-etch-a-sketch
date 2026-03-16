function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("grid-item");
    gridItem.style.flexBasis = `calc(${100 / width}%)`;
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

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");

let width = 16;

resetBtn.addEventListener("click", () => {
  resetGrid();
});

createGrid(width);

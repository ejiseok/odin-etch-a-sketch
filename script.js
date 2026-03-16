function createGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");

    gridItem.classList.add("grid-item");

    gridItem.addEventListener("mouseover", () => {
      gridItem.classList.add("hovering");
    });

    container.appendChild(gridItem);
  }
}

const container = document.querySelector(".container");

createGrid();


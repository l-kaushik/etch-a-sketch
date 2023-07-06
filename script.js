const container = document.querySelector(".container");
const style = document.createElement("style");
const colorPicker = document.getElementById("colorPicker");
const eraser = document.querySelector(".eraser");
const randomColor = document.querySelector(".random");
const clearButton = document.querySelector(".clear");
const gridUpdate = document.querySelector(".gridInput");

let color = "#000000";

let grid_resolution = 8;

function createGrid() {
    // Remove existing grid elements
    container.innerHTML = '';
  
    // Update grid style
    const style = document.createElement("style");
    style.textContent = `
      .grid {
        height: ${450 / grid_resolution}px;
        width: ${450 / grid_resolution}px;
      }
    `;
    document.head.appendChild(style);
  
    // Create new grid elements
    for (let i = 0; i < grid_resolution * grid_resolution; i++) {
      let temp_grid = document.createElement("div");
      container.appendChild(temp_grid);
      temp_grid.classList.add(`grid`);
      temp_grid.classList.add(`grid-${i + 1}`);
    }
  
    // Update event listeners for the new grid elements
    const gridElements = document.querySelectorAll(".grid");
    gridElements.forEach((gridElement, index) => {
      gridElement.addEventListener("mousemove", (e) => {
        if (e.buttons == 1) {
          gridElement.style.backgroundColor = color;
        }
      });
    });
}

// initial load
createGrid();

function randColor() {
    return Math.floor(Math.random() * 256);
}


colorPicker.addEventListener("change", (e) => {
    color = colorPicker.value;
    clearButton.removeAttribute("style");
    randomColor.removeAttribute("style");
    eraser.removeAttribute("style");
});

eraser.addEventListener("click", () => {
    clearButton.removeAttribute("style");
    randomColor.removeAttribute("style");
    eraser.style.backgroundColor = "rgb(79, 20, 189)";
    eraser.style.color = "rgb(221, 220, 220)";
    eraser.style.border = "1px solid rgb(221, 220, 220)";
    color = "white";
});

randomColor.addEventListener("click", () => {
    eraser.removeAttribute("style");
    clearButton.removeAttribute("style");
    randomColor.style.color = "rgb(221, 220, 220)";
    randomColor.style.border = "1px solid rgb(221, 220, 220)";
    color = `rgb(${randColor()},${randColor()}, ${randColor()})`;
    randomColor.style.backgroundColor = color;
});


clearButton.addEventListener("click", () => {
    eraser.removeAttribute("style");
    randomColor.removeAttribute("style");
    clearButton.style.backgroundColor = "rgb(79, 20, 189)";
    clearButton.style.color = "rgb(221, 220, 220)";
    clearButton.style.border = "1px solid rgb(221, 220, 220)";

    createGrid();

});


gridUpdate.addEventListener("change", () => {
    if(gridUpdate.value < 1 || gridUpdate.value > 64){
        alert("Value must be between 1 to 64");
        return;
    }
    grid_resolution = gridUpdate.value;
    createGrid();
});


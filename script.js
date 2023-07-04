const container = document.querySelector(".container");

let grid_resolution = 16;

for(let i = 0; i<grid_resolution; i++){
    let temp_grid = document.createElement("div"); 
    container.appendChild(temp_grid);
    temp_grid.classList.add(`grid`);
    temp_grid.classList.add(`grid-${i+1}`);
}

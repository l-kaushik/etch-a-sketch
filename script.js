const container = document.querySelector(".container");
const style = document.createElement("style");
const colorPicker = document.getElementById("colorPicker");
const eraser = document.querySelector(".eraser");

let color = "#000000";
let grid_resolution = 20;

style.textContent = `
    .grid{
        height: ${450/grid_resolution}px;
        width: ${450/grid_resolution}px;
    }
`;

document.head.appendChild(style);

for(let i = 0; i<grid_resolution*grid_resolution; i++){
    let temp_grid = document.createElement("div"); 
    container.appendChild(temp_grid);
    temp_grid.classList.add(`grid`);
    temp_grid.classList.add(`grid-${i+1}`);
}

const gridElements = document.querySelectorAll(".grid");

gridElements.forEach((gridElement,index)=>{
    gridElement.addEventListener("mousemove",(e)=>{
        if(e.buttons == 1){
            gridElement.style.backgroundColor = color;
        }
    });
});


colorPicker.addEventListener("change", (e)=>{
    color = colorPicker.value;
})

eraser.addEventListener("click", (e)=>{
    eraser.style.backgroundColor = "rgb(79, 20, 189)";
    eraser.style.color = "rgb(221, 220, 220)";
    eraser.style.border = "1px solid rgb(221, 220, 220)";
    color = "white";
})
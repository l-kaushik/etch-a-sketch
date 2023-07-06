const container = document.querySelector(".container");
const style = document.createElement("style");
const colorPicker = document.getElementById("colorPicker");
const eraser = document.querySelector(".eraser");
const randomColor = document.querySelector(".random");
const clearButton = document.querySelector(".clear");

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


function randColor(){
   return Math.floor(Math.random() * 256);
}


colorPicker.addEventListener("change", (e)=>{
    color = colorPicker.value;
    clearButton.removeAttribute("style");
    randomColor.removeAttribute("style");
    eraser.removeAttribute("style");
});

eraser.addEventListener("click", ()=>{
    clearButton.removeAttribute("style");
    randomColor.removeAttribute("style");
    eraser.style.backgroundColor = "rgb(79, 20, 189)";
    eraser.style.color = "rgb(221, 220, 220)";
    eraser.style.border = "1px solid rgb(221, 220, 220)";
    color = "white";
});

randomColor.addEventListener("click", ()=>{
    eraser.removeAttribute("style");
    clearButton.removeAttribute("style");
    randomColor.style.color = "rgb(221, 220, 220)";
    randomColor.style.border = "1px solid rgb(221, 220, 220)";
    color = `rgb(${randColor()},${randColor()}, ${randColor()})`;
    randomColor.style.backgroundColor = color;
});


clearButton.addEventListener("click",()=>{
    eraser.removeAttribute("style");
    randomColor.removeAttribute("style");
    clearButton.style.backgroundColor = "rgb(79, 20, 189)";
    clearButton.style.color = "rgb(221, 220, 220)";
    clearButton.style.border = "1px solid rgb(221, 220, 220)";

    gridElements.forEach((gridElement,index)=>{
        gridElement.style.backgroundColor = "white";
    });

});

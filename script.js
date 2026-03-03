const container = document.getElementById("container")
for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = i;
    newDiv.className = "flexbox";
    container.appendChild(newDiv);
    for (let k = 0; k < 16; k++) {
        const row = document.getElementById(i);
        const rowDiv = document.createElement("div");
        rowDiv.className = "gridsquare";
        row.appendChild(rowDiv);
    }
    
}
let grids = document.querySelectorAll(".gridsquare");
const resetButton = document.getElementById("resetButton");
const newGrid = document.getElementById("newGrid");
function trail(event) {
    event.target.style.backgroundColor = "grey";
}
grids.forEach(div => {
    div.addEventListener("mouseenter", trail);
});
function reset() {
    currentGrids = document.querySelectorAll(".gridsquare")
    currentGrids.forEach (element => {
        element.style.backgroundColor = "white";
    });
}
resetButton.addEventListener("click", reset);
function generateNewGrid () {
    let size = prompt("How large of a grid do you want? Enter the number of tiles per side");
    const oldGrid = document.getElementById("container");
    oldGrid.replaceChildren();
    for (let i = 0; i < size; i++) {
        const newDiv = document.createElement("div");
        newDiv.id = i;
        newDiv.className = "flexbox";
        container.appendChild(newDiv);
        for (let k = 0; k < size; k++) {
            const row = document.getElementById(i);
            const rowDiv = document.createElement("div");
            rowDiv.className = "gridsquare";
            row.appendChild(rowDiv);
        }
    }
    grids = document.querySelectorAll(".gridsquare");
    grids.forEach(div => {
        div.addEventListener("mouseenter", trail);
    });
}
newGrid.addEventListener("click", generateNewGrid);
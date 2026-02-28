const container = document.getElementById("container")
for (let i = 0; i < 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = i;
    newDiv.className = "flexbox";
    container.appendChild(newDiv);
    for (let k = 0; k < 16; k++) {
        const row = document.getElementById(i);
        const rowDiv = document.createElement("div");
        rowDiv.className = "flexbox";
        row.appendChild(rowDiv);
    }
    
}
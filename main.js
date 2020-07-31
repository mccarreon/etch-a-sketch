const reset = document.getElementById("reset");
const setGrid = document.getElementById("set-grid");

setGrid.addEventListener("click", set_grid)
reset.addEventListener("click", clear_board);

for (let i=0; i<16;i++) {
    let square = document.createElement('div');
    grid = document.getElementsByClassName("grid")[0];

    square.className = "square";
    square.addEventListener("mouseover", fill);
    grid.appendChild(square);
}

function fill(){
    this.classList.add("filled");
}

function clear_board(){
    let elements = document.getElementsByClassName('square');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('filled');
    }
}

function set_grid(){
    const num = prompt("Enter number of squares for the new grid");
    const root = document.querySelector(':root');
    
    grid = document.getElementsByClassName("grid")[0];
    grid.innerHTML = '';
    root.style.setProperty("--num-squares", num);

    for (let i=0; i<num*num ;i++) {
        let square = document.createElement('div');
        square.className = "square";
        square.addEventListener("mouseover", fill);
        grid = document.getElementsByClassName("grid")[0];
        grid.appendChild(square);
    }
}
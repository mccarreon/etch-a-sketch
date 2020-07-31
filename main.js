const reset = document.getElementById("reset");

reset.addEventListener("click", clear_board);

for (let i=0; i<16;i++) {
    let square = document.createElement('div');
    square.className = "square";
    square.addEventListener("mouseover", fill);
    grid = document.getElementsByClassName("grid")[0];
    grid.appendChild(square);
};

function fill(){
    this.classList.add("filled")
};

function clear_board(){
    let elements = document.getElementsByClassName('square');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('filled');
    }
};
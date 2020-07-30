for (let i=0; i<16;i++) {
    let square = document.createElement('div');
    square.className = "square";
    square.addEventListener("mouseover", fill);
    grid = document.getElementsByClassName("grid")[0];
    grid.appendChild(square);
};

function fill(){
    this.classList.add("filled")
}
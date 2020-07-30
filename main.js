for (let i=0; i<16;i++) {
    let square = document.createElement('div');
    square.className = "square";

    grid = document.getElementsByClassName("grid")[0];
    grid.appendChild(square);
};
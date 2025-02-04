const container = document.querySelector(".container");
const content = document.querySelector(".content");

let numberOfSquares = 16; // default 16x16 grid size

buildGrid(numberOfSquares);

const btn = document.querySelector(".set-grid-squares");

btn.addEventListener("click", () => {
    let userSetSquares = prompt("How many squares per side? (max: 100)");

    while (userSetSquares > 100 || userSetSquares < 0) {
        userSetSquares = prompt("How many squares per side? (max: 100)");
        if (userSetSquares <= 100 && userSetSquares > 0) {
            break;
        }
    }

    removeGrid();
    buildGrid(userSetSquares);
})

function removeGrid() {
    container.replaceChildren();
}

function buildGrid(userSetSquares) {
    numberOfSquares = userSetSquares;
    
    for (let i=1; i <= numberOfSquares*numberOfSquares; i++) {
        const squares = document.createElement("div");
        squares.classList.add("squares");
        container.appendChild(squares);
    }
    
    let widthOfSquares = 480 / numberOfSquares;
    
    allSquares = document.querySelectorAll(".squares");
    
    allSquares.forEach((square) => {
        square.style.width = `${widthOfSquares}px`;
        square.style.height = `${widthOfSquares}px`;
    })
    
    content.appendChild(container);
    
    allSquares.forEach((square) => {
        let opacity = 0;
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        square.addEventListener("mouseover", () => {
            opacity += 0.1;
            currentOpacity = Math.min(opacity, 1); // maximum of value 1 for opacity
            let randomColorWithOpacity = `rgba(${r},${g},${b},${currentOpacity})`;
            square.style.backgroundColor = randomColorWithOpacity;
        })
    })
}

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    removeGrid();
    buildGrid(numberOfSquares);
})
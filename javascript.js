const gridContainer = document.querySelector("#grid-container");

// Create initial sketchpad and events for sketching
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseenter", function() {
        if (isRandomColorMode) {
            square.style.backgroundColor = getRandomColor(); // Random color mode
        } else {
            square.style.backgroundColor = "#3498db"; // Blue color mode
        }
    });

    gridContainer.appendChild(square);
}

// Add functionality to Square Change button
const squareButton = document.querySelector("#user-squares");

squareButton.addEventListener("click", function () {
    const user_squares = Number(window.prompt("How many squares per side? (Max: 100)", ""));

    // Check if input is a positive number with max 100 squares per side
    if (!((user_squares>0)&&(user_squares<=100))){
        alert("Please enter a positive number (max: 100).");
        return;
    }

    createGrid(user_squares);
});

// Function to clear pre-existing sketchpad 
// and re-create sketchpad based on user input for # of squares per side 
function createGrid(user_squares) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    const squareSize = 960 / user_squares

    for (let i = 0; i < user_squares ** 2; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", function () {
            if (isRandomColorMode) {
                square.style.backgroundColor = getRandomColor(); // Random color mode
            } else {
                square.style.backgroundColor = "#3498db"; // Blue color mode
            }
        });

        gridContainer.appendChild(square);
    }
}

// Random Color (RGB) Generator
function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

let isRandomColorMode = false;

// Add functionality to Pen Color Change button
const colorButton = document.querySelector("#color-change");

// Toggle button for Blue versus Random Color mode
colorButton.addEventListener("click", function () {
    isRandomColorMode = !isRandomColorMode;

    if (isRandomColorMode) {
        colorButton.textContent = "Switch to Blue Color Mode";
    } else {
        colorButton.textContent = "Switch to Random Color Mode";
    }

    console.log(isRandomColorMode ? "Random color mode activated" : "Blue color mode activated");
});
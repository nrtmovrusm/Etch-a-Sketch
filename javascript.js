const gridContainer = document.querySelector("#grid-container");

// Create initial sketchpad and events for sketching
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseenter", function() {
        square.classList.add("hovered");
    });

    gridContainer.appendChild(square);
}

// Add functionality to button
const squareButton = document.querySelector("#user-squares");

squareButton.addEventListener("click", function () {
    const user_squares = Number(window.prompt("How many squares per side? (Max: 100)", ""));

    // Check if input is a positive number with max 100 squares per side
    if (!((user_squares>0)&&(user_squares<100))){
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

        square.addEventListener("mouseenter", function() {
            square.classList.add("hovered");
        });

        gridContainer.appendChild(square);
    }
}
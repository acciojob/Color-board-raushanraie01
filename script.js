const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 800;

// create 800 squares
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    // Hover effect
    square.addEventListener("mouseover", () => setColor(square));

    // Remove color after mouse leaves (smooth fade)
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

// set random color
function setColor(element) {
    const color = getRandomColor();
    element.style.transition = "background-color 1s ease";   // ensure smooth fade
    element.style.background = color;
}

function removeColor(element) {
    element.style.transition = "background-color 1s ease";   // ensure transition
    setTimeout(() => {
        element.style.background = "#1d1d1d"; // default
    }, 100);   // small delay improves Cypress detection
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

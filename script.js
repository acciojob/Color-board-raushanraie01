//your JS code here. If required.
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
    square.addEventListener("mouseleave", () => removeColor(square));

    container.appendChild(square);
}

// set random color
function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
}

function removeColor(element) {
    element.style.background = "#1d1d1d"; // default
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

let color1 = document.getElementsByClassName("color1")[0];
let color2 = document.getElementsByClassName("color2")[0];
let body = document.getElementsByTagName("body")[0];
let currentColorGradient = document.querySelector("h4");

const colorChange = () => {
    body.style.background = "linear-gradient(to right,"+ color1.value +", "+ color2.value +")";
    currentColorGradient.textContent = body.style.background + ";"
}

color1.addEventListener("input", colorChange)

color2.addEventListener("input", colorChange)
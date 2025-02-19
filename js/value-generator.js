// do not change this file.

function randomValue(selector) {
    let value = Math.floor(Math.random() * 10);
    let element = document.querySelector(selector);
    element.innerText = value
}

function generateRandomValues() {
    randomValue("#first-value")
    randomValue("#second-value")
}

generateRandomValues()
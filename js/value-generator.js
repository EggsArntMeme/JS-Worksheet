// do not change this file.
function randomValue(parent = null, selector) {
    let value = Math.floor(Math.random() * 10);
    if (parent == null) {
        let element = document.querySelector(selector);
        element.innerText = value

    } else {
        let element = parent.querySelector(selector);
        element.innerText = value

    }
    
}

export function generateRandomValues(parent = null) {
    randomValue(parent, '#first-value')
    randomValue(parent, '#second-value')
}

generateRandomValues()


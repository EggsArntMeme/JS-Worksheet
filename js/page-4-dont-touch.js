
document.querySelector("#random-int").addEventListener('click', (event) => {
    event.preventDefault()
    location.reload();
})


function updateAllNumbers() {
    let value1 = Math.floor(Math.random() * 10);
    let value2 = Math.floor(Math.random() * 10);

    const problemDiv = document.querySelector('.problem-4')
    for (const element of problemDiv.children) {
        element.querySelector('#first-value').innerHTML = value1
        element.querySelector('#second-value').innerHTML = value2
    }
}
updateAllNumbers()


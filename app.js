function randomRGB() {
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r},${g},${b})`
}

const h1 = document.querySelector('h1');
const letters = document.querySelectorAll('.letter');

console.log(letters);

setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);

setInterval(function() {
    const h1 = document.querySelector('h1');
    h1.classList.toggle('small');
}, 3000)

function brownBaths() {
    const btn = document.querySelector('button');
    if (btn.innerText === 'Shop store') {
        btn.innerText = 'I crave brown baths';
    } else {
        btn.innerText = 'Shop store';
    }
}

// const newButon = document.createElement('button');
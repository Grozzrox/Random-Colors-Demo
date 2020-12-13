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

function makeColor(color) {
    document.body.style.backgroundColor = color;
}

const makeWhite = document.querySelector('#white');
const makeGreen = document.querySelector('#green');
const makePink = document.querySelector('#pink');

makeWhite.addEventListener("click", function() {
    makeColor("white");
});

makeGreen.addEventListener("click", function() {
    makeColor("green");
})

makePink.addEventListener("click", function() {
    makeColor("pink");
})
// const newButon = document.createElement('button');

/*
document.getElementById('container');
const container = document.querySelector('#container');
const second = document.querySelectorAll('.second');
const third = document.querySelector('ol .third');
const footer = document.querySelector('.footer');
const newLi = document.createElement('li');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('ol li');

container.prepend("Hello!");
footer.classList.add("main");
footer.classList.remove("main");

newLi.innerText = "four";
ul.append(newLi);

for (let li of lis) {
    li.style.backgroundColor = "green"; 
}

footer.remove();
*/
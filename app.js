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
const makeBlack = document.querySelector('#black');

makeWhite.addEventListener("click", function() {
    makeColor("white");
});

makeGreen.addEventListener("click", function() {
    makeColor("green");
})

makePink.addEventListener("click", function() {
    makeColor("pink");
})

makeBlack.addEventListener('click', function() {
    makeColor("black");
})

function changeBackground(x, y) {
    const body = document.querySelector('body');

    body.style.backgroundColor = `rgb(${x}, 0, ${y})`;
}

document.addEventListener("mousemove", function(evt) {
    const x = Math.floor((evt.x*255)/window.innerWidth);
    const y = Math.floor((evt.y*255)/window.innerHeight);
    console.log(x,y);
    changeBackground(x, y);
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
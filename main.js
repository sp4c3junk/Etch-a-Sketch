const container = document.getElementById('container');

const cleaner = document.getElementById('clean');
cleaner.addEventListener('click', cleanGrid);

const selector = document.getElementById('row');
selector.addEventListener('change', changeRows);

const color = document.getElementById('color');
color.addEventListener('change', chooseColor);

const erase = document.getElementById('eraser');
erase.addEventListener('click', eraser);

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', rainbowPaint);

const random = document.getElementById('random');
random.addEventListener('click', pickRandom);

let blocks = container.children;
let rows = row.value;
let paint = '#000000';

function randomColor() {
    let color = '#';
    let colorCode = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];
    let min = Math.ceil(0);
    let max = Math.floor(12);
        for(i = 0; i < 6; i++) {
            color += colorCode[(Math.floor(Math.random() * (max - min) + min))];
        }
    return color;
}

function pickRandom() {
    let randomPaint = randomColor();
    for(i = 0; i < rows*rows; i++) {
        blocks[i].addEventListener('mouseover', function(event) {
            randomColor();
            event.target.style.backgroundColor = randomPaint;
        })
    }
}

function rainbowPaint() { 
    for(i = 0; i < rows*rows; i++) {
        blocks[i].addEventListener('mouseover', function(event) {
            randomColor();
            event.target.style.backgroundColor = randomColor();
        })
    }
}

function chooseColor() {
    for(i = 0; i < rows*rows; i++) {
        blocks[i].addEventListener('mouseover', function(event) {
            randomColor();
            event.target.style.backgroundColor = color.value;
        })
    }
}

function eraser() {
    for(i = 0; i < rows*rows; i++) {
        blocks[i].addEventListener('mouseover', function(event) {
            randomColor();
            event.target.style.backgroundColor = 'white';
        })
    }
}

function changeRows() {
    rows = row.value;
    removeGrid();
    createGrid();
    document.getElementById("row-numbers").innerHTML = `Change number of rows: ${row.value}`;
}

function createGrid() {
    for (i = 0; i < rows*rows; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        container.style.gridTemplateColumns = `repeat(${rows}, 2fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 2fr)`;
        block.addEventListener('mouseover', function () {
            block.style.backgroundColor = paint;
        });
        container.appendChild(block);
    }
}

function removeGrid() {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function cleanGrid() {
    for (i = 0; i < rows*rows; i++) {
        blocks[i].style.backgroundColor = "white";
    }
}

createGrid();
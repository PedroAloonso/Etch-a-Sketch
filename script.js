const defaultColor = '#FAA916';
const defaultSize = 16;
const defaultMode = 'default';

var actualColor = defaultColor;
var actualSize = defaultSize;
var colorMode = defaultMode;

var colorChoice = document.querySelector('#colorpicker');
var sizeChoice = document.querySelector('#sizes');

var screen = document.querySelector('.screen');
var clearBtn = document.querySelector('#clearbtn');
var rainbowBtn = document.querySelector('#rainbowbtn');
var eraserBtn = document.querySelector('#eraserbtn');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function takeActualSize(sizeValue) {
    return Number(sizeValue)
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    if (colorMode == 'rainbow') {
        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        colorChoice.value = `${rgbToHex(randomR,randomG,randomB)}`
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    } else if (colorMode == 'erase'){
        e.target.style.backgroundColor = '#FFFFFF';
        colorChoice.value = '#FFFFFF';
    } else {
        actualColor = colorChoice.value;
        e.target.style.backgroundColor = actualColor;
    }
};

function grid(size = defaultSize) {
    screen.style.setProperty(`grid-template-columns`, `repeat(${size}, 1fr)`);
    screen.style.setProperty(`grid-template-rows`, `repeat(${size}, 1fr)`);
    for(let i = 0; i <= size**2; i++) {
        let pixel = document.createElement('div');
        pixel.addEventListener('mousedown', changeColor);
        pixel.addEventListener('mouseover', changeColor);
        screen.appendChild(pixel);
    };    
};    

function makeGrid() {
    actualSize = takeActualSize(sizeChoice.value);
    grid(actualSize);
};

function deleteGrid(size = defaultSize){
    screen.innerHTML = '';
};

function reloadgrid() {
    deleteGrid();
    makeGrid();
};

sizeChoice.onclick = reloadgrid
clearBtn.onclick = reloadgrid
colorChoice.onclick = () => {colorMode = defaultMode}
rainbowBtn.onclick = () => {colorMode = 'rainbow'}
eraserBtn.onclick = () => {colorMode = 'erase'}

window.onload = () => {
    actualSize = defaultSize
    sizeChoice.value = 16
    actualColor = defaultColor
    colorMode = defaultMode
    colorChoice.value = defaultColor
    makeGrid(defaultSize);
};
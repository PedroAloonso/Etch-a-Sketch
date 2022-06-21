var objColor = document.querySelector('#colorpicker')
objColor.addEventListener('blur', function () {
    color = objColor.value
})
var color = '#ffffff'

var screen = document.querySelector('#screen')
var numOfChildren = +screen.getAttribute('children')
var a = new DocumentFragment();

function create16x16Screen() {
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            let pixel = document.createElement('div')
            pixel.id = 'pixel'
            pixel.classList.add('child')
            screen.appendChild(pixel)
        }
    }
    screen.append(a)
}


create16x16Screen()

console.log(color)

console.log(b)
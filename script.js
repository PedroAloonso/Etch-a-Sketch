var objColor = document.querySelector('#colorpicker')
objColor.addEventListener('blur', function () {
    color = objColor.value
})
var color = '#ffffff'
var screen = document.querySelector('.screen')

function create16x16Screen() {
    let pixelId = 0
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            pixelId++
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            pixel.id = `pixel${pixelId}`
            screen.appendChild(pixel)
        }
    }
}

function create64x64Screen() {
    let pixelId = 0
    for(let i=0; i<64; i++){
        for(let j=0; j<64; j++){
            pixelId++
            let pixel = document.createElement('div')
            pixel.className = 'pixel'
            screen.appendChild(pixel)
        }
    }
}

document.addEventListener('click', (e) => {
    if(e.target.className == 'pixel'){
        chose = document.querySelector(`#${e.target.id}`)
        chose.style.setProperty('background-color', `${color}`, null)
    }
})


//target: div.pixel

create16x16Screen()
//create64x64Screen()
console.log(color)

//console.log(b)
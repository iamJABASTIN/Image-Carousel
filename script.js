const moveLeft = document.getElementById('left')
const moveRight = document.getElementById('right')
const images = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length-1){
        idx=0
    } else if(idx < 0) {
        idx=img.length-1
    }
    images.style.transform = `translateX(${-idx * 330}px)`
}

function resetIntervel() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

moveRight.addEventListener('click', ()=> {
    ++idx
    changeImage()
    resetIntervel()
})
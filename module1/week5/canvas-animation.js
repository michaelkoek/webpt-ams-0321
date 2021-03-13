const canvas = document.querySelector('canvas');
const btnstop = document.getElementById('btn-stop');
const btnreset = document.getElementById('btn-reset');
const btnplay = document.getElementById('btn-play');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = null;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
} else {
  // canvas-unsupported code here
  alert('upgrade!!! nooowwww')
}

btnstop.addEventListener('click', () => {
    stopAnimation();
});

btnreset.addEventListener('click', () => {
    resetAnimation();
})

btnplay.addEventListener('click', () => {
    playAnimation();
})


let x = 200;
let y = 200;
let velocityX = 6;
let radius = 30
let rAnF = null;

function animation() {
    console.log({x, y})
    rAnF = requestAnimationFrame(animation);
    // Repaint the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('works')

    ctx.beginPath(); // prevent from connecting
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = 'blue'
    ctx.stroke();

 
    if (x + radius > canvas.width || x - radius < 0) {
        velocityX = -velocityX
    }
    x += velocityX
}

function stopAnimation() {
    console.log('cstop');
    cancelAnimationFrame(rAnF);
}

function resetAnimation() {
    console.log('reset');
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); // prevent from connecting
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    ctx.strokeStyle = 'blue'
    ctx.stroke();
}

function playAnimation() {
    console.log('play');
    animation();
}

animation();

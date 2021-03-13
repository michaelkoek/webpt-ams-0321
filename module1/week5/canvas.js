const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = null;
if (canvas.getContext) {
  ctx = canvas.getContext('2d');
} else {
  // canvas-unsupported code here
  alert('upgrade!!! nooowwww')
}

console.log(canvas);

ctx.moveTo(0, 0); // starting point
ctx.lineTo(200, 100); // end point
ctx.strokeStyle = 'pink';
ctx.stroke(); // draw the line

// creating multiple boxes
ctx.fillStyle = '#ff00ff'
ctx.fillRect(100, 100, 50, 50);

ctx.fillStyle = '#ff0'
ctx.fillRect(400, 100, 50, 50);

ctx.fillStyle = '#0ff'
ctx.fillRect(200, 100, 50, 50);

// draw lines
ctx.beginPath();
ctx.moveTo(50, 300)
ctx.lineTo(300, 100)
ctx.strokeStyle = '#f90';
ctx.stroke();


for (let i = 0; i < 3; i++) {
    // Arc/cricle
    ctx.beginPath(); // prevent from connecting
    ctx.arc(300 * i, 300, 30, 0, Math.PI * 2)
    ctx.strokeStyle = 'blue'
    ctx.stroke();
    ctx.fillStyle = 'pink'
    ctx.fill();
    ctx.fillStyle = '#f90';
	ctx.fillRect(100, 100, 50, 50);
}



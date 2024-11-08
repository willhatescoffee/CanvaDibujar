const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let painting = false;

let strokeColor = document.getElementById("color").value;
let lineWidth = document.getElementById("lineWidth").value;

function startPosition(e) {
  painting = true;
  draw(e); 
}

function endPosition() {
  painting = false;
  ctx.beginPath(); 
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = strokeColor;

  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

document.getElementById("color").addEventListener("input", (e) => {
  strokeColor = e.target.value;
});

document.getElementById("lineWidth").addEventListener("input", (e) => {
  lineWidth = e.target.value;
});

document.getElementById("clear").addEventListener("click", clearCanvas);

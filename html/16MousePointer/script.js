const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let midX = canvas.width/2;
let midY = canvas.height/2;
let mouse = {};
let rot = 0;

function animate(){
  requestAnimationFrame(animate);
  //context.clearRect(0,0,1000,1000);
  context.fillStyle = "rgba(255,255,255,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);
  context.save();
  context.translate(midX,midY);
  if(mouse.x > midX){
    rot = Math.atan((mouse.y - midY)/(mouse.x - midX));
  } else {
    rot = Math.atan((mouse.y - midY)/(mouse.x - midX)) - Math.PI;
  }
  context.rotate(rot);
  drawArrow(context);
  context.restore();
}

animate();

function drawArrow(context){
  let shaftHeight = 7;
  let shaftWidth = 80;
  let arrowHeight = 15;
  let arrowWidth = 30;
  context.fillStyle = "rgba(255,0,0,0.4)";
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(0,-shaftHeight);
  context.lineTo(shaftWidth,-shaftHeight);
  context.lineTo(shaftWidth,-arrowHeight);
  context.lineTo(shaftWidth+arrowWidth,0);
  context.lineTo(shaftWidth,arrowHeight);
  context.lineTo(shaftWidth,shaftHeight);
  context.lineTo(0,shaftHeight);
  context.closePath();
  context.stroke();

  context.fill();
}

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
})

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let BallA = new Point(200,200,20,"blue");
let BallB = new Point(250,200,20,"blue");
let BallC = new Point(300,200,20,"blue");

BallA.draw(context);

BallA.drag();
BallB.drag();
BallC.drag();

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	requestAnimationFrame(animate);
	BallA.draw(context);
	BallB.draw(context);
	BallC.draw(context);
  
  
  context.beginPath();
  context.strokeStyle = "purple";
  context.fillStyle="rgba(255,255,255,255)"
  context.moveTo(BallA.x, BallA.y);
  
  context.lineTo(BallB.x, BallB.y);
  context.lineTo(BallC.x, BallC.y);
  context.lineTo(BallA.x, BallA.y);
 
  context.fill();
  context.closePath();
  context.stroke();
}

animate();



function getRandomNumber(max){
  return Math.random()*max;
}

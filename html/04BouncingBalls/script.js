const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

const amount = 30;
let shot = new Audio('shot.wav');

let kineticObjects = [];
for (let i = 0; i < amount ; i++)
{
	kineticObjects[i] = {};
}

function setUp(){
	for (let BallNumber of kineticObjects)
	{
		let randomheight = getRandomNumber(canvas.height - 100);
		let randomwidth = getRandomNumber(canvas.width);
  BallNumber.point = new Point(500,300,20,"black");
  BallNumber.pos = new Vector2d(randomwidth,randomheight);
  BallNumber.vel = new Vector2d(8,5);
  BallNumber.acc = new Vector2d(0,1);
	}
  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
   requestAnimationFrame(update);
  for (let BallNumber of kineticObjects)
  {
  if(BallNumber.pos.dx<0 || BallNumber.pos.dx > canvas.width){
    BallNumber.vel.dx = -BallNumber.vel.dx;
  }
  if(BallNumber.pos.dy > canvas.height)
  {
	  BallNumber.pos.dy = canvas.height;
    BallNumber.vel.dy = -BallNumber.vel.dy;
	
  }
  
  BallNumber.vel.add(BallNumber.acc);
	
  BallNumber.pos.add(BallNumber.vel);
  BallNumber.point.position(BallNumber.pos);
  BallNumber.point.draw(context);
  }
  
  /*
  requestAnimationFrame(update);
  if(kineticObject.pos.dx<0 || kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = -kineticObject.vel.dx;
  }
  if(kineticObject.pos.dy<0 || kineticObject.pos.dy > canvas.height){
    kineticObject.vel.dy = -kineticObject.vel.dy;
  }
  if(kineticObject.pos.dy <	900){
  kineticObject.vel.add(kineticObject.acc);
  }
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);
*/  
  
  
}

setUp();


window.addEventListener('mousedown',(evt)=>{
  shot.play();
  let Pos = evt.clientX;
  let mouseY = evt.clientY;
  debug.log(DistanceToOtherPoint(Pos));
})


//if(you hit){
    //remove
  //  console.log('raak');
  //}

function getRandomNumber(max){
  return Math.random()*max;
}

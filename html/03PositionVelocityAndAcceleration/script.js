const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let kineticObject = {};

function setUp(){
  kineticObject.point = new Point(500,300, 20,"black");
  kineticObject.pos = new Vector2d(800,300);
  kineticObject.vel = new Vector2d(8,5);
  kineticObject.acc = new Vector2d(0,1);

  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
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
  
    requestAnimationFrame(update);
  if(kineticObject.pos.dx<0 || kineticObject.pos.dx > canvas.width){
    kineticObject.vel.dx = -kineticObject.vel.dx;
  }
  if(kineticObject.pos.dy > canvas.height)
  {
	  kineticObject.pos.dy = canvas.height;
    kineticObject.vel.dy = -kineticObject.vel.dy;
	
	console.log("boo");
  }
  
  kineticObject.vel.add(kineticObject.acc);
	
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context);
  
}

setUp();



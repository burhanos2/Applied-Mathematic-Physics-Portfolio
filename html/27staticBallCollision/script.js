const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let bumper, player,rad,tan;

function setUp(){
  bumper = new Point(canvas.width/2,canvas.height/2,300,"gray");
  player = {};
  player.pos = new Vector2d(100,100);
  player.vel = new Vector2d(7,8);
  player.point = new Point(player.pos.dx,player.pos.dy,20,"yellow");

  rad = new Vector2d(1,1);
  tan = new Vector2d(1,1);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);
  bumper.draw(context);
  player.pos.add(player.vel);
  player.point.position(player.pos);

  if(player.pos.dx<player.point.r || player.pos.dx>canvas.width - player.point.r){
    player.vel.dx = -player.vel.dx;
  }
  if(player.pos.dy<player.point.r || player.pos.dy>canvas.height - player.point.r){
    player.vel.dy = -player.vel.dy;
  }

  rad.dx = bumper.x - player.pos.dx;
  rad.dy = bumper.y - player.pos.dy;

  tan.dx = -rad.dy;
  tan.dy = rad.dx;

  if(rad.magnitude<player.point.r + bumper.r){
    rad.magnitude = 1;
    tan.magnitude = 1;
    rad.magnitude = player.vel.dot(rad);
    tan.magnitude = player.vel.dot(tan);
    //rad.draw(context,player.pos.dx,player.pos.dy,10);
    //tan.draw(context,player.pos.dx,player.pos.dy,10);
    rad.angle += Math.PI;
    player.vel.sumVector(rad,tan);
  }

  //player.vel.draw(context,player.pos.dx,player.pos.dy,10);

  player.point.draw(context);
}


setUp();
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let ball = {};

function setUp(){
  ball.position = new Vector2d(100,100);
  ball.velocity = new Vector2d(4,0);
  ball.acceleration = new Vector2d(0,0.5);
  ball.point = new Point(ball.position.dx,ball.position.dy,20,"blue");

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  //context.clearRect(0,0,1000,1000);
  context.fillStyle = "rgba(255,255,255,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);
  ball.velocity.add(ball.acceleration);
  ball.position.add(ball.velocity);
  ball.point.position(ball.position);
  ball.point.draw(context);

  ball.velocity.draw(context,ball.position.dx,ball.position.dy,10);

  if(ball.position.dx > canvas.width - ball.point.r){
    ball.velocity.dx = - ball.velocity.dx;
  }
  if(ball.position.dx < ball.point.r){
    ball.velocity.dx = - ball.velocity.dx;
  }
  if(ball.position.dy > canvas.height - ball.point.r){
    ball.position.dy = canvas.height - ball.point.r;
    ball.velocity.dy = - ball.velocity.dy;
  }
}

setUp();

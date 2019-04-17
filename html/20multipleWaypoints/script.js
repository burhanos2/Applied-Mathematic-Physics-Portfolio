const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let moveToA = false;
let distance = 0;
let movestate = 1;

var countPoints = 20;
var playercount = countPoints;

let points = [];
let spelers = [];

function setUp(){
  for (var i = 0; i < countPoints; i++) {
    A = {};
    A.move = 1;
    A.pos = new Vector2d(Math.floor(Math.random() * 1400) + 20,Math.floor(Math.random() * 700) + 20);
    A.vel = new Vector2d(0,0);
    A.point = new Point(A.pos.dx,A.pos.dy,10,"lightgreen");
    points.push(A);
  }

  for (var i = 0; i < playercount; i++) {
    player = {};
    player.state = i;
    player.pos = new Vector2d(points[i].pos.dx, points[i].pos.dy);
    player.vel = new Vector2d(0,0);
    player.acc = new Vector2d(0,0);
    player.point = new Point(player.pos.dx,player.pos.dy,5,"pink");
    spelers.push(player);
  }


  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,1920,1080);
  context.fillStyle = "rgba(255,255,255,0.2)";
  //context.fillRect(0,0,canvas.width,canvas.height);

  context.beginPath();
  context.strokeStyle = "darkgrey";
  context.moveTo(points[0].pos.dx,points[0].pos.dy);
  for (var i = 0; i < countPoints; i++) {
      context.lineTo(points[i].pos.dx,points[i].pos.dy);
  }
  context.closePath();
  context.stroke();

  for (var i = 0; i < countPoints; i++) {
    points[i].pos.add(points[i].vel);
    points[i].point.position(points[i].pos);
    points[i].point.draw(context);

  }

  for (var i = 0; i < playercount; i++) {
    spelers[i].vel.add(spelers[i].acc);
    spelers[i].pos.add(spelers[i].vel);
    spelers[i].point.position(spelers[i].pos);
    spelers[i].point.draw(context);
  }


for (var i = 0; i < playercount; i++) {

  if(moveToA){
    distance = spelers[i].point.DistanceToOtherPoint(points[spelers[i].state].point);
    spelers[i].vel.differenceVector(points[spelers[i].state].pos,spelers[i].pos);
    if(spelers[i].point.DistanceToOtherPoint(points[spelers[i].state].point)<5){
      moveToA = false;
      spelers[i].state++;
    }
  } else {
    distance = spelers[i].point.DistanceToOtherPoint(points[spelers[i].state].point);
    spelers[i].vel.differenceVector(points[spelers[i].state].pos,spelers[i].pos);
    if(spelers[i].point.DistanceToOtherPoint(points[spelers[i].state].point)<5){
      moveToA = true;
      spelers[i].state++;
    }
  }

  if (spelers[i].state == points.length) {
    spelers[i].state = 0;
  }

  spelers[i].vel.magnitude = 1/40*(distance + 10);
  spelers[i].vel.draw(context,spelers[i].pos.dx,spelers[i].pos.dy,5);
}


  // spelers[0].pos.draw(context,0,0,1);
  // B.pos.draw(context,0,0,1);

}

setUp();

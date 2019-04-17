const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let temp,player;
let Points = [];
let moveToA = false;
let distance = 0;
let waypointIndex = 1;
let moveForward = true

function setUp(){

    CreatePoint(10);

  player = {};
  player.pos = new Vector2d((Points[0].pos.dx + Points[0].pos.dx)/2,(Points[0].pos.dy + Points[0].pos.dy)/2);
  player.vel = new Vector2d(0,0);
  player.acc = new Vector2d(0,0);
  player.point = new Point(player.pos.dx,player.pos.dy,10,"yellow");

  animate();
}

function CreatePoint(number){
    for (let i = 0; i < number; i++) {
        temp = {};
        temp.pos = new Vector2d(randomNumber(canvas.width),randomNumber(canvas.height));
        temp.vel = new Vector2d(0,0);
        temp.point = new Point(temp.pos.dx,temp.pos.dy,20,"red");
        Points.push(temp);
    }
    
}

function animate(){
    
  requestAnimationFrame(animate);
  // context.clearRect(0,0,1000,1000);
  context.fillStyle = "rgba(255,255,255,0.2)";
  context.fillRect(0,0,canvas.width,canvas.height);

  DrawLines();


  DrawPoints();

  player.vel.add(player.acc);
  player.pos.add(player.vel);
  player.point.position(player.pos);
  player.point.draw(context);

    if(moveForward) {
        distance = player.point.DistanceToOtherPoint(Points[waypointIndex].point);
        player.vel.differenceVector(Points[waypointIndex].pos,player.pos);
        if(player.point.DistanceToOtherPoint(Points[waypointIndex].point)<5){
            if(waypointIndex >= Points.length - 1) {
                moveForward = false;
                waypointIndex--;
                return;
            }
            waypointIndex++
        }
    } else {
        distance = player.point.DistanceToOtherPoint(Points[waypointIndex].point);
        player.vel.differenceVector(Points[waypointIndex].pos,player.pos);
        if(player.point.DistanceToOtherPoint(Points[waypointIndex].point)<5){
            if(waypointIndex <= 0) {
                moveForward = true;
                waypointIndex++;
                return
            }
            waypointIndex--;
        }
    }
    console.log(waypointIndex);
    

  player.vel.magnitude = 1/40*(distance + 1);
  player.vel.draw(context,player.pos.dx,player.pos.dy,20);

  // player.pos.draw(context,0,0,1);
  // B.pos.draw(context,0,0,1);

}

function randomNumber(maxnumber){
    return (Math.random() * maxnumber);
}

function DrawLines() {
    for (let i = 0; i < Points.length - 1; i++) {
        context.beginPath();
        context.strokeStyle = "gray";
        context.setLineDash([6, 10]);
        context.moveTo(Points[i].pos.dx,Points[i].pos.dy);
        context.lineTo(Points[(i + 1)].pos.dx,Points[(i + 1)].pos.dy);
        context.closePath();
        context.stroke();
        context.setLineDash([0]);
    }  
}

function DrawPoints(){
    for (let i = 0; i < Points.length; i++) {
        Points[i].pos.add(Points[i].vel);
        Points[i].point.position(Points[i].pos);
        Points[i].point.draw(context);
    }  
}

setUp();

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let A = new Point(200,200,20,"red");
A.draw(context);
A.drag();
let B = new Point(300,300,20,"blue");
B.drag();
let C = new Point(400,250,20,"green");
C.drag();
let D = new Point(500,350,20,"yellow");
D.drag();

let S = new Point(100,100,10,"black");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function drawline(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(drawline);

  l.letTwoPointsDefineLine(A,B);
    m.letTwoPointsDefineLine(C,D);

  l.draw(context);
  m.draw(context);

  S.x = l.intersection(m).x;
    S.y = l.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);
}

drawline();
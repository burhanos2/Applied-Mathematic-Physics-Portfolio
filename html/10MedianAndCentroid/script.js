const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"yellow");
let B = new Point(600,200,15,"yellow");
let C = new Point(800,100,15,"yellow");

let D = new Point(100,100,10,"grey");
let E = new Point(600,200,10,"grey");
let F = new Point(800,100,10,"grey");

let S = new Point(250,250,5,"white");

let a = new LinearFunction(1,1);//line
let b = new LinearFunction(1,1);//line
let c = new LinearFunction(1,1);//line

let d = new LinearFunction(1,1);
let e = new LinearFunction(1,1);
let f = new LinearFunction(1,1);


A.drag();
B.drag();
C.drag();

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
  
    a.letTwoPointsDefineLine(A,B);
    b.letTwoPointsDefineLine(B,C);
    c.letTwoPointsDefineLine(A,C);

    d.letTwoPointsDefineLine(A,E);
    e.letTwoPointsDefineLine(B,F);
    f.letTwoPointsDefineLine(C,D);




    D.x = (A.x + B.x) / 2;
    D.y = (A.y + B.y) / 2;

    E.x = (B.x + C.x) / 2;
    E.y = (B.y + C.y) / 2;

    F.x = (A.x + C.x) / 2;
    F.y = (A.y + C.y) / 2;

    
  

    S.x = e.intersection(f).x;
    S.y = e.intersection(f).y;
  
    a.draw(context);
    b.draw(context);
    c.draw(context);

	d.draw(context);
    e.draw(context);
    f.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    S.draw(context);

    D.draw(context);
    E.draw(context);
    F.draw(context);

    A.print(context, "A");
    B.print(context, "B");
    C.print(context, "C");
    S.print(context, "S");
    D.print(context, "D");
    E.print(context, "E");
    F.print(context, "F");


    
  
  }
  
animate();
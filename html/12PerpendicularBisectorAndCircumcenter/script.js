const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(750, 700, 20, "red");
let B = new Point(1150, 700, 20, "skyblue");
let C = new Point(950, 400, 20, "orange");

let d = new Point(0, 0, 15, "darkgray");
let e = new Point(0, 0, 15, "pink");
let f = new Point(0, 0, 15, "forestgreen");

let g = new LinearFunction(0, 0);
let h = new LinearFunction(0, 0);
let i = new LinearFunction(0, 0);
//j not used because too similar looking to i
let k = new LinearFunction(0, 0);
let l = new LinearFunction(0, 0);
let m = new LinearFunction(0, 0);

let s = new Point(0, 0, 10, "white");

A.drag();
B.drag();
C.drag();

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    g.letTwoPointsDefineLine(A, B);
    h.letTwoPointsDefineLine(B, C);
    i.letTwoPointsDefineLine(C, A);

    g.draw(context);
    h.draw(context);
    i.draw(context);
    
    l.slope = (-1 / h.slope);
    l.intercept = e.y - l.slope * e.x;

    m.slope = (-1 / i.slope);
    m.intercept = f.y - m.slope * f.x;

    k.slope = (-1 / g.slope);
    k.intercept = d.y - k.slope * d.x;
    
    d.x = A.x + ((B.x - A.x) / 2);
    d.y = A.y + ((B.y - A.y) / 2);

    e.x = B.x + ((C.x - B.x) / 2);
    e.y = B.y + ((C.y - B.y) / 2);

    f.x = C.x + ((A.x - C.x) / 2);
    f.y = C.y + ((A.y - C.y) / 2);

    s.x = l.intersection(m).x;
    s.y = l.intersection(m).y;

    l.draw(context);
    m.draw(context);
    k.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);

    d.draw(context);
    e.draw(context);
    f.draw(context);
    
    s.draw(context);

    A.print(context, "A");
    B.print(context, "B");
    C.print(context, "C");
    d.print(context, "d");
    e.print(context, "e");
    f.print(context, "f");
    s.print(context, "s");

    let distanceToC = s.DistanceToOtherPoint(C);

    context.beginPath();
    context.strokeStyle = "lime";
    context.arc(s.x, s.y, distanceToC, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = "black"; 
    context.closePath();

    requestAnimationFrame(update);
}

update();
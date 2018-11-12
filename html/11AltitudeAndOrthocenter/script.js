
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

let A = new Point(750, 700, 20, "black");
let B = new Point(1150, 700, 20, "red");
let C = new Point(950, 400, 20, "orange");

let a = new LinearFunction(0, 0);
let b = new LinearFunction(0, 0);
let c = new LinearFunction(0, 0);

let d = new LinearFunction(0, 0);
let e = new LinearFunction(0, 0);
let f = new LinearFunction(0, 0);

let S = new Point(0, 0, 10, "white");

A.drag();
B.drag();
C.drag();

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    a.letTwoPointsDefineLine(A, B);
    b.letTwoPointsDefineLine(B, C);
    c.letTwoPointsDefineLine(C, A);

    a.draw(context);
    b.draw(context);
    c.draw(context);
    
    d.slope = (-1 / b.slope);
    d.intercept = A.y - d.slope * A.x;

    e.slope = (-1 / c.slope);
    e.intercept = B.y - e.slope * B.x;

    f.slope = (-1 / a.slope);
    f.intercept = C.y - f.slope * C.x;

    S.x = d.intersection(e).x;
    S.y = d.intersection(e).y;

    d.draw(context);
    e.draw(context);
    f.draw(context);

    A.draw(context);
    B.draw(context);
    C.draw(context);
    
    S.draw(context);

    requestAnimationFrame(update);
}

update();
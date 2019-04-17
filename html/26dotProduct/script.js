const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A,B,C, v, l, m, va, vb;

function setUp(){
  A = new Point(100,200,30,"yellow");
  B = new Point(200,400,30,"Red");
  C = new Point(500,400,30,"white"); 
  
  A.drag();
  B.drag();
  C.drag();
  
  v = new Vector2d(B.x-A.x, B.y-A.y);
  va = new Vector2d(1,1);
  vb = new Vector2d(1,1);
  
  l = new LinearFunction(1, 0);
  m = new LinearFunction(1, 0);
  animate();
}


function animate()
{
	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	l.letTwoPointsDefineLine(A, C);
	m.slope= -1/l.slope;
	m.intercept = A.y - m.slope*A.x;
	v.dx = B.x - A.x; v.dy= B.y - A.y;
	va.dx = C.x - A.x; va.dy = C.y - A.y;
	vb.dx = -va.dy; vb.dy = va.dx;
	va.magnitude = 1;
	vb.magnitude = 1;
	va.magnitude = v.dot(va);
	vb.magnitude = v.dot(vb);	
	A.draw(context);
	B.draw(context);
	C.draw(context);
	
	v.draw(context, A.x, A.y, 1);
	va.draw(context, A.x, A.y, 1);
	vb.draw(context, A.x, A.y, 1);
	
	l.draw(context);
	m.draw(context);
}

setUp();
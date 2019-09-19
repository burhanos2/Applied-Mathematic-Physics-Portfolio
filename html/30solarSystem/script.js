const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

    //script.js
        let gameObject = {};
        let dAngle = 0.08;
        let pivot = new Vector2d(canvas.width/2,canvas.height/2);
        let rotationRadius = 200;

        function setUp(){
          gameObject.pos = new Vector2d(0,0);
          gameObject.relPos = new Vector2d(1,0);
          gameObject.relPos.magnitude = rotationRadius;
          gameObject.Point = new Point(0,0,30);
		  
          gameObject.draw = function()
		  {
          gameObject.Point.x = gameObject.pos.dx;
          gameObject.Point.y = gameObject.pos.dy;
          gameObject.Point.draw(context);
          }
		  
          animate();
        }

        function animate(){
          context.clearRect(0,0,canvas.width,canvas.height);
          requestAnimationFrame(animate);
          gameObject.relPos.angle+=dAngle;
          gameObject.pos.sumVector(gameObject.relPos,pivot);
          gameObject.draw();
        }

        setUp();
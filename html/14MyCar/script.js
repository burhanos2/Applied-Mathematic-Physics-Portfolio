const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "background.jpg";

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.pos = 0;
frontWheel.vel = 10;
frontWheel.src = "wheel.png";

let backWheel = new Image();
backWheel.rot = 0;
backWheel.pos =	0;
backWheel.vel = 10;
backWheel.src = "wheel.png";

let car = new Image();
car.pos =	0;
car.vel = 10;
car.src = "auto.png";

background.addEventListener('load',()=>{
  animate();
})

addEventListener ('keydown',(evt)=>{
	console.log(evt.key);
	switch (evt.key) 
	{
	  case "ArrowRight":
      frontWheel.vel += 1;
	  backWheel.vel -= 1;
      break;
      case "ArrowLeft":
      frontWheel.vel -= 1;
	  backWheel.vel -= 1;
      break;
	}
})

function animate()
{
	backWheel.rot = frontWheel.rot;
	backWheel.pos =	frontWheel.pos - 540;
	backWheel.vel = frontWheel.vel;
	
	car.pos =	frontWheel.pos - 275;
	car.vel = frontWheel.vel;

  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  
  context.drawImage(background,0,0,canvas.width,canvas.height);
  
  context.save();
  context.translate(frontWheel.pos, canvas.height - frontWheel.height/2);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();
  
  context.save();
  context.translate(backWheel.pos, canvas.height - backWheel.height/2);
  context.rotate(backWheel.rot);
  context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
  context.restore();
  
  context.save();
  context.translate(car.pos, canvas.height - car.height/2);
  context.drawImage(car,-car.width/2,-car.height/2);
  context.restore();
  
  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;
   
  if(backWheel.pos > canvas.width)
  {
    frontWheel.pos = 0;
	 backWheel.pos = 0;
  }
  
	if(frontWheel.pos < 0)
	{
    backWheel.pos = canvas.width;
	 frontWheel.pos = canvas.width;
  }
}

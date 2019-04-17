const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cog = new Image();
cog.src = "cog_12_1.png";
cog.rotation = 0;

let background = new Image();
background.src = "background.png";

cog.addEventListener('load',()=>{
	animate();
})

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	requestAnimationFrame(animate);
	
	context.drawImage(background,0,0);
	context.save();
	context.translate(400,300);
	context.rotate(cog.rotation);
	context.drawImage(cog, -0.5*cog.width, -0.5*cog.height);
	context.restore();
	
	context.save();
	context.translate(200,200);
	context.rotate(-cog.rotation);
	context.drawImage(cog, -0.5*cog.width, -0.5*cog.height);
	context.restore();
	cog.rotation += 0.01;
}
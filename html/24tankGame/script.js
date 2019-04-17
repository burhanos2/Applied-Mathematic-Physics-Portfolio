class Bullet{
  constructor(){
    this.pos = new Vector2d(100,100);
    this.vel = new Vector2d(2,2);
    this.spriteSheet = new Image();
    this.spriteSheet.src = "Tanks_sheet.png";
  }

  update(){
    this.pos.add(this.vel);
  }

  draw(){
    let sx = (21%8)*32;
    let sy = Math.floor(21/8)*32;
    context.save();
    context.translate(this.pos.dx,this.pos.dy)
    context.drawImage(this.spriteSheet,sx,sy,32,31,-32,-32,64,64);
    context.restore();
  }

}


class Tank {
  constructor() {
    this.sx;
    this.sy;
    this.sw = 32;
    this.sh = 32;
    this.pos = new Vector2d(100,100);
    this.vel = new Vector2d(0,0);
    this.w =64;
    this.h = 64;

    this.spriteSheet = new Image();
    this.spriteSheet.src = "Tanks_sheet.png";
    this.startFrame = 1;
    this.stopFrame = 9;
    this.counter = this.startFrame;
  }

  move(){
    this.pos.add(this.vel);
    this.counter++;
    if(this.counter >= this.stopFrame){
      this.counter = this.startFrame
    }
    this.sx = this.counter % 8 * 32;
    this.sy = Math.floor(this.counter/8)* 32;
    if(this.pos.dx < 0){
      this.pos.dx = canvas.width;
    }
    if(this.pos.dx > canvas.width){
      this.pos.dx = 0;
    }
    if(this.pos.dy < 0){
      this.pos.dy = canvas.height;
    }
    if(this.pos.dy > canvas.height){
      this.pos.dy = 0;
    }
  }

  draw(){
    context.save();
    context.translate(this.pos.dx,this.pos.dy);
    context.rotate(this.vel.angle  + Math.PI/2);
    context.drawImage(this.spriteSheet,this.sx,this.sy,this.sw,this.sh,-32,-32,64,64);
    context.restore();
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt,fps;
let greenTank;
let bullets = [];



function setUp(){
  startTime = new Date(); // set starttime
  fps = 10; //frames per second
  greenTank = new Tank();
  update();
}


function update(){
  requestAnimationFrame(update);
  context.clearRect(0,0,canvas.width,canvas.height);
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;
  if(dt >  1/fps){
    startTime = new Date();
    greenTank.move();
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].update();
      if(bullets[i].pos.dx < 0 || bullets[i].pos.dx > canvas.width || bullets[i].pos.dy < 0  || bullets[i].pos.dy > canvas.height ){
        bullets.splice(i,1);
      }
    }
  }
  greenTank.draw();
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].draw();
  }

}

setUp();

addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowRight":
      greenTank.vel.angle += 0.1;
    break;
    case "ArrowLeft":
      greenTank.vel.angle -= 0.1;
    break;
    case "ArrowUp":
        greenTank.vel.magnitude += 1;
        fps += 5;
    break;
    case "ArrowDown":
      if(greenTank.vel.magnitude > 1){
        greenTank.vel.magnitude -= 1;
        fps -= 5;
      } else {
        greenTank.vel.magnitude = 0;
        fps = 0;
      }
    break;
    case " ":
      let bullet = new Bullet();
      bullet.pos.dx = greenTank.pos.dx;
      bullet.pos.dy = greenTank.pos.dy;
      bullet.vel.dx = greenTank.vel.dx * 2;
      bullet.vel.dy = greenTank.vel.dy * 2;
      bullets.push(bullet);
    break;
    default:

  }
})

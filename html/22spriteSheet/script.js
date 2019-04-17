class Trump {
  constructor() {
    this.sx;
    this.sy;
    this.sw = 100;
    this.sh = 100;
    this.x = 10;
    this.y = 10;
    this.w = 200;
    this.h = 200;

    this.rowwidth = 6;
    this.rowheight = 4;
    this.amount = this.rowwidth * this.rowheight;

    this.spriteSheet = new Image();
    this.spriteSheet.src = "trump_run.png";
    this.startFrame = 0;
    this.stopFrame = this.amount;
    this.counter = this.startFrame;
  }

  move(){
    this.counter++;
      if (this.counter >= this.stopFrame)  {
        this.counter = this.startFrame;
      }
      this.sx = (this.counter % this.rowwidth) * this.sw;
      this.sy = Math.floor(this.counter/ this.rowwidth) * this.sh;
  }

  draw(){
    context.drawImage(this.spriteSheet,this.sx,this.sy,this.sw,this.sh,this.x,this.y,this.w, this.h);
  }
}

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt,fps;
let greenTank;

function setUp(){
  startTime = new Date(); // set starttime
  fps = 20; //frames per second
  greenTank = new Trump();
  update();
}


function update(){
  requestAnimationFrame(update);
  context.clearRect(0,0,canvas.width,canvas.height);
  currentTime = new Date();
  dt = (currentTime - startTime)/1000;

  if(dt >  1/fps){
    console.log(dt);
    startTime = new Date();
    greenTank.move();

  }
  greenTank.draw();

}

setUp();

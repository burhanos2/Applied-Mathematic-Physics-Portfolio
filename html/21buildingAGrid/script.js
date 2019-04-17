const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startTime,currentTime,dt,frameRate;
let sx,sy,sw,sh,counter;
let numCells,numRows;


function setUp(){
  startTime = new Date();
  frameRate = 10;
  sw = 100;
  sh = 100;
  counter = 0;
  numCells = 39;
  numRows = 8;
  update();
}


function update(){
  requestAnimationFrame(update);
  currentTime = new Date();
  dt = currentTime - startTime;
  if(dt > 1000/frameRate){
    context.clearRect(0,0,canvas.width,canvas.height);
    sx = counter % numRows * sw;
    sy = Math.floor(counter / numRows) * sh;
    context.fillRect(sx,sy,sw,sh);

    startTime = new Date();
    counter++;
    if(counter > numCells){
      counter = 0;
    }
  }

}

setUp();

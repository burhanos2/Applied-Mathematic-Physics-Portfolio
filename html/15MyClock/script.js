const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

//let temp = 0;

let midX = canvas.width/2;
let midY = canvas.height/2;

let face = new Image();
face.src = "clockFace.png";

let myDate = new Date();

let secondHand = new Image();
secondHand.src = "secondHand.png";

let minutesHand = new Image();
minutesHand.src = "minutesHand.png"

let hoursHand = new Image();
hoursHand.src = "hoursHand.png"

face.addEventListener('load',()=>{
  animate();
});


function animate(){
  myDate = new Date();

  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.drawImage(face,midX-face.width/2,midY-face.height/2);



  //minutes hand
   let minutes = myDate.getMinutes();
  //let minutes = 0;
  context.save();
  context.translate(midX,midY);
  context.rotate(minutes*2*Math.PI/60);
  context.drawImage(minutesHand,-22,-185);
  context.restore();

  //hours hand
   let hours = myDate.getHours();
  context.save();
  context.translate(midX,midY);
  context.rotate(hours*2*Math.PI/12 + minutes*2*Math.PI/720);
  context.drawImage(hoursHand,-22,-120);
  context.restore();

  //seconds hand
  let seconds = myDate.getSeconds();
  //let seconds = temp;
  context.save();
  context.translate(midX,midY);
  context.rotate(seconds*2*Math.PI/60);
  context.drawImage(secondHand,-70,-234);
  context.restore();

  //temp += 0.1;
}

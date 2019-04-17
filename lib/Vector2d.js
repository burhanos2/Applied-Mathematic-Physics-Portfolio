class Vector2d {
  constructor(dx,dy) {
    this.dx = dx;
    this.dy = dy;
  }

  add(vector){
    this.dx += vector.dx;
    this.dy += vector.dy;
  }

  get magnitude(){
    return Math.sqrt(this.dx*this.dx+this.dy*this.dy);
  }


  set magnitude(mag){
    let tempAngle = this.angle;
    this.dy = mag*Math.sin(tempAngle);
    this.dx = mag*Math.cos(tempAngle);
  }

    set angle (setAngle){
    let tempMag = this.magnitude;
    this.dy = tempMag*Math.sin(setAngle);
    this.dx = tempMag*Math.cos(setAngle);
}
  
  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  differenceVector(a,b){
    this.dx = a.dx - b.dx;
    this.dy = a.dy - b.dy;
  }

  sumVector(a,b){
    this.dx = a.dx + b.dx;
    this.dy = a.dy + b.dy;
}
  
  dot(vector)
  {
	  return (this.dx * vector.dx) + (this.dy * vector.dy);
  }
  
  draw(context,x,y,scale){
    let arrowWidth = 30;
    let shaftHeight = 5;
    let shaftWidth = this.magnitude * scale - arrowWidth;
    let arrowHeight = 9;

    context.save();
    context.translate(x,y);
    context.rotate(Math.atan2(this.dy,this.dx))
    context.fillStyle = "rgba(255,255,255,0.4)";

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,-shaftHeight);
    context.lineTo(shaftWidth,-shaftHeight);
    context.lineTo(shaftWidth,-arrowHeight);
    context.lineTo(shaftWidth+arrowWidth,0);
    context.lineTo(shaftWidth,arrowHeight);
    context.lineTo(shaftWidth,shaftHeight);
    context.lineTo(0,shaftHeight);
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
  }
}

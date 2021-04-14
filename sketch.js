var start = 0;
var start2 = 0;
var angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  translate(width/2,height/2);
 // rotate(angle);
  var n = map(noise(start)*10, 0, 10, -10, 15);
  var m = map(noise(start2)*10, 0, 10, -10, 15);
  fill(255);
  // noFill();
   stroke(0);
  beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(x*n, y*n);
        vertex(y*m, x*m);
    }
  }
  endShape();
  
    beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(-x*n, -y*n);
        vertex(-y*m, -x*m);
    }
  }
  endShape();
  
      beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(-x*n, y*n);
        vertex(y*m, -x*m);
    }
  }
  endShape();
  
        beginShape();
    for (let y = 0; y< 40; y += 10){
      for (let x = 0; x< 40; x += 10){
        vertex(x*n, -y*n);
        vertex(-y*m, x*m);
    }
  }
  endShape();
  angle += 0.02;
  start+=0.04;
  start2+=0.02;
}
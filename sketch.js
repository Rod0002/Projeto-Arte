let angle = 0;

function setup() {
  createCanvas(700, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(8)
  strokeWeight(24)
}


function draw() {
  background(35);

  translate(width/2,height/2);
  let scl = map(mouseX,0,width,0.2,3);
  scale(scl);

    for(let i=0; i<100; i++){
      fill(5*i,222*i,100-1*i);
      rect(0,0,400,400);
      scale(0.95);
      rotate(angle);
    }
    angle += 0.2;

    function mousePressed(){
      let fs = fullscreen();
      fullscreen(!fs);
    }
  }

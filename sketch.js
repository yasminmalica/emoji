function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
 // rosto
  fill( 255, 255, 0)
  ellipse(200, 200, 200, 200);

 // olhos
fill(0);
ellipse(160, 180, 20, 20);
ellipse(240, 180, 20, 20);
  
   // boca
  noFill();
  stroke(0);
  strokeWeight(5);
  arc (200, 220, 100, 50, 0, PI);
} 
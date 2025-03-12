function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(400);
  rectMode(CENTER);
  fill(0, 180, 140);
  stroke(3);
  strokeWeight(10);
  rect(180, 180, 80, 200, 10);
  //here is my red light code
  fill(255, 0, 0);
  stroke(1);
  strokeWeight(2);
  circle(180, 120, 50);
  //here is my yellow light code
  fill(255, 255, 0);
  stroke(1);
  strokeWeight(2);
  noStroke();
  circle(180, 180, 50);
    //here is my Green light code
  fill(0, 255,0);
  stroke(1);
  strokeWeight(2);
  circle(180, 240, 50);
    //here is my bamboo for traffic light code
  rectMode(CENTER);
  fill(400)
  stroke(1);
  strokeWeight(2)
  rect(180,380,10,200)
  //here is where i added gray outline to the traffic light frame#
  
}

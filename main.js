function preload() {
}

function setup()
{
  canvas=createCanvas(640,480);
  canvas.position(110.250);

  video = createCapture(VIDEO);
  video.hide();
  

 
}

function draw()
{
  image(video,100,50,320,240);
  
  fill(0,255,0);
  stroke(255,0,0);
  rect(390,60,20,220);

  fill(0,255,0);
  stroke(255,0,0);
  rect(110,60,20,220);

  fill(0,255,0);
  stroke(255,0,0);
  rect(130,60,260,20);

  fill(0,255,0);
  stroke(255,0,0);
  rect(130,260,260,20);
  
  fill(255,0,0);
  stroke(255,0,0);
  circle(120,65,20)

  fill(255,0,0);
  stroke(255,0,0);
  circle(120,275,20);

  fill(255,0,0);
  stroke(255,0,0);
  circle(400,65,20);

  fill(255,0,0);
  stroke(255,0,0);
  circle(400,275,20);

  
}

function take_snapshot()
{
  save("Ishaan.png");
}


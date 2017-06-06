var canvas;
var mic;
function setup()
{
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    mic = new p5.AudioIn();
    mic.start();
    
}
function draw()
{
 background(100);  
    var vol = mic.getLevel();
    fill(255,0,0,250);
    stroke(255);
    strokeWeight(10);
    ellipse(width/2,height/2,vol*width);
    
}
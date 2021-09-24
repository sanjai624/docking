var iss,issimg,bg;
var hasDocked=false;
var spacecraft,sc1,sc2,sc3,sc4;
function preload(){
sc1=loadImage("images/spacecraft1.png");
sc2=loadImage("images/spacecraft2.png");
sc3=loadImage("images/spacecraft3.png");
sc4=loadImage("images/spacecraft4.png");
bg=loadImage("images/spacebg.jpg");
issimg=loadImage("images/iss.png");
}
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);
  iss.scale=0.8;
  spacecraft=createSprite(400,330);
  spacecraft.addImage(sc1);
  spacecraft.scale=0.2;
}

function draw() {
  background(bg);  
  drawSprites();
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(sc2);
      spacecraft.y=spacecraft.y+2;
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(sc3);
      spacecraft.x=spacecraft.x-2; 
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(sc4)
      spacecraft.x=spacecraft.x+2; 
    }
    

  }
  if(spacecraft.y<=iss.y+170&spacecraft.x<=iss.x-50){
    hasDocked=true;
    textSize(30);
    fill("white");
    text("DOCKING SUCCESSFUL",300,350);
    
    
  }
  
}

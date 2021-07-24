var issImg,sc1Img,sc2Img,sc3Img,sc4Img,bgImg
var spacecraft 
var hasDocked = false;
var iss,spacecraft




function preload(){

  issImg=loadImage("iss.png")
  sc1Img=loadImage("spacecraft1.png")
  sc2Img=loadImage("spacecraft2.png")
  sc3Img=loadImage("spacecraft3.png")
  sc4Img=loadImage("spacecraft4.png")
  bgImg = loadImage("spacebg.jpg")

  
}

function setup() {
  createCanvas(1495,750);
    
  iss=createSprite(900,130);
	iss.addImage(issImg)
	iss.scale=0.50

  spacecraft=createSprite(850,650);
	spacecraft.addImage(sc1Img)
	spacecraft.scale=0.25



}

function draw() {
  background(bgImg); 
  spacecraft.addImage(sc1Img)
  if(!hasDocked){
   // write code to set random x position for spacecraft
   spacecraft.x = spacecraft.x+ random(-1,1)
  
  if(keyDown("UP_Arrow")){
   spacecraft.y = spacecraft.y-2

  }
  if(keyDown("Down_Arrow")){
    spacecraft.addImage(sc2Img)
  }
  if(keyDown("Left_Arrow")){
    spacecraft.addImage(sc4Img)
    spacecraft.x = spacecraft.x -1
  }
  if(keyDown("Right_Arrow")){
    spacecraft.addImage(sc3Img)
    spacecraft.x = spacecraft.x +1
  }
 
  }
  if(spacecraft.y<=(iss.y + 70)&& spacecraft.x <=(iss.x-10)){
    hasDocked = true
    textSize(25)
    fill("White")
    text("Docking Sucessful!",200,300)

  }
  
  drawSprites();
}
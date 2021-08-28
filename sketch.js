var jake
var PLAY=1;
var END=0;
var gameState=1;
var path

function preload(){
  //pre-load images
 JakeImg=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
  pathImg =loadImage ("path.png")
}

function setup(){
   createCanvas(400,400);
 path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

 

  //create sprites here
   path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
  
 
//creating jake running
jake = createSprite(70,380,20,20);
jake.addAnimation("jakeImg",JakeImg)
jake.scale=1;
}

function draw() {
  background(0);
   if (path.y > 400){
    
    path.y =height/2;
  }
  
if(gameState===PLAY){
 
  jake.x = World.mouseX;
  edges= createEdgeSprites();
  jake.collide(edges);}
  drawSprites();
}


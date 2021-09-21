var BgImg ,bg;
var player,fighterImg,fighter_fighting
var ghost,ghostImg,ghostgroup
var heart1,heart2,heart3
var heart1Img,heart2Img,heart3Img
var life = 3;
var bullets =10;
var heart1,heart2,heart3

function preload() {
  BgImg =loadImage ("background.jpg");

 fighterImg = loadImage("fighter_2.png")
 fighter_fighting=loadImage ("fighter_3.png")
 heart1Img-loadImage ("heart1.png")
 heart2Img-loadImage ("heart2.png")
 heart3Img-loadImage ("heart3.png")

ghostImg=loadImage ("ghost.png")


}


function setup() {

  createCanvas(windowWidth,windowHeight);

  bg= createSprite (displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage (BgImg)
  bg.scale=5


  player= createSprite (displayWidth-1000,displayHeight-300,50,50)
  player.addImage (fighterImg);
  player.scale=0.6
  player.debug=true;
  player.setCollider ("rectangle",0,0,300,300);

  heart1=createSprite (displayWidth-150,40,20,20)
  heart1.visible=false;
  heart1.addImage ("heart1",heart1Img)
  heart1.scale=0.5;

  heart2=createSprite (displayWidth-100,40,20,20)
  heart2.visible=false;
  heart2.addImage ("heart2",heart2Img)
  heart2.scale=0.5; 

   heart3=createSprite (displayWidth-150,40,20,20)
  
  heart3.addImage ("heart3",heart3Img)
  heart3.scale=0.5; 

  



   ghostgroup=new Group ();
    bulletgroup=new Group ();
}

function draw() {
  background(255,255,255);  

  if(keyDown("UP_ARROW")|| touches.length>0){
    player.y=player.y-30
  }

  if(keyDown("DOWN_ARROW")|| touches.length>0){
    player.y=player.y+30
  }

  if (keyWentDown("space")){
    bullet=createSprite (displayWidth-1150,player.y-30,20,10)
   bullet.velocityX=10;
  }
  drawSprites();
}

function spawnGhost (){
  if (framCount%50===0){
    ghost=createSprite (random(500,1100),random(100,500),40,40);
    ghost.addImage ("ghostImg ")
   ghost.scale =0.15;
   ghost.velocityX=-3
   ghost.debug-true;
   ghost.setCollider ("rectangle",0,0,400,400);
  ghost.lifetime(500);
  
  ghostgroup.add(ghost)
}
}
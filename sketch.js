var cat,mouse,backgroundImage;


function preload(){
  
  //load Images of the object
  backgroundImage = loadImage("background0.png");
  catImage=loadImage("cat0.png");
  mouseImage=loadImage("mouse0.png");
  catImage = loadAnimation("catlastImage1.png","catImg3.png");

} 




function setup() {
  createCanvas(700, 700);
  
  // creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5
  
  //creating mouse and cat
  cat= createSprite(480,220,20,50);
  cat.addImage(bowImage);
  cat.scale=1
  
  
  
   
  
}

function draw() {
  
  // moving and infiite ground
   background.velocityX = -3;
  
  if (background.x < 0){
    background.x = background.width/2;
  }
  
  //moving cat with mouse pointer
  cat.y = World.mouseY;
  
  function keypressed(){
   
   if (keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg3);
     cat.changeAnimation("catRunning");
     
   }
   if(cat.x - mouse.x < (cat.width - mouse.width)/2)
  {
    
  }
   
   
   
 
 
  
   if(cat.isTouching(mouse)){
     mouse.changeAnimation("catlastImage")
   }
 
  
  drawSprites();
text(mouseX + "," + mouseY,10,45);
  }  
  
  
}




 function mouse() {
   var mouse= createSprite(100,100,60,10);
   mouse.addImage(mouseImage);
   mouse.x =360;
   mouse.y=cat.y;
   mouse.velocityX = -4;
   mouse.lifetime = 100;
   mouse.scale = 0.3;
   
 }
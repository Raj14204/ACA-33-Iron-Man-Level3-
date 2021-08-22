var ironman;
var Diamondimg,diamondGroup,diamondscore,diamondsound;
var bg, backgroundImg;
var stoneIMG,stonesgroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanimg=loadImage("images/iron.png");
  stoneIMG=loadImage("images/stone.png");
  Diamondimg=loadImage("images/diamond.png");
  diamondsound=loadsound("sound/coinsound.mp3")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=-5;

  ironman=createSprite(50,500);
  ironman.addImage(ironmanimg)
  ironman.scale=0.4; 
  stonesgroup= new Group();
  diamondGroup=new Group();
}

function draw() {
  if(bg.y<225){
    bg.y=bg.width/4;
  }
  ironman.x= mouseX;
  ironman.y= mouseY; 
if (ironman.x<50){
   ironman.x=50;

}
if (ironman.x>(950)){
  ironman.x=950;
}
genratestone();

for (var i=0;i<(stonesgroup).length;i++){
  var temp=(stonesgroup).get(i);
    if (temp.isTouching(ironman)){
      ironman.collide(temp)
}
}
genratediamond();
  for(var i=0;i<(diamondGroup).length;i++){
    var temp=(diamondGroup).get(i);
      if (temp.isTouching(ironman)){
        temp.destroy;  
        diamondscore++;
        
        temp=null;    
    }  
}
drawSprites()
textSize(20);
fill("brown")
text("diamond collected:" + diamondscore,500,50);


   
}
function genratestone(){
 if (frameCount % 70===0){
    var stone=createSprite(1000,600,10,10);
    stone.x=random(50,450);
    stone.addImage(stoneIMG);
    stone.scale=0.5;
    stone.velocityY=-5;

    stone.lifetime=250;  
    stonesgroup.add(stone);

} 
}

function genratediamond(){
  if (frameCount % 50===0){
      var diamond=createSprite(1000,600,10,10);
      diamond.x=round (random(80,350));
      //console.log(coin.y);\
      diamond.addImage(Diamondimg);
      diamond.scale=0.5;
      diamond.velocityY=-5;
      diamond.lifetime=1200;
      diamondGroup.add(diamond);
  
  
  }
}
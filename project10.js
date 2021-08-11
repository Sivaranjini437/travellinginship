var sea,ship;
var edges;

function preload(){
  seaimage = loadImage("sea.png");
  shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");
  edges=createEdgeSprites;
  
sea=createSprite(400,200,50,50);
sea.addImage(seaimage);
sea.velocityX = -3;
sea.scale=0.3;

ship = createSprite(120,200,30,30);
ship.addAnimation("Ship",shipimage);
ship.scale =0.25;
  
}

function draw() {
  
  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = sea.width/8;
  }
  
  drawSprites();
}
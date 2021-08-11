var ship;
var sea;
var edges;

function preload(){
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,150,20,50);
  ship.addAnimation("ship",shipimage)
  ship.scale=0.5;
  edges=createEdgeSprites();
sea=createSprite(200,180,400,20);
sea.addImage(seaimage);
}

function draw() {
  background("blue");
  drawSprites();
}
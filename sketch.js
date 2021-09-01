var ship_moving;
var seaImage;
var ship;

function preload(){
ship_moving = loadAnimation("ship-1.png , ship-2.png , ship-3.png , ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  seaImage = createSprite("200,200,200,200")
  seaImage.velocityX = -4;
  ship = createSprite("200,300,100,50")
  ship.addAnimation("moving", ship_moving);
}

function draw() {
  background("blue");
 
}
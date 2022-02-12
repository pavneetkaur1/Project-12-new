var jake 
var jake_animation
var path
var path_animation
var power
var power_animation
var energy
var energy_animation
var coin
var coin_animation
var bomb
var bomb_animation
var path_invisible1
var path_invisible2

function preload(){
  //pre-load images
 jake_animation = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
 path_animation = loadImage("path.png");
 //path_animation = loadImage("road1.png");
 power_animation = loadAnimation("power.png");
 energy_animation = loadAnimation("energyDrink.png");
 coin_animation = loadAnimation("coin.png");
 bomb_animation = loadAnimation("bomb.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200);
  path.addImage("normal path", path_animation);
  path.velocityY = 4;
  path.scale = 1.2;

  jake = createSprite(200, 330, 40, 90);
  jake.addAnimation("running", jake_animation);

  path_invisible1 = createSprite(5, 200, 80, 400);
  path_invisible1.visible = false;
  path_invisible2 = createSprite(395, 200, 80, 400);
  path_invisible2.visible = false;
}

function draw() {
  background(0);
  jake.x = mouseX;
if(path.y > 400){
  path.y = path.height/4;
}

console.log(path.y, path.height)

jake.collide(path_invisible1);
jake.collide(path_invisible2);
  drawSprites();

}

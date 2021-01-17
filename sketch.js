var cat, catImg1, catImg2, tcatImg2
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4
var background, backgroundImage

function preload() {
  catImg1 = loadAnimation("images/tomOne.png");
  catImg2 = loadAnimation("images/tomTwo.png");
  catImg3 = loadAnimation("images/tomThree.png");
  catImg3 = loadAnimation("images/tomFour.png");
  mouseImg1 = loadAnimation("images/jerryOne.png");
  mouseImg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
  mouseyImg3 = loadAnimation("images/jerryFour.png");

  backgroundImage = loadImage("images/garden.png")
}

function setup() {
  createCanvas(1000, 800);

  cat = createSprite(800, 400)
  cat.addAnimation("catSleeping", catImg1)
  cat.scale = 0.2

  mouse = createSprite(400, 600)
  mouse.addAnimation("mouseStanding", mouseImg1)
  mouse.scale = 0.2
}

function draw() {
  text(mouseX + ',' + mouseY, 10, 45)

  background(backgroundImage);

  drawSprites();

  // function keyPressed(){
  // if (keyCode === LEFT_ARROW) {
  //   cat.velocityX = -5;
  //     cat.addAnimation("catRunning", catImg2);
  //     cat.changeAnimation("catRunning");
  //     mouse.addAnimation("mouseTeasing", mouseImg2);
  //     mouse.changeAnimation("mouseTeasing");
  // }

  // if (cat.x - jerry.x < (cat.width - jerry.width) / 2) {
  //   cat.addAnimation("catSitting", catImg1)
  //   cat.changeAnimation("catSitting")
  //   jerry.addAnimation("jerryExamining", jerryImg1)
  //   jerry.changeAnimation("jerryExamining")
  // }
}

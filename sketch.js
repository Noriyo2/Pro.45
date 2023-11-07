var bg, bgImg
var car,upImg,rightImg,leftImg,downImg
var zombie,zombieImg
var edges

function preload(){
  bgImg= loadImage("background.jpg")
  zombieImg = loadImage("zombie.png")
  upImg = loadImage("car.png")
  downImg = loadImage("down.png")
  rightImg = loadImage("Right.png")
  leftImg = loadImage("left.png")

}



function setup(){

  createCanvas(900,500);

  bg= createSprite(450,250)
  bg.addImage(bgImg)
  bg.scale = 1.4

  car = createSprite(450,250)
  car.addImage("up",upImg)
  car.addImage("down",downImg)
  car.addImage("left",leftImg)
  car.addImage("right",rightImg)
  car.scale =0.5

  edges= createEdgeSprites()


    
}

function draw(){

  background("black");
    
  drawSprites();
  car.bounceOff(edges)
  
  if(keyDown("w") ){
    car.velocityY = -5;
    car.velocityX =0;
    car.changeImage("up")

  }
  if(keyDown("s") ){
    car.velocityY = 5
    car.velocityX =0;
    car.changeImage("down")
  }
  if(keyDown("a")  ){
    car.velocityX = -5
    car.velocityY =0;
    car.changeImage("left")
  }
  if(keyDown("d")  ){
    car.velocityX = 5
    car.velocityY =0;
    car.changeImage("right")
  }
  
  spawnZombies()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}

function spawnZombies(){
  if(frameCount % 100 == 0){
    zombie = createSprite(random(50,850), random(50,450))
    zombie.addImage(zombieImg)
    zombie.scale= 0.4
  }
  
}

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bannanaGroup, obstacleGroup;
var score, ground, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(20,200,20,20)
  monkey.addImage("running", monkey_running);
  
  bananaGroup=group;
}


function draw() {
   background(180);
  
   stroke("black");
   textSize(20);
   fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  
  if(keyDown("space")&& monkey.y >= 161.5) {
        trex.velocityY = -12;
        jumpSound.play();
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  bananas();
}

function bananas(){
  if (frameCount % 80 === 0) {
    banana=createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(rand(120,200));
    banana.velocityX=-10;
    banana.lifetime=40;
    bananaGroup.add(banana);
  }
}
if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }






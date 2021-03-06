const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var background1,backgroundImg;
var fairy,fairyImg;
var star,starImg,starBody;
var music;


function preload()
{
   //preload the images here
   backgroundImg=loadImage("images/starnight.png");
   fairyImg=loadImage("images/fairy1.png");
   starImg=loadImage("images/star.png");
   music=loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800,750);

  engine=Engine.create();
  world=engine.world;
  console.log(engine);

  background1= createSprite(400,375,800,750);
  background1.addImage(backgroundImg);

  fairy=createSprite(200,500,10,10)
  fairy.addImage(fairyImg);
  fairy.scale=0.3;

 

 // var object_options={
  // isStatic:true,
//}

 star=createSprite(700,50,10,10);
 star.addImage(starImg);
 star.scale=0.3;

  starBody=Bodies.rectangle(700,50,10,10);
  World.add(world,starBody);

}


function draw() {
  background("black");
 Engine.update(engine);

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(keyDown("left")){
    fairy.x=fairy.x-10;
  }
  if(keyDown("right")){
    fairy.x=fairy.x+10;
    music.play();
  }
  //Matter.Body.setVelocity(starBody,+2);
      if(keyDown("down")){
     isStatic:false;
    }

      if(starBody.position.y>470){
         isStatic :true,
         music.stop();
      }

      //star.display();
      drawSprites(); 
    

}


 

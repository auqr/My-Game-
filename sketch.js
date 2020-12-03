var player;
var enemy;
var platform;
var platform2;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	platform=createSprite(100,50,150,25);
	platform2=createSprite(300,200,150,25);
	//platform.velocityY = 2;
	//platform2.velocityY = 2;
	
	player=createSprite(100,30,30,30)

	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  player.y=player.y+0.1;

  player.collide(platform);
  player.collide(platform2);
 
  
  SpawnPlatform();
  controlPlayer();
  drawSprites();
 
}


function SpawnPlatform() {

	

	if(platform.y>=700) {
		platform.y= -10;
		platform.x= Math.round(random(1,800));
	}

	if(platform2.y>700) {
		platform2.y= -10;
	    platform2.x= Math.round(random(1,800));
	}
}


function controlPlayer() {

	if(keyDown("W")) {
		player.velocityY-4;
	}

	//if(keyDown("S")) {
	//	player.velocityY = 4;
	//}

	if(keyDown("A")) {
		player.velocityX = -4;
	}

	if(keyDown("D")) {
		player.velocityX = 4;
	}


}







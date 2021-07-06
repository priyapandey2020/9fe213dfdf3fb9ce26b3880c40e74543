var helicopterImg, bgImg;
var helicopterSprite, packageSprite;
var packageBody,boxBottomBody, boxLeftBody, boxRightBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	helicopterImg=loadImage("helicopter.png")
	bgImg=loadImage("bg.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 50,200,200);
	packageSprite.shapeColor = "yellow"
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterImg)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	boxBottomBody = new Box(400, 610, 200,20);
 	boxLeftBody = new Box(310, 570, 20,100);
 	boxRightBody = new Box(490, 570, 20,100);

	packageBody = Bodies.circle(width/2 , 100 , 20 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

}


function draw() {
	Engine.update(engine);
	background(bgImg);
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	boxRightBody.display();
	boxLeftBody.display();
	boxBottomBody.display();

	drawSprites(); 
}

function keyPressed() {
	
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)

	  } else if (keyCode === RIGHT_ARROW) {

		helicopterSprite.x=helicopterSprite.x+20;
		translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
		
	  }
	  
	if (keyCode === DOWN_ARROW) {
	   //make the static property of packageBody as false
	   Matter.Body.setStatic(packageBody,false);
	}
}
  

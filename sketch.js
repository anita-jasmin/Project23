var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;//creating bodies;shapes
const Body = Matter.Body;//add properties to the body

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	block1-new block(width/2,height-35,200,20);
	block2=new block(200,200,20,20);
	block3=new block(200,100,40,40);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	//block1=createSprite(width/2,height-35,200,20,{isStatic:true};
	//fill("red");
	//block2=createSprite();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  block1.display();
  block2.display();
  block3.display();

  drawSprites();
  drop();
function drop(){
  if(keyDown(DOWN_ARROW))
{    
	Matter.Body.setStatic(packageBody,false);
}
}
}










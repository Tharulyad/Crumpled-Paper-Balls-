
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var ball;

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

var ball_options ={
	isStatic :false,
	restitution:0.3,
	friction :0,
	density : 1.2
}



	//Create the Bodies Here.
	Matter.Bodies.circle(200,10,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
 


	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(Radius);
  background(0);
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

var ball1;
var ball2;
var ball3;
var ball4;
var ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block = new Ground(330,200,270,10);

	ball1 = new Paper(210,400);
	ball2 = new Paper(265,400);
	ball3 = new Paper(330,400);
	ball4 = new Paper(390,400);
	ball5 = new Paper(450,400);

	rope1 = new Chain(ball1.body,block.body);
	rope2 = new Chain(ball2.body,block.body);
	rope3 = new Chain(ball3.body,block.body);
	rope4 = new Chain(ball4.body,block.body);
	rope5 = new Chain(ball5.body,block.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  block.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}




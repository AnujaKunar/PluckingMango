
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObj, boyImage, mango1,chain;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new Stone(235,420,30);

	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1340,300,30);
	mango3 = new Mango(1380,300,30);
	mango4 = new Mango(1400,300,30);
	mango5 = new Mango(1440,300,30);

	tree = new Tree(1500,300,30);
	chain = new Chain(mango.body,{x:200, y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  tree.display();
  chain.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(mango.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <- lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}
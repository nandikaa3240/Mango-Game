
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1,boyImg,tree1,ground,launch1,mango1,mango2,mango3,mango4,mango5;

function preload()
{
 boyImg = loadImage("Images/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(135,465,40);
	tree1 = new tree(575,400);
	ground = new Ground(10,600,1700,20);
	launch1 = new Launch(stone1.body,{x:135,y:465});
	mango1 = new Mango(434,353,50);
	mango2 = new Mango(450,353,50);
	mango3 = new Mango(470,353,50);
	mango4 = new Mango(500,360,50);
	mango5 = new Mango(540,400,50);

	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);

	Engine.run(engine);
  
}


function draw() {
	background("white");
	
  rectMode(CENTER);
  
  Engine.update(engine);

  
  image(boyImg,100,390,180,270);
  stone1.display();
  tree1.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launch1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	launch1.fly();
}
function detectCollision(Lstone,Lmango){
	mangoBodyPosition = Lmango.body.position;
	stoneBodyPosition = Lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:135,y:465});
		launch1.attach(stone1.body);
	}
}




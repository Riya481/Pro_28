const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var dustbin1,paper1;
var Slingshot;
var dustbin_img;

function preload()
{
  dustbin_img=loadImage("bin.png")

}


function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
  world = engine.world;
  
  paper1=new Paper(150,320,70);
  dustbin1=new Dustbin(800,325,15,220);
  dustbin2=new Dustbin(890,390,180,15);
  dustbin3=new Dustbin(980,325,15,220);
  ground1=new Ground(600,392.5,1200,15);

  Slingshot = new Launcher(paper1.body, {x: 300, y: 55})
}


function draw() {
  
  background("lightgrey");

  Engine.update(engine);
  paper1.display();
 image(dustbin_img,800,200,180,190);

  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  ground1.display();
  Slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY})
}
function mouseReleased(){
  Slingshot.fly();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Constraint=Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;
var ball;
var laucher;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground=new Ground(600,height,1200,20);

box1=new Dustbin(700,640,200,300);
ball=new Paper(200,200,40,80);
laucher=new Launcher(ball.body,{x:600,y:100});
  Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("red");

  
  drawSprites();
   box1.display();
   ball.display();
   ground.display();
   laucher.display();
}



function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  
    laucher.fly();
  }
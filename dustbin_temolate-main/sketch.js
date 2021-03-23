
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
  dustbinObj=new dustbin(1000,670);
  paperObject=new paper(50,20,30);
  groundObject=new ground(800,690,1600,15);
	
}


function draw() {

  background("skyblue");
  Engine.update(engine);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW ){
      Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:50,y:-50});
     
    }
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1, bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	

paper=new Paper(100,500);
bin1= new Bin(950,547,270,20);
bin2= new Bin(950,400,20,147);
bin3= new Bin(1200,400,20,147);


ground=new Ground(0,570, 1300,20)
	//Create the Bodies Here.

	Engine.run(engine);
	
  
}


function draw() {
	background(0);
	
	Engine.update(engine);
  
  paper.display();
   
bin1.display();
bin2.display();
bin3.display();
ground.display();



  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
console.log("up key pressed");
		Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-130});
	}
}




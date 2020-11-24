const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);

	engine = Engine.create();
  world = engine.world;
  
  block1 = new block(330,235,30,40);
  block2 = new bloxk(360,235,30,40);
  block3 = new block(390,235,30,40);
  block4 = new block(420,235,30,40);
  block5 = new block(450,235,30,40);
  
  block6 = new block(360,195,30,40);
  block7 = new block(390,195,30,40);
  block8 = new block(420,195,30,40);

  block9 = new block(390,155,30,40);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);

}

function draw() {
 rectMode(CENTER);
  background(0);  
 
block1.display();
block2.display();
block3.display();
block4.display()
block5.display();

block6.display();
block7.display();
block8.display();

block9.display();

}
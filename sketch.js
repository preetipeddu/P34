const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;

  // let canvasmouse = Mouse.create(canvas.elt);
  // canvasmouse.pixelRatio = pixelDensity();
  // let options = {
  //   mouse: canvasmouse
  // }
  // mConstraint = MouseConstraint.create(engine,options);
  // World.add(world,mConstraint);
  bob1 = new Bob(400,400);
  bob2 = new Bob(490,400);
  bob3 = new Bob(580,400);
  bob4 = new Bob(670,400);
  bob5 = new Bob(760,400);

  pendulum1 = new Pendulum(bob1.body,{x:400,y:200});
  pendulum2 = new Pendulum(bob2.body,{x:490,y:200});
  pendulum3 = new Pendulum(bob3.body,{x:580,y:200});
  pendulum4 = new Pendulum(bob4.body,{x:670,y:200});
  pendulum5 = new Pendulum(bob5.body,{x:760,y:200});
  
}

  

function draw() {
  background("black");  
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX,y:mouseY});
}
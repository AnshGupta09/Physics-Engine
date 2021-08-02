
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle=0



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic:true
   };
  
  
//create a ground
ground = Bodies.rectangle(200,380,390,10,ground_options);
//add to world
World.add(world,ground);

ground2 = Bodies.rectangle(150,190,100,20,ground_options);

ball = Bodies.circle(100,10,20,ball_options);
World.add(world,ball);
  
  //ball2 = Bodies.circle()
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("Green");
  rect(ground.position.x,ground.position.y,400,10);
 //Matter.Body.rotate(ground,angle);
  fill("Red")
  ellipse(ball.position.x,ball.position.y,20);
  push();
  rectMode(CENTER);
  fill("blue")
  translate(ground2.position.x,ground2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle=angle+0.1;
  
}


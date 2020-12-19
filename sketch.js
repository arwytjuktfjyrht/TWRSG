const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var ground;

function setup() {
  var canvas = createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  //rectMode = CENTER;

  block1=new Block(600,400,30,30); 
  block2=new Block(630,400,30,30); 
  block3=new Block(660,400,30,30); 
  block4=new Block(690,400,30,30); 
  block5=new Block(720,400,30,30); 

  block6=new Block(630,370,30,30);
  block7=new Block(660,370,30,30);
  block8=new Block(690,370,30,30);

  block9=new Block(660,340,30,30);
  
  ground=new Block(660,420,150,10);
  Matter.Body.setStatic(ground, false);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground.display();
  drawSprites();
} 

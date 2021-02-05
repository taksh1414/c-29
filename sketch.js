const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/city.jpg");
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
spider=new Spider(200,200,200,300)
chain1=new chain(spider.body,{x:600 ,y: 50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

spider .display();
   chain1.display()
}

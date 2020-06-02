const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var balls = [],ball1
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(500,700);
  for(var i=0;i<=100;i=i+1){
    ball1=new Balls (random(249,251),random(0,-400),10)
    balls.push(ball1)
  }
  ground=new Ground(650,700,2600,10)
  wall1=new Wall(250,650,10,400)
  wall2=new Wall(300,650,10,400)
  wall3=new Wall(200,650,10,400)
  wall4=new Wall(350,650,10,400)
  wall5=new Wall(150,650,10,400)
  wall6=new Wall(400,650,10,400)
  wall7=new Wall(100,650,10,400)
  wall8=new Wall(450,650,10,400)
  wall9=new Wall(50,650,10,400)
  wall10=new Wall(500,650,10,400)
  wall11=new Wall(0,650,10,400)
  ball=new Balls(249,0,10,)
  cc1=new CC(250,370,15)
  cc2=new CC(300,370,15)
  cc3=new CC(200,370,15)
  cc4=new CC(350,370,15)
  cc5=new CC(150,370,15)
  cc6=new CC(400,370,15)
  cc7=new CC(100,370,15)
  cc8=new CC(450,370,15)
  cc9=new CC(50,370,15)
  cc10=new CC(500,370,15)
  cc11=new CC(0,370,15)
  cc12=new CC(250,330,15)
  cc13=new CC(300,330,15)
  cc14=new CC(200,330,15)
  cc15=new CC(350,330,15)
  cc16=new CC(150,330,15)
  cc17=new CC(400,330,15)
  cc18=new CC(100,330,15)
  cc19=new CC(450,330,15)
  cc20=new CC(50,330,15)
  cc21=new CC(500,330,15)
  cc22=new CC(0,330,15)
  cc23=new CC(250,290,15)
  cc24=new CC(300,290,15)
  cc25=new CC(200,290,15)
  cc26=new CC(350,290,15)
  cc27=new CC(150,290,15)
  cc28=new CC(400,290,15)
  cc29=new CC(100,290,15)
  cc30=new CC(450,290,15)
  cc31=new CC(50,290,15)
  cc32=new CC(500,290,15)
  cc33=new CC(0,290,15)
  cc34=new CC(250,170,15)
  cc35=new CC(300,170,15)
  cc36=new CC(200,170,15)
  cc37=new CC(350,170,15)
  cc38=new CC(150,170,15)
  cc39=new CC(400,170,15)
  cc40=new CC(100,170,15)
  cc41=new CC(450,170,15)
  cc42=new CC(50,170,15)
  cc43=new CC(500,170,15)
  cc44=new CC(0,170,15)
  cc45=new CC(250,210,15)
  cc46=new CC(300,210,15)
  cc47=new CC(200,210,15)
  cc48=new CC(350,210,15)
  cc49=new CC(150,210,15)
  cc50=new CC(400,210,15)
  cc51=new CC(100,210,15)
  cc52=new CC(450,210,15)
  cc53=new CC(50,210,15)
  cc54=new CC(500,210,15)
  cc55=new CC(0,210,15)
  cc56=new CC(250,250,15)
  cc57=new CC(300,250,15)
  cc58=new CC(200,250,15)
  cc59=new CC(350,250,15)
  cc60=new CC(150,250,15)
  cc61=new CC(400,250,15)
  cc62=new CC(100,250,15)
  cc63=new CC(450,250,15)
  cc64=new CC(50,250,15)
  cc65=new CC(500,250,15)
  cc66=new CC(0,250,15)
}

function draw() {
  Engine.update(engine);
  background(0,102,102);  
  for(var i=0;i<=100;i=i+1){
    balls[i].display();
}
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  ball.display();
  cc1.display();
  cc2.display();
  cc3.display();
  cc4.display();
  cc5.display();
  cc6.display();
  cc7.display();
  cc8.display();
  cc9.display();
  cc10.display();
  cc11.display();
  cc12.display();
  cc13.display();
  cc14.display();
  cc15.display();
  cc16.display();
  cc17.display();
  cc18.display();
  cc19.display();
  cc20.display();
  cc21.display();
  cc22.display();
  cc23.display();
  cc24.display();
  cc25.display();
  cc26.display();
  cc27.display();
  cc28.display();
  cc29.display();
  cc30.display();
  cc31.display();
  cc32.display();
  cc33.display();
  cc34.display();
  cc35.display();
  cc36.display();
  cc37.display();
  cc38.display();
  cc39.display();
  cc40.display();
  cc41.display();
  cc42.display();
  cc43.display();
  cc44.display();
  cc45.display();
  cc46.display();
  cc47.display();
  cc48.display();
  cc49.display();
  cc50.display();
  cc51.display();
  cc52.display();
  cc53.display();
  cc54.display();
  cc55.display();
  cc56.display();
  cc57.display();
  cc58.display();
  cc59.display();
  cc60.display();
  cc61.display();
  cc62.display();
  cc63.display();
  cc64.display();
  cc65.display();
  cc66.display();
  drawSprites();
}
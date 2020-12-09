

const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var engine, world;
var groundSprite;
var package, packageImage;
var helicopter, helicopterImage;
var ground;
var ball;




function preload(){


  packageImage = loadImage("package.png");
  helicopterImage = loadImage("helicopter.png")


}



function setup() {
  createCanvas(800,700);
  rectMode(CENTER);

  package = createSprite(width/2,80,10,10);
  package.addImage(packageImage);
  package.scale = 0.2;


  helicopter = createSprite(width/2,200,10,10);
  helicopter.addImage(helicopterImage);
  helicopter.scale = 0.5;

  groundSprite = createSprite(width/2,height-35,width,10);
  groundSprite.shapeColor = "red";

  engine = Engine.create();
  world = engine.world;

  var ball_option = {
    
    restitution:0.5,
    isStatic: true
    



  }

  ball = Bodies.circle(width/2,200,5,ball_option);
  World.add(world,ball);



  var ground_option = {

    isStatic: true
  }
  ground = Bodies.rectangle(width/2,650,100,20,ground_option);
  World.add(world, ground);
  console.log(ground);

  
  Engine.run(engine);


  
}


function draw(){
rectMode(CENTER);
background("white");
//Engine.update(engine);
//rectMode(CENTER);

package.x = ball.position.x;
package.y = ball.position.y;
//ellipse(ball.position.x,ball.position.y,20);

drawSprites();
}

function keyPressed(){
    if(keyCode === DOWN_ARROW){
      Matter.Body.setStatic(ball,false);

    }


}


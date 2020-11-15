

var speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random (55,90);
  weight = random (400,1500);
  var car, wall;
  wall = createSprite (700,200,60,800);

  car.velocityX = speed;
}


function draw() {
  background("black");  
  drawSprites();
  
  car = createSprite (50,200,50,50);

fill ("80,80,80");
car.display();
wall.display();



}


if (wall.x - car.x < (car.width + car.width)/2)
{
 
 var deformation = 0.5 * weight * speed * speed/22509;
 if (deformation<180)
 {
 car.shapeColor = color (0,225,0)
 } 
 
if (deformation<180 && deformation>100)
 {
   car.shapeColor = color(230,230,0)
 }
 if(deformation<100);

  car.shapeColor=color(0,255,0)
}





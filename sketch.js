


  var wall,thickness;


  var bullet,speed, weight; 
  
  
  function setup() {
    createCanvas(1600, 400);
  
  
      speed=random(55,90)
      weight=random(400,1500)
     thickness=random(22,83)
  
      bullet=createSprite(50, 200, 20,40);   
  
      bullet.velocityX = speed;
  
      bullet.shapeColor=color(255);
  
  
    
        wall=createSprite(1500,200, thickness, height/2)
        wall.shapeColor=color(80,80,80)
  }
  
  
  function draw() {
    background(0);
  
    if(wall.x-bullet.x < (bullet.width+wall.width)/2)
    {
        bullet.velocityX=0;
        var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
      if(damage>150)
      {
          wall.shapeColor=color(255,0,0);
      }
  
      if(damage<150 && damage>100)
      {
          wall.shapeColor=color(230,230,0);
      }
  
      if(damage<100)
      {
          wall.shapeColor=color(0,255,0);
      }
    }  
    
    drawSprites();
   
  }
  
  
  






















var fixedrect,movingrect


function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 40, 80);
  fixedrect.shapeColor="red";

  movingrect=createSprite(600,200,80,40);
  movingrect.shapeColor="red";

}

function draw() {
  background(0,0,0); 
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2) {
     
      fixedrect.shapeColor="yellow";
      movingrect.shapeColor="yellow";

    
  } else {
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";

  }

  drawSprites();
}
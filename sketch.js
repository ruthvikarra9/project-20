var cat, catImage1, catImage2, catImage3;
var mouse, mouseImage1, mouseImage2, mouseImage3;
var bgImage
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/catsitting.png");
    catImage2=loadAnimation("images/catwalking1.png","images/catwalking2.png")
    catImage3=loadAnimation("images/cathappy.png");
    mouseImage1=loadAnimation("images/mousegift.png")
    mouseImage2=loadAnimation("images/mousetease1.png","images/mousetease2.png")
    mouseImage3=loadAnimation("images/mousehappy.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(200,600)
mouse.addAnimation("gift",mouseImage1);
mouse.scale=0.15;
cat=createSprite(900,600)
cat.addAnimation("sitting",catImage1);
cat.scale=0.15
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("cathappy", catImage3);
        cat.changeAnimation("cathappy", catImage3);

        mouse.addAnimation("mousehappy", mouseImage3);
        mouse.changeAnimation("mousehappy", mouseImage3);

        cat.x=300
        cat.scale=0.2
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImage2);
    mouse.changeAnimation("mouseTeasing", mouseImage2);
    mouse.frameDelay = 25


cat.velocityX = -5
cat.addAnimation("catwalking", catImage2);
cat.changeAnimation("catwalking", catImage2);
}

}



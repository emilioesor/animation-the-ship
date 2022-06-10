//aqui se crean las variables//
var piso, piso_texture; 
var barco ,barco_running;
var nubes;


function preload(){
  //aquí cargo imagenes y sonidos//
//trex_running = loadImage("trex1.png");//
barco_running = loadAnimation ("varco1.png", "varco2.png");
piso_texture = loadAnimation ("agua1.png", "agua2.png", "agua3.png");
}

function setup(){
  createCanvas(1000,400)
//aqui se crea y pone las coordenadas//
  piso = createSprite (200, 200 , 1200, 40);
  piso.addAnimation("enmovimiento", piso_texture );
  //crear sprite de Trex
  barco =  createSprite (100, 166, 20,100);
  //trex.addImage(trex_running);//
 barco.scale = 0.5
  barco.addAnimation ("corriendo", barco_running);
barco.velocityX  = 1
piso.scale= 1.9


}

function draw(){
  background("orange")

  
  //CONTROLADOR//
  if (keyDown("UP_ARROW")){
    barco.velocityY= -2;
  }
  else {
    barco.velocityY= -0;
  }
  
    
  
  if (keyDown("DOWN_ARROW")){
    barco.velocityY= 2;
  }

drawSprites();
}

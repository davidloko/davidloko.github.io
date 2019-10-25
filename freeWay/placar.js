
function pontuar(){
  if(yVaca == 10){
    
    placarVaca += 1;
    yVaca = 367;
    ponto.play();
  }
  if(yCoelho == 10){
    
    placarCoelho += 1;
    yCoelho = 367;
    ponto.play();
  }
}

function mostraPlacar(){
  textSize(30);
  
  fill("White");
  text(placarCoelho, 150, 30);
  
  fill("Black");
  text(placarVaca, 450, 30);
  

}
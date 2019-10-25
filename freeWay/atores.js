function movimentaAtores(){

  if (keyIsDown(UP_ARROW)) {
      if(yVaca > 6)
    yVaca -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
     if(yVaca < 367)
    yVaca += 3;
  }
  
  if (keyIsDown(87)) {
      if(yCoelho > 6)
    yCoelho -= 3;
  }

  if (keyIsDown(83)) {
     if(yCoelho< 367)
    yCoelho += 3;
  }

}

function mostraAtores(){ 
  image(imgVaca, xVaca, yVaca, 28, 28);
  image(imgCoelho, xCoelho, yCoelho, 32, 32);
}

var atropelaVaca = false;
var atropelaCoelho = false;

function atropelamento() {	
  for(let i = 0; i < imgCarro.length; i++){
    atropelaVaca =collideRectRect(xVaca,yVaca,28,28,xCarro[i],yCarro[i],50,30);
    
    if(atropelaVaca){
      // Vaca Atropelada
      yVaca = 367;
      if(placarVaca > 0)
        placarVaca -= 1;
        atropelou.play();
    }
    atropelaCoelho =collideRectRect(xCoelho,yCoelho,32,32,xCarro[i],yCarro[i],50,30);
    
    if(atropelaCoelho){
      yCoelho = 367;
    if(placarCoelho > 0)
       placarCoelho -= 1;
       atropelou.play();
    }


  }// For
}// Function
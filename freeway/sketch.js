function setup() {
  createCanvas(600, 400);
  // trilha.setVolume(0.2);
  // trilha.loop();
}


function draw() {
    if(frameCount < 400) //8 segundos
    telaInicial();
  else
    jogar(); 
}
function telaInicial(){
  fill("DeepPink");
  rect(0, 0,600, 400);
  textAlign(CENTER);
  textSize(34);
  fill("White");
  text("Jogo da Avenida 1º de Maio", 300, 180);
  textSize(20);
  text("Desenvolvido por David E. Hoffmann", 300, 210);
}

function jogar(){
    if(placarVaca < 5 && placarCoelho < 5){
      background(imgEstrada);
      movimentaAtores();
      movimentaCarros();
      mostraAtores();
      mostraCarros();
      mostraPlacar();
      pontuar();
      atropelamento();
  }else{
    verificaVencedor();
  }
}
function  verificaVencedor(){
  if(placarVaca >= 5)
    vacaVenceu();
  else 
    coelhoVenceu();
}

function vacaVenceu(){
  fill("lime");
  rect(0, 0,600, 400);
  textAlign(CENTER);
  textSize(34);
  fill("White");
  text("Vaca Wins", 300, 90);
  image(imgVaca, 200, 100, 200, 200);
}
function coelhoVenceu(){
    fill("purple");
  rect(0, 0,600, 400);
  textAlign(CENTER);
  textSize(34);
  fill("White");
  text("Coelho Wins", 300, 90);
  image(imgCoelho, 200, 100, 200, 200);
}

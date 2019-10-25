//Variáveis de placar
let placarVaca = 0;
let placarCoelho = 0;

// Variáveis para as imagens
let imgEstrada;
let imgVaca;
let imgCarro = [];

// Variáveis de movimento
//              DIREITA     /  ESQUERDA
let xCarro = [615, 605, 610, -60, -65, -70];
let yCarro = [45, 105, 158, 215, 270, 325];
let velocidadeCarro = [3, 5, 7, 3, 5, 7];

let yCoelho = 367;
let yVaca = 367;
let xCoelho = 200;
let xVaca = 400;





function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca = loadImage('imagens/ator-1.png');
  imgCoelho = loadImage('imagens/ator2.png');
  
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-5.png');
  imgCarro[5] = loadImage('imagens/carro-6.png');
  
  atropelou = loadSound('sons/colidiu.mp3');
  ponto = loadSound('sons/pontos.wav');
  trilha = loadSound('sons/trilha.mp3');
  vitoria = loadSound('sons/Vaca_Louca.mp3');
}

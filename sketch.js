let imagemCenario;
let imagemPersonagem;
let cenario;

function preload()
{
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
}

function setup() {
  cenario = new Cenario(imagemCenario, 3);
  createCanvas(windowWidth , windowHeight);
}

function draw() {
  cenario.exibe();
  cenario.move();
  image(imagemPersonagem,20, height-150, 110, 135, 0, 0, 220, 270);
  
}

class Cenario {
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2 + 1, 0, width, height);
    
  }
  
  move(){
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
  }
}
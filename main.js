let imagemDaEstrada;

// Ator
let imagemAtor;
let xAtor = 100;
let yAtor = 366;

// Carro
let imagemCarro;
let xCarro = 500;
let yCarro = 40;

function preload() {
    imagemDaEstrada = loadImage("img/estrada.png")
    imagemAtor = loadImage("img/ator-1.png");
    imagemCarro = loadImage("img/carro-1.png")
};

function setup() {
    createCanvas(500, 400);
};

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
};

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
};

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
};

function movimentaCarro(){
    xCarro -= 2;
};

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if (keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
}
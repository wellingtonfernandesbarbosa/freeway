let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarros;
let imagemDaEstrada;

function preload() {
    imagemDaEstrada = loadImage("img/estrada.png")
    imagemAtor = loadImage("img/ator-1.png");
    imagemCarro = loadImage("img/carro-1.png");
    imagemCarro2 = loadImage("img/carro-2.png");
    imagemCarro3 = loadImage("img/carro-3.png");
    imagemCarro4 = loadImage("img/carro-1e.png");
    imagemCarro5 = loadImage("img/carro-2e.png");
    imagemCarro6 = loadImage("img/carro-3e.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];
    imagemCarrosEsquerda = [imagemCarro4, imagemCarro5, imagemCarro6];
};
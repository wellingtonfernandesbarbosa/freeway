let xCarro = 500;
let yCarro = 40;
let velocidadeCarro = 2.5;

let xCarro2 = 500;
let yCarro2 = 97;
let velocidadeCarro2 = 3;

let xCarro3 = 500;
let yCarro3 = 149;
let velocidadeCarro3 = 3.5;

function mostraCarro(){
    image(imagemCarro, xCarro, yCarro, 50, 40);
    image(imagemCarro2, xCarro2, yCarro2, 50, 40);
    image(imagemCarro3, xCarro3, yCarro3, 50, 40);
};

function movimentaCarro(){
    xCarro -= velocidadeCarro;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}

function voltaPosicaoInicialDoCarro(){
    if(xCarro < -60){
        xCarro = 500;
    } else if (xCarro2 < -60){
        xCarro2 = 500;
    } else if (xCarro3 <- 60){
        xCarro3 = 500;
    }
}
let fimDaTela = 600;
let inicioDaTela = 0;


let yCarros = [40, 211, 149];
let yCarrosEsquerda = [97, 263, 318];
let xCarros = [fimDaTela, fimDaTela, fimDaTela];
let xCarrosEsquerda = [inicioDaTela, inicioDaTela, inicioDaTela]
let alturaCarro = 40;
let comprimentoCarro = 50;
let velocidadeCarros = [2.5, 3.5, 4.5];
let velocidadeCarrosEsquerda = [4.5, 3.5, 2.5];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    };
    for (let i = 0; i < imagemCarrosEsquerda.length ; i++){
        image(imagemCarrosEsquerda[i], xCarrosEsquerda[i], yCarrosEsquerda[i], comprimentoCarro, alturaCarro);
    };
};

function movimentaCarro(){
    for (let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    };
    for (let i = 0; i < imagemCarrosEsquerda.length; i++){
        xCarrosEsquerda[i] += velocidadeCarrosEsquerda[i];
    };
};

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < xCarros.length; i++){
        if (passouDoInicioDaTela(xCarros[i])){
            xCarros[i] = fimDaTela;
        }
        if (passouDoFimDaTela(xCarrosEsquerda[i])){
            xCarrosEsquerda[i] = inicioDaTela;
        }
    };
}

function passouDoInicioDaTela(xCarro){
    return xCarro < -60;
}

function passouDoFimDaTela(xCarro){
    return xCarro > 660;
}
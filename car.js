let inicioDaTela = 600;

let yCarros = [40, 97, 149];
let xCarros = [inicioDaTela, inicioDaTela, inicioDaTela];
let velocidadeCarros = [2.5, 3, 3.5];

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    };
};

function movimentaCarro(){
    for (let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    };
}

function voltaPosicaoInicialDoCarro(){
    for (let i = 0; i < xCarros.length; i++){
        if (passouTodaATela(xCarros[i])){
            xCarros[i] = inicioDaTela;
        }
    };
}

function passouTodaATela(xCarro){
    return xCarro < -60;
}
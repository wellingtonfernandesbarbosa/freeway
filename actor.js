let xAtor = 70;
let yAtor = 369;
let alturaAtor = 30;
let diametroAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, alturaAtor, diametroAtor);
};

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if (keyIsDown(DOWN_ARROW) && yAtor < 366){
        yAtor += 3;
    } else if (keyIsDown(LEFT_ARROW) && xAtor > 2){
        xAtor -= 3;
    } else if (keyIsDown(RIGHT_ARROW) && xAtor < 570){
        xAtor += 3;
    };
};

function verificaColisao(){
    for (let i = 0; i < xCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametroAtor * 0.6);
        if (colisao){
            colidiu();
        };
    };
    for (let i = 0; i < xCarrosEsquerda.length; i++){
        colisao = collideRectCircle(xCarrosEsquerda[i], yCarrosEsquerda[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametroAtor * 0.6);
        if (colisao){
            colidiu();
        };
    };
};

function colidiu(){
    somDacolisao.play();
    yAtor = 369;
    if (meusPontos > 0) {
        meusPontos -= 1;
    };
};

function mostraPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 180, 0));
    text(meusPontos, width / 5, 26);
};

function marcaPontos(){
    if (yAtor < 15){
        somDosPontos.play();
        meusPontos += 1;
        yAtor = 369;
    };
};

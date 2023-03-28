let xAtor = 100;
let yAtor = 366;
let colisao = false;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 30, 30);
};

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if (keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
};

function verificaColisao(){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    
}
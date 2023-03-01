const audioAcertou = new Audio("./audio/acertou.mp3")
const audioErrou = new Audio("./audio/errou.mp3")

function verificaValorValido(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    };

    if(numeroMaiorOuMenorPermitodo(numero)){
        elementoChute.innerHTML += `<div>O número precisa estar entre ${menorAleatorio} e ${maiorAleatorio}</div>`;
        return;
    };

    if (numero === numeroAleatorio){
        document.body.innerHTML = 
        `<h3>Acertooou</h3>
        <h3>o número sorteado foi ${numeroAleatorio}</h3>
        <button id="novo-jogo" class="botao-jogar">Jogar novamente</button>`
        audioAcertou.play();

    
    } else if (numero > numeroAleatorio){
        elementoChute.innerHTML += `
        <div>Errooou! Diga um número MENOR <i class="fa-solid fa-arrow-down"></i></div>`
        audioErrou.play(); 
    } else {
        elementoChute.innerHTML += `
        <div>Errooou! Diga um número MAIOR <i class="fa-solid fa-arrow-up"></i></div>`
        audioErrou.play();
    };

};

function chuteInvalido(numero) {
    return Number.isNaN(numero);
};

function numeroMaiorOuMenorPermitodo(numero) {
    return numero > maiorAleatorio || numero < menorAleatorio;
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'novo-jogo'){
        window.location.reload();
    }
});

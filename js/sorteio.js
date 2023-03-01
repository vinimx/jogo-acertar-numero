const maiorAleatorio = 1000;
const menorAleatorio = 1;
const numeroAleatorio = sorteio();

function sorteio (){
    return parseInt(Math.random() * maiorAleatorio + 1 );
};

const dicaMenor = document.querySelector("#menor-valor");
dicaMenor.textContent = menorAleatorio;

const dicaMaior = document.querySelector("#maior-valor");
dicaMaior.textContent = maiorAleatorio;

//FACA UM PROGRAMA QUE RECEBA UM VALOR  INTEIRO E VERIFICA SE O VALOR OU NEGATIVO, PARA ESSA VERIFICAO DEVE SE USAR UMA FUNCAO
//A FUNCAO DEVE RETORNAR UM VALOR BOOLEANO (TRUE/ELSE)

const prompt = require('prompt-sync')();

// FUNCAO QUE VERIFICA SE O VALOR E NEGATIVO
// RETORNA TRUE SE FOR NEGATIVO, FALSE SE FOR POSITIVO OU ZERO
function eNegativo(valor) {
    return valor < 0;
}

// PROGRAMA PRINCIPAL
let valor = Number(prompt("Digite um valor inteiro: "));

// CHAMA A FUNCAO PARA VERIFICAR
let resultado = eNegativo(valor);

// MOSTRA O RESULTADO
console.log("O valor", valor, "e negativo?", resultado);

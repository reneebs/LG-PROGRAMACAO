// Soma de valores
// Objetivo Pedir 5 numeros, armazenar em um vetor, mostrar a soma total

let soma = 0;
let numbers = [];
const prompt = require('prompt-sync')();

for (let i = 0; i < 5; i++) {
    let numero = prompt('Digite a nota: ');
    numbers.push(Number(numero)); // Converte para numero

    soma += Number(numero); // Soma direto
}

console.log('total da soma dos numeros: ' + soma);
    
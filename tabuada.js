// Importa a biblioteca 'prompt-sync' para permitir entrada de dados no terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário que digite um número e converte a entrada para tipo Number
let numb = Number(prompt('digite um numero: '));

// Inicializa a variável de controle do loop
let i = 1;

// Estrutura de repetição que executa enquanto i for menor ou igual a 10
while (i <= 10) {

    // Exibe a tabuada do número informado pelo usuário
    // Formato: número x contador = resultado
    console.log(numb + ' x ' + i + ' = ' + (numb * i));

    // Incrementa o contador a cada repetição
    i++;
}
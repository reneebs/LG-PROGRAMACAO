// Importa a biblioteca 'prompt-sync' e inicializa a função de entrada de dados via terminal
const prompt = require('prompt-sync')();

// Declara um array vazio para armazenar os nomes inseridos pelo usuário
const names = [];

// Estrutura de repetição que será executada 5 vezes (índices de 0 a 4)
for (let i = 0; i < 5; i++) {

    // Solicita ao usuário que digite um nome e armazena o valor na posição correspondente do array
    names[i] = prompt("Qual é o seu nome? ");
    names.push(names);

}
  // Exibe uma mensagem de saudação utilizando o nome informado na iteração atual
    console.log('Olá, ' + names + '!');
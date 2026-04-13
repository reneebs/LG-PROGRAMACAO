// Importa a biblioteca 'prompt-sync' para leitura de entrada do usuário no terminal
const prompt = require("prompt-sync")();

// Inicializa a soma total e um array para armazenar os números digitados
let soma = 0;
let numeros = [];

// Laço para coletar 5 números do usuário
for (let i = 0; i < 5; i++) {
    // Lê a entrada do usuário e converte para número
    const valor = Number(prompt(`Digite o ${i + 1}º número: `));

    // Adiciona o número ao array
    numeros.push(valor);

    // Incrementa a soma total
    soma += valor;
}

// Exibe o resultado da soma
console.log(`O total da soma foi: ${soma}`);

// Exibe todos os números digitados
console.log(`Os números digitados foram: [${numeros.join(', ')}]`);
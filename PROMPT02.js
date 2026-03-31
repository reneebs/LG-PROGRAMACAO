const prompt = require('prompt-sync')();

// Criar um vetor vazio para armazenar os nomes
let nomes = [];

// usar um loop para pedir 5 nomes e exibir no mesmo for

for (let i = 0; i < 5; i++) {
    
    let nome = prompt('Digite o nome: ');
    
    // adiciona o nome no vetor
    nomes.push(nome);     
    
    // exibe logo
    console.log('nome add: ' + nome);    
}

// mostrar a lista de nomes
console.log('lista dos nomes:');
console.log(nomes);
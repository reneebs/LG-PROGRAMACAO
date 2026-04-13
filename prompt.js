// Importa a biblioteca 'prompt-sync' e já executa ela (por isso os () no final)
// Isso cria a função 'prompt' que a gente vai usar pra ler do teclado
const prompt = require('prompt-sync')();

// Mostra a pergunta no terminal e espera o usuário digitar algo
// O valor digitado vai ser guardado na variável 'name'
const name = prompt("Qual é o seu nome? ");

// Exibe a mensagem no console juntando texto + o nome que o usuário digitou
console.log('ola, ' + name + '!');
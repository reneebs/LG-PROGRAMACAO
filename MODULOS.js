const prompt = require('prompt-sync')();
let option = '';
let cadastro = [];
let nome = 0;


while (option !=
    ='2') {
    console.log('1. Cadastro.');
    console.log('2. Sair.\n');
    option = prompt('Digite a opção:'); 
   
    if(option=='1') {
        nome = prompt('Digite seu nome: '); 
        cadastro.push(nome);
        console.log('\nCadastrado com sucesso!\n')

    } else if (option=='2') {
        console.log('\nSaindo do sistema de login...');
    }
}
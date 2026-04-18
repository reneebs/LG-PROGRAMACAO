// DESENVOLVER UM SISTEMA DE CAIXA ELETONICO INTERATIVO 
//CONSULTAR SALDO //DEPOSITAR //SACAR //VER EXTRATO //SAIR



let saldoInicial = 1000.00
let extrato = [];
let option = '';
let deposito = 0; 

const prompt = require('prompt-sync')();

while (option!==5) {
    console.log('\n--------SISTEMA--------\n');
    console.log('1. Consultar saldo.');
    console.log('2. Depositar.');
    console.log('3. Sacar.');
    console.log('4. Ver extrato');
    console.log('5. Sair.');

    option = prompt('Escolha uma opção: ');

    //Consultar saldo
    if (option==='1') {
        console.log('Consulta inicializada.');
        console.log('Prosseguindo...\n');
        console.log('\n', saldoInicial, '\n');
    //Depositar
    } if (option ==='2') {
        deposito = Number(prompt('Digite o valor do deposito R$:'));
        extrato.push(deposito);
        console.log('Valor registrado.\n');
    //Sacar
    } if (option ==='3') {
        let sacar = Number(prompt('Digite o valor do saque R$:'));
        
        console.log('Valor inserido.')
        console.log('\nValor sacado: R$' + sacar);
        
    }

}

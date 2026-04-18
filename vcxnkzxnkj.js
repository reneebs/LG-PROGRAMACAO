const prompt = require('prompt-sync')();

let saldoInicial = 1000.00;
let extrato = [];      // guarda histórico como strings descritivas
let option = '';

while (option !== '5') {

    console.log('\n--------SISTEMA--------\n');
    console.log('1. Consultar saldo.');
    console.log('2. Depositar.');
    console.log('3. Sacar.');
    console.log('4. Ver extrato');
    console.log('5. Sair.');

    option = prompt('Escolha uma opção: ');

    // 1 - Consultar saldo
    if (option === '1') {
        console.log('\nSaldo atual: R$' + saldoInicial.toFixed(2));

    // 2 - Depositar
    } else if (option === '2') {
        let deposito = Number(prompt('Digite o valor do depósito R$: '));

        if (deposito <= 0) {
            console.log('Valor inválido.');
        } else {
            saldoInicial = saldoInicial + deposito;           // SOMA ao saldo
            extrato.push('Depósito: +R$' + deposito.toFixed(2)); // salva no histórico
            console.log('Depósito realizado! Novo saldo: R$' + saldoInicial.toFixed(2));
        }

    // 3 - Sacar
    } else if (option === '3') {
        let saque = Number(prompt('Digite o valor do saque R$: '));

        if (saque <= 0) {
            console.log('Valor inválido.');
        } else if (saque > saldoInicial) {
            console.log('Saldo insuficiente!');             // não deixa sacar mais do que tem
        } else {
            saldoInicial = saldoInicial - saque;            // SUBTRAI do saldo
            extrato.push('Saque: -R$' + saque.toFixed(2)); // salva no histórico
            console.log('Saque realizado! Novo saldo: R$' + saldoInicial.toFixed(2));
        }

    // 4 - Ver extrato
    } else if (option === '4') {
        if (extrato.length === 0) {
            console.log('\nNenhuma movimentação ainda.');
        } else {
            console.log('\n--- EXTRATO ---');
            // sem for: percorre manualmente com índice
            let i = 0;
            while (i < extrato.length) {
                console.log(extrato[i]);
                i = i + 1;
            }
            console.log('Saldo atual: R$' + saldoInicial.toFixed(2));
        }

    // 5 - Sair
    } else if (option === '5') {
        console.log('Saindo... Até logo!');

    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}


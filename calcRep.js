// Importa a biblioteca 'prompt-sync' para entrada de dados via terminal
const prompt = require('prompt-sync')();

// Declaração das variáveis que armazenarão os números informados pelo usuário
let numb1;
let numb2;

// Loop infinito que mantém o programa em execução até o usuário decidir sair
while (true) {

    // Solicita o primeiro número e converte para tipo Number
    numb1 = Number(prompt(' Numero 1: '));

    // Solicita o operador matemático ou comando de saída
    let op = prompt('Operador (+ - * / ou sair): ');
    
    // Verifica se o usuário deseja encerrar o programa
    if (op == 'sair') {
        break; // Interrompe o loop
    }

    // Solicita o segundo número
    numb2 = Number(prompt('Numero 2: '));
      
    // Estrutura condicional para verificar qual operação será realizada

    // Caso seja soma
    if (op == '+') {
        let soma = numb1 + numb2; // Realiza a soma
        console.log ('o resultado é: ', soma); // Exibe o resultado

    // Caso seja subtração
    } else if (op == '-') {
        let subtracao = numb1 - numb2; // Realiza a subtração
        console.log ('o resultado é: ', subtracao);

    // Caso seja multiplicação
    } else if ( op == '*'){
        let multiplicao = numb1 * numb2; // Realiza a multiplicação
        console.log ('o resultado é: ', multiplicao);

    // Caso seja divisão
    } else if ( op == '/') {

        // Verificação de divisão por zero
        if(num2 == 0);

        // Mensagem exibida em caso de operação inválida
        console.log("Operação invalida...");

    // Caso o operador não seja reconhecido
    } else {

        // Realiza a divisão
        let divisao = num1 / num2;

        // Exibe o resultado da divisão
        console.log ('o resultado é: ', divisao)
    }
}
// Importa a biblioteca 'prompt-sync' para permitir entrada de dados via terminal
const prompt = require("prompt-sync")();

// Variável que armazenará a opção escolhida pelo usuário
let opcao = '';

// Estrutura de repetição que continuará executando enquanto a opção for diferente de '3'
while (opcao !== '3') {

    // Exibição do menu de opções
    console.log ('\n ============== MENU ==============');
    console.log ('1. Cadastrar aluno');
    console.log ('2. Listar aluno');
    console.log ('3. Sair');

    // Solicita ao usuário que escolha uma opção
    opcao = prompt('opção: ');

    // Estrutura condicional para verificar a opção escolhida

    // Caso a opção seja '1'
    if(opcao === '1'){
        console.log('cadastrando aluno...'); // Simula cadastro de aluno

    // Caso a opção seja '2'
    } else if(opcao === '2'){
        console.log('listando o aluno'); // Simula listagem de aluno

    // Caso a opção seja '3'
    } else if (opcao === '3'){
        console.log(' saindo'); // Encerra o programa

    // Caso a opção não seja válida
    } else {
        console.log('opção invalida'); // Mensagem de erro
    }
}
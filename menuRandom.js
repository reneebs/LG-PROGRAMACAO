const prompt = require('prompt-sync')(); 
// Importa e inicializa o prompt-sync (entrada de dados no terminal)

// Variável que vai guardar a opção escolhida pelo usuário
let numb = "";

// Loop principal do menu (repete até o usuário digitar '0')
while (numb !== '0') {

    // Exibição do menu
    console.log('\n =================== MENU =====================');
    console.log(' 1. diz oi');
    console.log(' 2. mostra um numero aleatorio');
    console.log(' 0. sair');

    // Lê a opção digitada pelo usuário
    numb = prompt('numb: ');

    // Verifica qual opção foi escolhida
    if (numb == '1') {

        // Opção 1: mostra uma mensagem simples
        console.log('oi');

    } else if (numb == '2') {

        // Opção 2: gera um número aleatório de 1 até 10
        let numbRandom = Math.floor(Math.random() * 10) + 1;

        // Exibe o número gerado
        console.log('o numero é:', numbRandom);

    } else if (numb == '0') {

        // Opção 0: encerra o programa
        console.log('saindo');

    } else {

        // Caso o usuário digite uma opção inválida
        console.log('opção inválida');
    }
}
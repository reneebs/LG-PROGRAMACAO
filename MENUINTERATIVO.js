const prompt = require('prompt-sync')();
let valores = [];
let opcao;

do {
    opcao = parseInt(prompt(
        "\nMENU:\n" +
        "1 - Preencher vetor\n" +
        "2 - Somar elementos\n" +
        "3 - Calcular média\n" +
        "4 - Maior e menor valor\n" +
        "5 - Buscar elemento\n" +
        "0 - Sair\n" +
        "Escolha uma opção:"
    ));

    switch (opcao) {

        case 1:
        //código
            break;

        case 2:
           

        //código
            break;

        case 3:
        //código           
            break;

        case 4:
            
        //código
            break;

        case 5:
           

        //código
            break;

        case 0:
            console.log("Encerrando...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);
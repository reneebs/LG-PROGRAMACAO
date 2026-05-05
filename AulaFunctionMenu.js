let vetor = [];

console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt(`Digite o ${i + 1}º número: `));
}

// ===== Menu =====
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1. Soma do vetor");
    console.log("2. Produto do vetor");
    console.log("3. Multiplicar todos os elementos por 5");
    console.log("4. Mudar elemento do vetor");
    console.log("5. Ordenar vetor (Bubble Sort)");
    console.log("6. Inverter vetor");
    console.log("7. Mostrar vetor");
    console.log("0. Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {
        case 1:
            console.log("Soma =", somaVetor(vetor));
            break;
        case 2:
            console.log("Produto =", multiplicaVetor(vetor));
            break;
        case 3:
            multiplicarPorCinco(vetor);
            console.log("Vetor atualizado!");
            break;
        case 4:
            mudarElemento(vetor);
            break;
        case 5:
            ordenarVetor(vetor);
            console.log("Vetor ordenado!");
            break;
        case 6:
            inverterVetor(vetor);
            console.log("Vetor invertido!");
            break;
        case 7:
            mostrarVetor(vetor);
            break;
        case 0:
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);


//escreva um programa q peca para o usuareio preencher um fvetor de numero inteiros de 5 posicoes elabore funcoes que recebam esse vetor como argumento e facam: cada

//somavetor recebe o vetor e retorna a soma de seus elementos 

//multiplacavetor: cakcula o produto dos elementos do vetor.

//multiplicarPorCinco: multiplica cada elemento do vetor por 5

//mudarElemento: nossa funcao o usuario dira o indice do vetor que deseja alterar e o numero para substituir na posicao desejada. 

//ordenaVetor: ordena o vetor em ordem crescente usando um algoritmo de ordenacao simples (bubble sort)

//inverterVetor: inverte os elementos do vetor

//mostrarvetor. exibe os elementos do vetor na tela

//o menu permite ao usuario escolher qual funcao desaja executar
//o programa continua ate que o usuario escolha a opcao de sair (0)
//voce podera utilizar funcoes nativas do javascript para as logicas das funcoes

//exemplo de entrada incial do programa (menu);
escolha

//'1 soma do vetor 2. produto do vetor 3. multiplicar todos os elementos por 5 4.Mudar elemento do vetor etc...
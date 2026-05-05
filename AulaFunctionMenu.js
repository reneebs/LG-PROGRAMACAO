const prompt = require('prompt-sync')();

// Soma todos números do vetor
function somaVetor(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma = soma + vetor[i];  // soma cada posição
    }
    return soma;
}

// Multiplica todos números do vetor (produto)
function multiplicaVetor(vetor) {
    let produto = 1;
    for (let i = 0; i < vetor.length; i++) {
        produto = produto * vetor[i];  // multiplica cada posição
    }
    return produto;
}

// Multiplica cada número do vetor por 5
function multiplicarPorCinco(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i] * 5;  // cada posição * 5
    }
}

// Muda um elemento do vetor pelo índice
function mudarElemento(vetor) {
    let indice = Number(prompt('Índice (0-4): '));
    if (indice >= 0 && indice < 5) {
        let novoValor = Number(prompt('Novo número: '));
        vetor[indice] = novoValor;  // substitui posição
        console.log(`Posição ${indice} alterada para ${novoValor}`);
    } else {
        console.log('Índice inválido!');
    }
}

// Ordena vetor crescente - Bubble Sort simples
function ordenarVetor(vetor) {
    // faz 4 voltas comparando posições vizinhas
    for (let volta = 0; volta < 4; volta++) {
        for (let pos = 0; pos < 4; pos++) {
            if (vetor[pos] > vetor[pos + 1]) {  // se errado troca
                let aux = vetor[pos];
                vetor[pos] = vetor[pos + 1];
                vetor[pos + 1] = aux;
            }
        }
    }
}

// Inverte ordem dos números no vetor
function inverterVetor(vetor) {
    vetor.reverse();  // função nativa inverte tudo
}

// Mostra todos números do vetor com posição
function mostrarVetor(vetor) {
    console.log('Vetor:');
    for (let i = 0; i < vetor.length; i++) {
        console.log('Posição ' + i + ': ' + vetor[i]);
    }
}

let vetor = [];

// Pede 5 números para o vetor
console.log("Preencha o vetor com 5 números inteiros:");
for (let i = 0; i < 5; i++) {
    vetor[i] = Number(prompt('Digite o ' + (i + 1) + 'º número: '));
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




// PROGRAMA PARA CALCULAR A ALTURA DE UM PREDIO USANDO SOMBRAS
// USANDO PROPORCAO: altura_predio / sombra_predio = altura_pessoa / sombra_pessoa

const prompt = require('prompt-sync')();

// FUNCAO QUE CALCULA A ALTURA DO PREDIO
function calcularAlturaPredio(sombraPredio, alturaPessoa, sombraPessoa) {
    let alturaPredio = (sombraPredio * alturaPessoa) / sombraPessoa;
    return alturaPredio;
}

// PROGRAMA PRINCIPAL
// LE OS DADOS NECESSARIOS
let alturaPessoa = Number(prompt("Digite sua altura (em metros): "));
let sombraPessoa = Number(prompt("Digite o tamanho da sua sombra (em metros): "));
let sombraPredio = Number(prompt("Digite o tamanho da sombra do edificio (em metros): "));

// CHAMA A FUNCAO PARA CALCULAR
let alturaPredio = calcularAlturaPredio(sombraPredio, alturaPessoa, sombraPessoa);

// MOSTRA O RESULTADO
console.log("A altura do edificio e:", alturaPredio, "metros");

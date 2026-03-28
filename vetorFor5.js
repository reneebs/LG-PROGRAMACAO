//Exc Controle de estoque 
//Loja analisa um vetor com a quantidade de produtors disponiveis 
//Contar produtos sem estoque(0)
//Identificar estoque baixo (<5)
//Informar total de reposicoes


let estoque = [10, 0, 3, 5, 0, 2, 8, 1];
let contadorSemEstoque = 0;
let contadorEstoqueBaixo = 0;
let totalReposicoes = 0;

for (let i = 0; i < estoque.length; i++) {
let quantidade = estoque[i];

if (quantidade === 0) {
    contadorSemEstoque++;
    totalReposicoes++;
} else if (quantidade < 5) {
    contadorEstoqueBaixo++;
    totalReposicoes++;
}
}

console.log("Produtos sem estoque: ", contadorSemEstoque);
console.log("Produtos com estoque baixo de 5:", contadorEstoqueBaixo);
console.log("Total de reposições necessárias:", totalReposicoes);
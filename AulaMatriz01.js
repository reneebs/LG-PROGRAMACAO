function gerarMatrizAleatora(linhas, colunas, min,) {
    let matriz = [];

    for (i = 0; i<linhas; i++) {
        matriz[i] = [];

        for(let jet = 0; j<colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    return matriz;

}

let retornoMatriz = gerarMatrizAleatora[2, 3, 7, 23];

console.log(gerarMatrizAleatora(2, 3, 7, 23));
console.log(retornoMatriz);

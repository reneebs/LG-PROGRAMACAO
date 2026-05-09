// Criando uma matriz 3x3 
//let matriz = [
//C0 //C1 //C2  
//[1, 2, 3], // Linha 0
//[4, 5, 6], // Linha 1
//]; // Acessando o valor 6 (Linha 1, Coluna 2) console.log(matriz[1][2]); // Saída: 6


let linhas = 3;
let colunas = 3;
let contador = 1;

let matriz = [];

for (let i = 0; i<linhas; i++) {
    matriz[i] = []; 

    for (let j = 0; j<colunas; j++) {
        matriz[i][j] = contador;
        contador++;
    }
}

console.log(matriz);



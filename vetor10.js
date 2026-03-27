// Filtragem: Numeros pares
// Objetivo: utilizar .filter() para selecionar apenas os numeros pares
// Entrada: um vetor com os numeros [1, 2, 3, 4, 5, 6]
// Saida: um novo vetor contendo apenas os numeros pares


let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);
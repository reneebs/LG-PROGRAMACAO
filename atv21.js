//Filtragem: valores maiores que 10
//Objetivo: utilizar .filter() para extrair apenas os numeros maiores que 10
//Entrada: um vetor com os numeros [5, 12, 8, 20, 3]
//Saida: um novo vetor contendo apenas os numeros maiores que 10

let numeros = [5, 12, 8, 20, 3];
let numerosMaioresQue10 = numeros.filter(numero => numero > 10);
console.log(numerosMaioresQue10);

// Filtragem: nomes com mais de 4 letras
// Objetivo: utilizar .filter() para selecionar strings com tamanho maior que 4
// Entrada: um vetor com os nomes ["Ana", "Bruno", "Carlos", "Eva"]
// Saida: um novo vetor contendo apenas os nomes com mais de 4 letras

let nomes = ["Ana", "Bruno", "Carlos", "Eva", "Joao", "Maria", "Pedro"];
let nomesComMaisDe4Letras = nomes.filter(nome => nome.length > 4);
console.log(nomesComMaisDe4Letras);
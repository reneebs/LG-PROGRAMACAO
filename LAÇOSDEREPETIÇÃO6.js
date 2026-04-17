// Usar FOR para somar os elementos do vetor, Dividir por 5 para saber a média (quantidade de elementos do vetor)
// Maior e menor valor do vetor acima, usando as estruturas condicionais dentro do PARA

let vetor = [5, 10, 15, 20, 25];
let soma = 0;
let maior = vetor[0];
let menor = vetor[0];
let media = 0;

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
    
    if(vetor[i] > maior) {
        maior = vetor[i];
    
    } else if(vetor[i] < menor) {
        menor = vetor[i];
    }

}

media = soma / vetor.length

console.log('\nA soma de todos os valores são: ' + soma);
console.log('\nO maior número é: ' + maior);
console.log('\nO menor número é: ' + menor);
console.log('\nA média do vetor é: ' + media);
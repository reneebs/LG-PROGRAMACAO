//Ao escrever determinado vetor:
 //inteiro valores[5] = {3, 7, 2, 9, 5}
  //Trazer qual posição pertence cada número a depender do digitado pelo usuário.
console.log('\n=====CODIGO COM PROMPT=====\n');

const prompt = require('prompt-sync')();

let valores = [3, 7, 2, 9, 5];
let num = Number(prompt('Digite o valor: '));
let encontrado = false;

for (let i = 0; i < valores.length; i++) {
    
    if (num == valores[i]) {
        console.log('Valor encontrado na posição: '+i);
        encontrado = true;
    }
 }  

 if (encontrado == false) {
    console.log('\nValor não encontrado');

}



// O MESMO CODIGO (SEM PROMPT)
console.log('\n=====CODIGO SEM PROMPT=====');

let values = [3, 7, 2, 9, 5];
let numero = 3;

for (let i = 0; i < values.length; i++) {
    if (values[i] === numero) {
        console.log("\nValor encontrado na posição:", i);
        console.log('\n===========================');
    }
}
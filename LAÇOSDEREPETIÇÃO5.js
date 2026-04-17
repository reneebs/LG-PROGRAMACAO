//Escrever um programa que descubra a maior e menor idade dentro de um grupo de 10 pessoas. 

let maiores = 0;
let menores = 0;
let grupo = [];
const prompt = require('prompt-sync')();

for (let i = 0; i<10; i++) {
    let idade = Number(prompt('Digite a idade: '));
    grupo.push(idade);

    if(idade>=18) {
        maiores++;
    } else {
        menores++;
   }

}
console.log('Quantidades de pessoas maior idade: ' + maiores);
console.log('Quantidades de pessoas menor idade: ' + menores);
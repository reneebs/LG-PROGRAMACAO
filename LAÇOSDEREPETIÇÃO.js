//ESCREVER UM PROGRAMA QUE LEIA A IDADE 7 PESSOAS E NO FINAL DIGA QUANTAS PESSOAS SÃO MAIORES DE IDADE (>=18 ANOS
    
let maiores = 0;
const prompt = require('prompt-sync')();


for (let i = 0; i < 7; i++)
{
    let idade = prompt("Digite a idade: ");
    
        if (idade>=18)
         {    
             maiores++;
         }
}

console.log("Pessoas maiores de idades: " + maiores);
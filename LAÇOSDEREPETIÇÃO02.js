//  Escrever um programa que leia 10valores inteiros e ao final exiba a soma dos números positivos. 
let soma = 0;
const prompt = require("prompt-sync")();

for (let i = 0; i < 10; i++)

{
    let numeros = parseInt(prompt("Digite o número " + (i + 1) + ": "));
    
    if(numeros>0)
    {
        soma += numeros;

    }
}

console.log("Soma  dos valores positivos: " + soma);


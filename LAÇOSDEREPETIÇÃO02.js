// ESCREVER UM PROGRAMA QUE LEIA 10 VALORES INTEIROS E AO FINAL EXIBA A SOMA DOS NUMEROS POSITIVOS
let soma = 0;

for (let i = 0; i < 10; i++)

{
    let numeros = parseInt(prompt("Digite o numero inteiro" + (i + 1) + ":"));
    
    if(numeros>0)
    {
        soma += numeros;

    }
}

console.log("soma  dos valores positivos: " + soma);
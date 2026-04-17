//Escrever um programa que leia uma quantidade desconhecida de números inteiros e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100].
//  A entrada de dados deve terminar quando for lido um número negativo


let inter1 = 0; inter2 = 0; inter3 = 0; inter4 = 0;

while(true)

{

    let num = parseInt(prompt("Digite um n°(negativo para sair):"));

    if(num<0){
     inter1++;
   
    }else if(num<=25){
        inter2++;
    }else if(num<=75){
        inter3++;
    }else if(num<= 100){
        inter4++;
    }
}

console.log("intervalo 1 - quantidade:", inter1);
console.log("intervalo 2 - quantidade:", inter2);
console.log("intervalo 3 - quantidade:", inter3);
console.log("intervalo 4 - quantidade:", inter4);
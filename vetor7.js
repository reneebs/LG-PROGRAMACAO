//Filtragem: verificacao de maioridade
 //Objetivo aplicar logica condicional ou metodos de alta ordem (filter) para extrair subconjuntos de dados
    //Entrada: um vetor com idades [12, 18, 25, 10, 30, 15]
    //Saida: um novo vetor contendo apenas os valores >=18.


let idades = [12, 18, 25, 10, 30, 15];

let maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); 
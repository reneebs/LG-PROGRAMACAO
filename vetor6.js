//Gereciamento de lista: compras
 //objetivo: aprender a utilizar metodos dinamicos para inserir (push) e remover (shift) elementos
  //entrada: um vetor vazio [] e comandos para adicionar arroz feijao e leite
  //  
   //saida: o item removido arroz e a lista final contendo apenas os dois itens restantes 


let listaDeCompras = [];

listaDeCompras.push("Arroz");
listaDeCompras.push("Feijão");
listaDeCompras.push("Leite");
listaDeCompras.shift("Arroz");
listaDeCompras.pop("Leite");

console.log(listaDeCompras);
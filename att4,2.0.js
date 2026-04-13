const prompt = require('prompt-sync')();

let time = []
let opcao = "";

while (opcao !== '3') {
    
    console.log('\n ======================= MENU =============================')
    console.log('1. Cadastrar');
    console.log('2. Listar ');
    console.log('3. Sair');
    opcao = prompt (' opção: ')

    if(opcao == '1'){
       let jogador = prompt('Digite o nome: ');
       let idade = prompt('Digite sua idade: ');
       let posicao = prompt('Digite a posiçao: ');
       let numero = prompt('Digite o numero da camisa: ');
       
       let Jogador = {
        nome: jogador,
        idade: idade,
        posicao: posicao,
        numero: numero,
       }
      time.push(Jogador);
      
    }else if(opcao == '2') {
       for (let i = 0; i < time.length; i++) {
    let j = time[i];
    console.log(`${i + 1}. ${j.nome} - ${j.posicao} - Camisa ${j.numero}`);
}
    }else if(opcao == '3') {
        console.log('Saindo');
    }else{
        console.log('opção inválida');
    }
}
 
const prompt = require('prompt-sync')();

let nomes = [];
let opcao = "";

while (opcao !== '3') {
    
    console.log('\n ======================= MENU =============================')
    console.log('1. Cadastrar');
    console.log('2. Listar ');
    console.log('3. Sair');
    opcao = prompt (' opção: ')

    if(opcao == '1'){
       let nome = prompt('Digite seu nome: ');
       nomes.push(nome);
    }else if(opcao == '2') {
        for (let i = 0; i < nomes.length; i++) {
    console.log(`${i + 1}. ${nomes[i]}`);
}
        if(nomes.length === 0){
            console.log('Nenhum nome cadastrado.');
        }
    }else if(opcao == '3') {
        console.log('Saindo');
    }else{
        console.log('opção inválida');
    }
}
 
// 1* Cadastrar pedido (input)     // 2* Listar pedidos (output visual)     // 3* Resumo gerencial (Analystics)  // 4* Buscar pedido (query)  // 5* Sair (Break loop -> Relátorio FInal)




let option = '';
let prazos = []; 
let quantidades = []; 
let setores = []; 
let prioridades = [];

const prompt = require('prompt-sync')();

while (option !== '5') {
    console.log('\n------Menu------');
    console.log('1. Prazos');
    console.log('2. Quantidades');
    console.log('3. Setores');
    console.log('4. Prioridades');
    console.log('5. Sair');

    option = prompt('Digite a opção desejada: ');
   
    
    
    if (option ==='1') {
        const prazo = Number(prompt('Digite o prazo do produto: '));
        console.log('Faltam');
        prazos.push(prazo);
        
    
    } else if (option ==='2') {
        const perdas = Number(prompt('Digite a quantidade perdida do produto: '));
        console.log('Perdidos');
        quantidades.push(perdas);
  
    } else if (option ==='3') {
        const setor = prompt('Digite o setor: ');
        console.log('Setor escolhido');
        setores.push(setor);

    } else if (option ==='4') {
        const prioridade = prompt('Digite a prioridade: ');
        console.log('Prioridade inicializada');
        prioridades.push(prioridade);
    }

}
const prompt = require('prompt-sync')();

let option = '';

let pedidos = [
    {
        codigo: 1,
        produto: 'Bebida',
        quantidade: 20,
        setor: 'Bar',
        prazo: 2,
        prioridade: 'Média'
    },
    {
        codigo: 2,
        produto: 'Lanche',
        quantidade: 10,
        setor: 'Cozinha',
        prazo: 5,
        prioridade: 'Alta'
    }
];

while (option !== '5') {
    console.log('\n========= MENU ==========');
    console.log('1. Cadastrar pedido');
    console.log('2. Listar pedidos');
    console.log('3. Resumo');
    console.log('4. Buscar por código'); 
    console.log('5. Sair');

    option = prompt('Escolha uma opção: ');

    // CADASTRAR
    if (option === '1') {
        let codigo = Number(prompt('Código: '));
        let produto = prompt('Produto: ');
        let quantidade = Number(prompt('Quantidade: '));
        let setor = prompt('Setor: ');
        let prazo = Number(prompt('Prazo: '));
        let prioridade;

        if (prazo <= 2) prioridade = 'Urgente';
        else if (prazo <= 5) prioridade = 'Alta';
        else if (prazo <= 10) prioridade = 'Média';
        else prioridade = 'Baixa';

        let pedido = {
            codigo,
            produto,
            quantidade,
            setor,
            prazo,
            prioridade
        };

        pedidos.push(pedido);
        console.log('✅ Pedido cadastrado!');
    }

    // LISTAR
    else if (option === '2') {
        console.log('\n--- LISTA DE PEDIDOS ---');
        for (let i = 0; i < pedidos.length; i++) {
            console.log(
                `${i + 1}. Código: ${pedidos[i].codigo} | Produto: ${pedidos[i].produto} | Setor: ${pedidos[i].setor}`
            );
        }
    }

    // RESUMO
    else if (option === '3') {
        let total = pedidos.length;
        console.log(`\nTotal de pedidos: ${total}`);
    }

    // BUSCAR
    else if (option === '4') {
        let buscar = Number(prompt('Digite o código: '));
        let encontrado = false;

        for (let p of pedidos) {
            if (p.codigo === buscar) {
                console.log('\nPedido encontrado:');
                console.log(p);
                encontrado = true;
            }
        }

        if (!encontrado) {
            console.log('❌ Pedido não encontrado');
        }
    }

    // OPÇÃO INVÁLIDA
    else if (option !== '5') {
        console.log('⚠️ Opção inválida');
    }
}

console.log('Programa encerrado.');
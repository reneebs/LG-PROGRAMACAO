const prompt = require('prompt-sync')();
const alunos = [];
const notas = [];
let option = '';

// Menu interativo
while (option !== '3') {
    console.log('\n------Menu------');
    console.log('1. Cadastrar alunos');
    console.log('2. Listar alunos');
    console.log('3. Sair');

    option = prompt('Digite a opção desejada: ');

    // CADASTRO DO USUARIO
    if (option === '1') {
        const nome = prompt('Digite o nome do aluno: ');
        const nota = Number(prompt(`Digite a nota de ${nome}: `));
        alunos.push(nome);
        notas.push(nota);
        console.log('Aluno cadastrado com sucesso!');
    }
    // Listando alunos
    else if (option === '2') {
        if (alunos.length === 0) {
            console.log('Não existe nenhum aluno cadastrado!');
        } else {
            console.log('\n-----Lista de alunos-----');
            for (let i = 0; i < alunos.length; i++) {
                console.log(`Aluno: ${alunos[i]} | Nota: ${notas[i]} | Situação: ${notas[i] >= 7 ? 'Aprovado' : 'Reprovado'}`);
            }
        }
    }
    // OPCAO DE SAIR
    else if (option === '3') {
        console.log('Obrigado por nos visitar');
    }
}

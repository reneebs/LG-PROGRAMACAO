//Sistema de notas
//Receber nome e nota de 3 alunos
//Exibir situacao (>= 7 aprovado, < 7 Reprovado)


let NomeDoAluno = [];
let NotaDoAluno = [];
const prompt = require('prompt-sync')();

for (let i = 0; i < 1; i++) {


    let nome = (prompt("nome do aluno: "));
    NomeDoAluno.push(nome);

    let nota = (prompt("nota do aluno: "));
    NotaDoAluno.push(Number(nota));

    if (nota>=7) {
        console.log("Aluno, " + nome + " Aprovado ");

    } else
        console.log("Aluno, " + nome + " Reprovado");
}
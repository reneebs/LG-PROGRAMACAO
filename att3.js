// Receber nome e nota de 3 alunos.
// Exibir Situação ( >= 7 Aprovado, < 7 Reprovado).

const prompt = require("prompt-sync")();

let nome = [];
let nota = [];
let aprovados = [];
let reprovados = [];

for (let i = 0; i < 1; i++) {
    let notas = parseFloat(prompt("Digite a nota do aluno:"));
     let alunos = prompt("Digite: nome do aluno " );
    
    nome.push(alunos);
    nota.push(notas);

    if (notas >= 7 ){
        aprovados.push(alunos);
    }else{
        reprovados.push(alunos);
    }
}
console.log("Aprovados", aprovados);
console.log("Reprovados", reprovados);
console.log(nota);

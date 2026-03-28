//Analise de notas escolares 
//Uma turma realizou uma prova e as notas dos alunos formam um vetor
//Calcular a média da turma
//Contar aprovados (>= 7)
//Contar reprovados
//mostrar a maior nota

let notas = [8, 6, 9, 5, 7, 10, 4];
let somaNotas = 0;
let contadorAprovados = 0;
let contadorReprovados = 0;
let maiorNota = notas[0];

for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  somaNotas += nota;

  if (nota >= 7) {
    contadorAprovados++;
  } else {
    contadorReprovados++;
  }

  if (nota > maiorNota) {
    maiorNota = nota;
  }
}

console.log("Média da turma:", somaNotas / notas.length);
console.log("Aprovados:", contadorAprovados);
console.log("Reprovados:", contadorReprovados);
console.log("Maior nota:", maiorNota);
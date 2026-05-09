// Matriz 2x3: 2 alunos, 3 disciplinas
let notas = [
  [7, 8, 93],  // Aluno 0: Matemática, Português, Ciências
  [6, 5, 10],
  [2, 4, 15], // Aluno 1: Matemática, Português, Ciências 
];

for (let i = 0; i < notas.length; i++) {
  console.log("Aluno " + i + ":");
  
  for (let j = 0; j < notas[i].length; j++) {
    console.log("  Disciplina " + j + ": " + notas[i][j]);
  }
}
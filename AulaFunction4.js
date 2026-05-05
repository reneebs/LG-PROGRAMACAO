// PROGRAMA PARA CALCULAR SALARIO COM BONUS
// USA DUAS FUNCOES: UMA PARA SALARIO BRUTO E OUTRA PARA ACRESCENTAR BONUS

const prompt = require('prompt-sync')();

// FUNCAO QUE CALCULA O SALARIO BRUTO
// RECEBE HORAS TRABALHADAS E VALOR DA HORA
function calcularSalarioBruto(horas, valorHora) {
    let salarioBruto = horas * valorHora;
    return salarioBruto;
}

// FUNCAO QUE ACRESCENTA BONUS SE SALARIO FOR MENOR QUE 2000
// RECEBE O SALARIO BRUTO E RETORNA O VALOR FINAL
function calcularSalarioFinal(salarioBruto) {
    if (salarioBruto < 2000) {
        let bonus = 200;
        let salarioFinal = salarioBruto + bonus;
        return salarioFinal;
    } else {
        return salarioBruto;
    }
}

// PROGRAMA PRINCIPAL
// PERGUNTA OS DADOS AO USUARIO
let nome = prompt("Digite o nome do funcionario: ");
let horas = Number(prompt("Digite as horas trabalhadas: "));
let valorHora = Number(prompt("Digite o valor da hora: "));

// CHAMA A FUNCAO PARA CALCULAR SALARIO BRUTO
let salarioBruto = calcularSalarioBruto(horas, valorHora);

// CHAMA A FUNCAO PARA CALCULAR SALARIO FINAL (COM BONUS SE TIVER)
let salarioFinal = calcularSalarioFinal(salarioBruto);

// MOSTRA OS RESULTADOS
console.log("Nome:", nome);
console.log("Salario bruto:", salarioBruto);
console.log("Salario final:", salarioFinal);

let comprimento = 30
let altura = 2.5
let impostos = 12
let metroquadrado = 120

let calcule = comprimento * altura
console.log(calcule)


let valor_sem_impostos = calcule * metroquadrado
console.log(valor_sem_impostos)


let valor_do_imposto = valor_sem_impostos * impostos / 100
console.log(valor_do_imposto)


let valor_final = valor_do_imposto + valor_sem_impostos
console.log(valor_final)
//Consumo de energia inteligente 
//casa inteligente monitora o consumo diario kWh por uma semana
//calcular o consumo total
//identificar o dia com maior consumo(>50)
//verificar consumo critico (>58)
//calcular media 

let consumo = [45, 52, 48, 60, 55, 49, 53];
let totalConsumo = 0;
let diaMaiorConsumo = "";
let consumoCritico = false;

for (let i = 0; i < consumo.length; i++) {
    let valor = consumo[i];
    totalConsumo += valor;
if (valor > 50) {
    diaMaiorConsumo = "Dia " + (i + 1) + " com consumo de " + valor + " kWh";
}
if (valor > 58) {
    consumoCritico = true;
}
}
console.log("Total de consumo:", totalConsumo);
console.log("Dia com maior consumo:", diaMaiorConsumo);
console.log("Consumo crítico detectado:", consumoCritico);
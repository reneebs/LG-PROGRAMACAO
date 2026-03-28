//Exc Monitoramendo de servidores
 //Sistema monitora a temperatura de um servidor ao longo do dia 

let temperatura = [70, 24, 95, 85, 95];
let contadorMais80 = 0;
let soma = 0;

for (let i = 0; i < temperatura.length; i++) {
    let temp = temperatura[i];

soma += temp;

if (temp > 80) {
    contadorMais80++;
}

if (temp > 90) {
    console.log("alerta temperatura crítica - >", temp, "°C");
}

}

let media = soma / temperatura.length;

console.log("quantas vezes a temperatura ultrapassou 80°C ", contadorMais80);
console.log("a media das temperaturas é ", media.toFixed(2) + "°C");


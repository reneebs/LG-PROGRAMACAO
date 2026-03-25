let consumoKwh = 100;
 
if (consumoKwh <= 100) {
    console.log("O valor a ser pago é: R$ 0,60");

} else if (consumoKwh > 101 && consumoKwh <= 200) {
    console.log("O valor a ser pago é: R$ 0,75");

} else {
    console.log("O valor a ser pago é: R$ 0,90");
}
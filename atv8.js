let idade = 12;
let tem_autorizacao = true;


if(idade>=18) {
    console.log("ACESSO LIBERADO");
} else if (idade>=16 && tem_autorizacao) {
    console.log("ACESSO LIBERADO");
}else {
    console.log("ACESSO NEGADO");
}


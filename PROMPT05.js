//Cadastro com menu

//Objetivo criar menu, 1cadastrar 2listar 3sair
//o sistema roda até escolher sair

const prompt = require("prompt-sync")();

let opcao = "";
let lista = [];

while (opcao !== "3") {
    console.log("\n--- MENU ---");
    console.log("1 - cadastrar nome");
    console.log("2 - listar nomes");
    console.log("3 - sair");

    opcao = prompt("Escolha: ");

    if (opcao === "1") {
        let nome = prompt("digite um nome: ");
        lista.push(nome);
        console.log("Nome cadastrado!");

    } else if (opcao === "2") {
        console.log("\nlista:");

        if (lista.length === 0) {
            console.log("não tem ninguém cadastrado ainda.");
        } else {
            for (let i = 0; i < lista.length; i++) {
                console.log((i + 1) + " - " + lista[i]);
            }
        }

    } else if (opcao === "3") {
        console.log("saindo...");

    } else {
        console.log("opção inválida, tenta de novo.");
    }
}
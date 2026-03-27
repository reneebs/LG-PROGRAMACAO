// Historico de acoes: remocao do ultimo registro
//objetivo: utilizar .pop() para remover a acao mais recente
//entrada: um vetor com acoes: ["login", "visualizar", "logout"]
//saida: acao removida (logout) e vetor com as acoes restantes.


let Ações = ["login", "visualizar", "logout"];

let acaoRemovida = Ações.pop("logout");

console.log("ação removida: " + acaoRemovida);
console.log("ações restantes: " + Ações);

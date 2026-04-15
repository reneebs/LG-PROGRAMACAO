const prompt = require('prompt-sync')();
var option = '';
var produtos = [];
var valores = [];
var prazos = [];
var prios = [];

while (option != '5')
{
  console.log('menu pedidos');
  console.log('1 cadastrar');
  console.log('2 listar');
  console.log('3 resumo');
  console.log('4 buscar');
  console.log('5 sair');
  option = prompt('op: ');

  if (option == '1')

  {
    var prod = prompt('produto: ');
    var val = Number(prompt('valor: '));
    var pra = Number(prompt('prazo dias: '));
    var prio;

    if (pra <= 2)
      prio = 'vermelha';
    else if (pra <= 5)
      prio = 'laranja';
    else if (pra <= 10)
      prio = 'amarela';
    else
      prio = 'verde';
    
    produtos.push(prod);
    valores.push(val);
    prazos.push(pra);
    prios.push(prio);

    console.log('cadastrado');
  }
  else if (option == '2')

  {
    console.log('pedidos:');

    for (var i = 0; i < produtos.length; i++)
    {
      console.log(produtos[i] + ' ' + valores[i] + ' dias: ' + prazos[i] + ' ' + prios[i]);
    }
  }
  else if (option == '3')

  {
    var totval = 0;
    var verm = 0;
    var laran = 0;
    var amar = 0;
    var verd = 0;

    for (var i = 0; i < produtos.length; i++)
    {
      totval = totval + valores[i];

      if (prios[i] == 'vermelha')
        verm = verm + 1;
      if (prios[i] == 'laranja')
        laran = laran + 1;
      if (prios[i] == 'amarela')
        amar = amar + 1;
      if (prios[i] == 'verde')
        verd = verd + 1;
    }

    console.log('total pedidos ' + produtos.length);
    console.log('valor total ' + totval);
    console.log('vermelha ' + verm + ' laranja ' + laran + ' amarela ' + amar + ' verde ' + verd);
    
  }
  else if (option == '4')
  {
    var busca = prompt('produto: ');

    for (var i = 0; i < produtos.length; i++)
    {
      if (produtos[i] == busca)
      {
        console.log(produtos[i] + ' ' + valores[i] + ' dias: ' + prazos[i] + ' ' + prios[i]);
      }
    }
  }
}

// 26)  Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'.

function clicar() {
    var QuantidadeAtual = parseFloat(document.querySelector(".QuantidadeAtual").value);
    var QuantidadeMaxima = parseFloat(document.querySelector(".QuantidadeMaxima").value);
    var QuantidadeMinima = parseFloat(document.querySelector(".QuantidadeMinima").value);

    var QuantidadeMedia = (QuantidadeMaxima - QuantidadeMinima) / parseFloat(2);

    if (QuantidadeAtual >= QuantidadeMedia) {
        
        document.querySelector(".resultado").innerHTML = "Não efetuar compra";
    } else {
        
        document.querySelector(".resultado").innerHTML = "Efetuar compra";
    }
}
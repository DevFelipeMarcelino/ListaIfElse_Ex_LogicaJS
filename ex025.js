// 25) Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

function clicar() {
    var saldo = parseFloat(document.querySelector(".saldo").value);
    var debito = parseFloat(document.querySelector(".debito").value);
    var credito = parseFloat(document.querySelector(".credito").value);

    var SaldoAtual = saldo - debito + credito;

    if (SaldoAtual >= 0) {
        var resultado = SaldoAtual.toFixed(2);
        document.querySelector(".resultado").innerHTML = "Seu saldo atual é: R$"+ resultado+ " ...Saldo positivo";
    } else {
        var resultado = SaldoAtual.toFixed(2);
        document.querySelector(".resultado").innerHTML = "Seu saldo atual é: R$"+ resultado+ " ...Saldo negativo";
    }
}
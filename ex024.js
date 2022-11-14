// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total.

function clicar() {
    var salarioFixo = parseFloat(document.querySelector(".salarioFixo").value);
    var ValorVendas = parseFloat(document.querySelector(".ValorVendas").value);

    if (ValorVendas <= 1500) {
        var FinalVendas= ValorVendas * parseFloat(0.03);
        var TotalSalario= FinalVendas + salarioFixo;
        var resultado = TotalSalario.toFixed(2);
        document.querySelector(".resultado").innerHTML = "Salário final será de: R$"+ resultado;
    } else {
        var TotalVendas= parseFloat(45) + ((ValorVendas - parseFloat(1500)) * 0.05)
        TotalSalario= TotalVendas + salarioFixo
        var resultado = TotalSalario.toFixed(2);
        document.querySelector(".resultado").innerHTML = "Salário final será de: R$"+ resultado;
    }
}

function clicar() {
    var LitrosVendidos = parseFloat(document.querySelector(".LitrosVendidos").value);
    var TipoLitro = document.querySelector(".TipoLitro").value;


    if (TipoLitro = "A" && LitrosVendidos <= 20) {
        var valor = LitrosVendidos * parseFloat(3.30);
        var valorFinal = valor - (valor * parseFloat(0.03));
        document.querySelector(".resultado").innerHTML = "O valor a ser pago deverá ser de: R$ "+valorFinal;

    } else if (TipoLitro = "A" && LitrosVendidos > 20) {
        var valor = LitrosVendidos * parseFloat(3.30);
        var valorFinal = valor - (valor * parseFloat(0.05));
        document.querySelector(".resultado").innerHTML = "O valor a ser pago deverá ser de: R$ "+valorFinal;

    } else if (TipoLitro = "G" && LitrosVendidos <= 20){
        var valor = LitrosVendidos * parseFloat(3.30);
        var valorFinal = valor - (valor * parseFloat(0.04));
        document.querySelector(".resultado").innerHTML = "O valor a ser pago deverá ser de: R$ "+valorFinal;
    }
    else if(TipoLitro = "G" && LitrosVendidos > 20){
        var valor = LitrosVendidos * parseFloat(3.30);
        var valorFinal = valor - (valor * parseFloat(0.06));
        document.querySelector(".resultado").innerHTML = "O valor a ser pago deverá ser de: R$ "+valorFinal;
    }
}


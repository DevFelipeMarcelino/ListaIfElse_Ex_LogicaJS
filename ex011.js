
function clicar() {
    var a= document.querySelector(".a").value;
    var b= document.querySelector(".b").value;

    var QuadradoDiferenca= (parseInt(a) - parseInt(b)) * (parseInt(a) - parseInt(b));

    document.querySelector(".QuadradoDiferenca").innerHTML = QuadradoDiferenca;

}
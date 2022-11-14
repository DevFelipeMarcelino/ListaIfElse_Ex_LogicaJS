// 29)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores.

function clicar() {
    var valor1 = parseFloat(document.querySelector(".valor1").value);
    var valor2 = parseFloat(document.querySelector(".valor2").value);

    if (valor1 > valor2){

        document.querySelector(".resultado").innerHTML = "Primeiro é maior";
    } else if (valor2 > valor1) {

        document.querySelector(".resultado").innerHTML = "Segundo maior";
    } else {

        document.querySelector(".resultado").innerHTML = "Números iguais";
    }
}
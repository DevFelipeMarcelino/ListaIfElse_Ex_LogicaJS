// 29)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais) e  escrever  a  soma  dos  2 maiores.

function clicar() {
    var valor1 = parseFloat(document.querySelector(".valor1").value);
    var valor2 = parseFloat(document.querySelector(".valor2").value);
    var valor3 = parseFloat(document.querySelector(".valor3").value);

    if (valor1 > valor2 && valor1 > valor3){

        document.querySelector(".resultado").innerHTML = "O primeiro valor é o maior entre eles";
    } else if (valor2 > valor1 && valor2 > valor3) {

        document.querySelector(".resultado").innerHTML = "O segundo valor é o maior entre eles";
    } else {

        document.querySelector(".resultado").innerHTML = "O terceiro valor é o maior entre eles";
    }
}
// 27) Ler um valor e escrever se é positivo, negativo ou zero.

function clicar() {
    var valor = parseFloat(document.querySelector(".valor").value);


    if (valor > 0) {

        document.querySelector(".resultado").innerHTML = "Número positivo";
    } else if (valor < 0) {

        document.querySelector(".resultado").innerHTML = "Número negativo";
    } else {

        document.querySelector(".resultado").innerHTML = "Número igual a zero";
    }
}
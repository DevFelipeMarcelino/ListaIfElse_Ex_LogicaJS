// 31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

function clicar() {
    var valor1 = parseFloat(document.querySelector(".valor1").value);
    var valor2 = parseFloat(document.querySelector(".valor2").value);
    var valor3 = parseFloat(document.querySelector(".valor3").value);

    var soma1 = valor2 + valor3;
    var soma2 = valor1 + valor3;
    var soma3 = valor1 + valor2;

    if (valor1 < soma1){

        document.querySelector(".resultado").innerHTML = "Forma um triângulo";
    } else if (valor2 < soma2) {

        document.querySelector(".resultado").innerHTML = "Forma um triângulo";
    }
    else if (valor3 < soma3) {

        document.querySelector(".resultado").innerHTML = "Forma um triângulo";
    }
    else {

        document.querySelector(".resultado").innerHTML = "Não forma um triângulo";
    }
}
// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

function clicar() {
    let valor1 = document.querySelector(".valor1").value;
    let valor2 = document.querySelector(".valor2").value;

    if (valor1 > valor2) {
        document.querySelector(".resultado").innerHTML = valor1 + " é maior que " + valor2;
    } else {
        document.querySelector(".resultado").innerHTML = valor2 + " é maior que " + valor1;
    }
}
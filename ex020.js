// 20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

function clicar() {
    let valor1 = document.querySelector(".valor1").value;
    let valor2 = document.querySelector(".valor2").value;

    if (valor2 > valor1) {
        document.querySelector(".resultado").innerHTML = "A ordem ficará " + valor1 + " e " + valor2;
    } else {
        document.querySelector(".resultado").innerHTML = "A ordem ficará " + valor2 + " e " + valor1;
    }
}
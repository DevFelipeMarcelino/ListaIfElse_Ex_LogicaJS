//15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

function clicar() {
    let valor= document.querySelector(".valor").value;

    if (valor>0) {
        document.querySelector(".resultado").innerHTML = "Positivo";
    } else if (valor<0){
        document.querySelector(".resultado").innerHTML = "Negativo";
    }}

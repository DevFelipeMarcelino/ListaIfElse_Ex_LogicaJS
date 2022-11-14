// 32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

function clicar() {
    var time1 = document.querySelector(".time1").value;
    var time2 = document.querySelector(".time2").value;
    var gols1 = parseFloat(document.querySelector(".gols1").value);
    var gols2 = parseFloat(document.querySelector(".gols2").value);

    if (gols1 > gols2){

        document.querySelector(".resultado").innerHTML = "O time vencedor foi: "+time1;
    } else if (gols1 < gols2) {

        document.querySelector(".resultado").innerHTML = "O time vencedor foi: "+time2;
    } else {

        document.querySelector(".resultado").innerHTML = "Houve empate!";
    }
}
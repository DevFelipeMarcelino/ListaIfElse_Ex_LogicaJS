// 13)  Faça  um  algoritmo  que  leia  três  notas  de  um  aluno,  calcule  e  escreva  a  média  final  deste  aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: (n1 * 2 + n2 * 3 + n3 * 5 ) / 10

function clicar() {
    var Nota1 = parseFloat(document.querySelector(".Nota1").value);
    var Nota2 = parseFloat(document.querySelector(".Nota2").value);
    var Nota3 = parseFloat(document.querySelector(".Nota3").value);
    

    var Media = ((Nota1*2) + (Nota2 * 3) + (Nota3 * 5)) / 10;

    document.querySelector(".resultado").innerHTML = "Media do aluno foi: "+Media;


}
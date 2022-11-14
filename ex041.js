// 41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

//                              N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = ---------------------------------------------------------
//                                                7
// Média de Aproveitamento Conceito
// > = 9,0 A
// > = 7,5 e < 9,0 B
// > = 6,0 e < 7,5 C
// < 6,0 D

function clicar() {
    var Nota1 = parseFloat(document.querySelector(".Nota1").value);
    var Nota2 = parseFloat(document.querySelector(".Nota2").value);
    var Nota3 = parseFloat(document.querySelector(".Nota3").value);
    var MediaExercicios = parseFloat(document.querySelector(".MediaExercicios").value);

    var MediaAproveitamento = (Nota1 + Nota2 * 2 + Nota3 * 3 + MediaExercicios) / 7;

    if (MediaAproveitamento >= 9) {
        document.querySelector(".resultado").innerHTML = "O aluno ficou com A";

    } else if (MediaAproveitamento >= 7 && MediaAproveitamento < 9) {
        document.querySelector(".resultado").innerHTML = "O aluno ficou com B";

    } else if (MediaAproveitamento >= 6 && MediaAproveitamento < 7) {
        document.querySelector(".resultado").innerHTML = "O aluno ficou com C";
    }
    else if (MediaAproveitamento < 6) {
        document.querySelector(".resultado").innerHTML = "O aluno ficou com D";
    }

}
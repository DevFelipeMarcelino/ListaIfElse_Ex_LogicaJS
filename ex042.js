// 42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
//estar em condições, um dos seguintes requisitos deve ser satisfeito:
//- Ter no mínimo 65 anos de idade.
//- Ter trabalhado no mínimo 30 anos.
//- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
//Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
//de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
//de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.

function clicar() {
    var AnoNascimento = parseInt(document.querySelector(".AnoNascimento").value);
    var EntradaEmpresa = parseInt(document.querySelector(".EntradaEmpresa").value);
    var AnoAtual = parseInt(document.querySelector(".AnoAtual").value);

    var Idade = AnoAtual - AnoNascimento;
    var TempoEmpresa = AnoAtual - EntradaEmpresa;

    if (Idade >= 65) {
        document.querySelector(".resultado").innerHTML = "Requerer aposentadoria";

    } else if (TempoEmpresa >= 30) {
        document.querySelector(".resultado").innerHTML = "Requerer aposentadoria";

    } else if (Idade >= 60 && TempoEmpresa >= 25) {
        document.querySelector(".resultado").innerHTML = "Requerer aposentadoria";
    }
    else {
        document.querySelector(".resultado").innerHTML = "Não requerer aposentadoria";
    }

}
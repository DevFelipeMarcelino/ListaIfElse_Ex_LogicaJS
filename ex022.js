//22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 

function clicar() {
    var HoraMes = document.querySelector(".HoraMes").value;
    var SalarioHora = document.querySelector(".SalarioHora").value;

    var SalarioFinal = parseFloat(HoraMes)  / parseFloat(4);

    if (SalarioFinal <= 40) {
        var SalarioFinal= parseFloat(SalarioFinal) * parseFloat(SalarioHora);
        var resultado = SalarioFinal.toFixed(2);
        document.querySelector(".resultado").innerHTML = "O salário ficará R$ "+ resultado;
    } else {
        var SalarioFinal= ((parseFloat(SalarioFinal) * parseFloat(0.5)) + parseFloat(SalarioFinal)) * parseFloat(SalarioHora);
        var resultado = SalarioFinal.toFixed(2);
        document.querySelector(".resultado").innerHTML = "O salário ficará R$ "+ resultado;
    }
}
// 18)  Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
function clicar() {
    let nascimento= document.querySelector(".nascimento").value;
    let anoAtual= document.querySelector(".anoAtual").value;

    let idade = parseInt(anoAtual) -parseInt(nascimento);

    if (idade>15) {
        document.querySelector(".idade").innerHTML = "Você pode votar!";
    } else {
        document.querySelector(".idade").innerHTML = "Você não pode votar!";
    }}

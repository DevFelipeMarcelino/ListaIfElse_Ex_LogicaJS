// 16) As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. 

function clicar() {
    let nota1= document.querySelector(".nota1").value;
    let nota2= document.querySelector(".nota2").value;

    let media= (parseInt(nota1) + parseInt(nota2)) / parseInt(2)

    if (media>=6) {
        document.querySelector(".media").innerHTML = media+" e ele foi Aprovado";
    } else if (media<6){
        document.querySelector(".media").innerHTML = media+" e ele foi Reprovado";
    }}

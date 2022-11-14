// 16) As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. 

function clicar() {
    let macas= document.querySelector(".macas").value;

    if (macas<12) {
        let preco = parseFloat(macas) * parseFloat(1.30);
        document.querySelector(".preco").innerHTML = "Cada maçã saiu R$1,30, ficando assim: R$ "+preco;
    } else {
        document.querySelector(".preco").innerHTML = "Cada maçã saiu R$1,30, ficando assim: R$ "+macas;
    }}

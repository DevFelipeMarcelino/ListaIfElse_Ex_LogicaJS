// 14)  Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10!  se  o  valor  lido  for  maior  que  10,  caso contrário escrever NÃO É MAIOR QUE 10! 

function clicar() {
    let valor= document.querySelector(".valor").value;

    if (valor>10) {
        document.querySelector(".resultado").innerHTML = "Maior que 10";
    } else if (valor<10){
        document.querySelector(".resultado").innerHTML = "Menor que 10";
    }}

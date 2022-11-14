// 30)  Ler  3  valores (considere  que  não  serão  informados  valores  iguais)  e  escrevê-los  em  ordem crescente.

function clicar() {
    var valor1 = parseFloat(document.querySelector(".valor1").value);
    var valor2 = parseFloat(document.querySelector(".valor2").value);
    var valor3 = parseFloat(document.querySelector(".valor3").value);

    if (valor1 > valor2 && valor1 > valor3 && valor2 > valor3){

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor1+ " , "+valor2+" , "+valor3;

    } else if (valor1 > valor2 && valor1 > valor3 && valor2 < valor3) {

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor1+ " , "+valor3+" , "+valor2;
        
    } else if (valor2 > valor1 && valor2 > valor3 && valor1 > valor3) {

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor2+ " , "+valor1+" , "+valor3;
    }
    else if (valor2 > valor1 && valor2 > valor3 && valor1 < valor3) {

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor2+ " , "+valor3+" , "+valor1;
    }
    else if (valor3 > valor1 && valor3 > valor2 && valor1 > valor2) {

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor3+ " , "+valor1+" , "+valor2;
    }
    else if (valor3 > valor1 && valor3 > valor2 && valor1 < valor2) {

        document.querySelector(".resultado").innerHTML = "A ordem fica: "+valor3+ " , "+valor2+" , "+valor1;
    }
    
}
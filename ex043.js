
function clicar() {
    var a = parseInt(document.querySelector(".a").value);
    var b = parseInt(document.querySelector(".b").value);
    var c = parseInt(document.querySelector(".c").value);


    if (a < b + c && b < a + c && c < a + b) {
        if(a==b && b==c){
            var mens = "Triângulo Equilátero";
        

    } else if (a==b || b==c || a==c) {
        var mens = "Triângulo Isósceles";

    } else {
        var mens = "Triângulo Escaleno";
    }}

    else {
        var mens = "Não e possível formar um triângulo";
    }

    document.querySelector(".resultado").innerHTML = mens;

}
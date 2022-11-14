function clicar() {
    var codigo = parseInt(document.querySelector(".codigo").value);
    var senha = parseInt(document.querySelector(".senha").value);

    if (codigo == 1234 && senha == 9999) {

        document.querySelector(".resultado").innerHTML = "Acesso liberado ";

    } else if (codigo ==1234 && senha != 9999) {

        document.querySelector(".resultado").innerHTML = "Senha incorreta ";

    } else if (codigo != 1234) {

        document.querySelector(".resultado").innerHTML = "Login incorreto ";
    }
}
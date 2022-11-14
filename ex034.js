
function clicar() {
    var x = parseFloat(document.querySelector(".x").value);
    var y = parseFloat(document.querySelector(".y").value);

    z = (x * y) + parseInt(5);

    if (z <= 0) {
        resposta = "a"

    } else if (z <= 100) {
        resposta = "b"

    } else {
        resposta = "c"
    }
    document.querySelector(".resultado").innerHTML = "O Z ficou: " + z + " E a resposta ficou: " + resposta;
}


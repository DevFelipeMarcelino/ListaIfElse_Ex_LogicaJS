// 38)  Faça  um  algoritmo  para  ler  um  número  que  é  um  código  de  usuário.  Caso  este  código  seja diferente  de  um  código  armazenado  internamente  no  algoritmo  (igual  a 1234)  deve  ser  apresentada  a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa  é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.

function clicar() {
    var maca = parseFloat(document.querySelector(".maca").value);
    var morango = parseFloat(document.querySelector(".morango").value);


    if (morango <= 5) {

        var precomor = morango * 2.50;
           

    } 
    else {
        precomor = morango * 2.20;
        
    }

    if (maca <= 5) {
        precomac = maca * 1.8;
    }

    else {
        precomac = maca * 1.50;
    }

    totalkg = maca + morango;
    totalpreco = precomor + precomac;

    if (totalkg > 8 || totalpreco > 25) {
        totalpreco = totalpreco - ((totalpreco * 10) / 100);
    }

    document.querySelector(".resultado").innerHTML = "O valor final de que deverá ser paga é de: R$ "+ totalpreco;

}
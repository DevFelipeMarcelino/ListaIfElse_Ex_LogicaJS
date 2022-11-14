// 36)  Escreva  um  algoritmo  que  leia  as  idades  de  2  homens  e  de  2  mulheres (considere  que  as  idades dos  homens  serão  sempre  diferentes  entre  si,  bem  como  as  das  mulheres).  Calcule  e  escreva  a  soma das  idades  do  homem  mais  velho  com  a  mulher  mais  nova,  e  o  produto  das  idades  do  homem  mais novo com a mulher mais velha. 

function clicar() {
    var homem1 = parseInt(document.querySelector(".homem1").value);
    var homem2 = parseInt(document.querySelector(".homem2").value);
    var mulher1 = parseInt(document.querySelector(".mulher1").value);
    var mulher2 = parseInt(document.querySelector(".mulher2").value);

    if (homem1 > homem2 && mulher1 < mulher2) {
        var soma = homem1 + mulher1;
        var produto = homem2 * mulher2;
        document.querySelector(".resultado").innerHTML = "A soma Do homem mais velho com a mulher mais nova será de: " + soma + " e o produto das  idades  do  homem  mais novo com a mulher mais velha será de: " + produto;

    } else if (homem2 > homem1 && mulher1 > mulher2) {
        var soma = homem2 + mulher2;
        var produto = homem1 * mulher1;
        document.querySelector(".resultado").innerHTML = "A soma Do homem mais velho com a mulher mais nova será de: " + soma + " e o produto das  idades  do  homem  mais novo com a mulher mais velha será de: " + produto;

    } else if (homem1 > homem2 && mulher1 > mulher2) {
        var soma = homem1 + mulher2;
        var produto = homem2 * mulher1;
        document.querySelector(".resultado").innerHTML = "A soma Do homem mais velho com a mulher mais nova será de: " + soma + " e o produto das  idades  do  homem  mais novo com a mulher mais velha será de: " + produto;
    } else if (homem2 > homem1 && mulher1 < mulher2) {
        var soma = homem2 + mulher1;
        var produto = homem1 * mulher2;
        document.querySelector(".resultado").innerHTML = "A soma Do homem mais velho com a mulher mais nova será de: " + soma + " e o produto das  idades  do  homem  mais novo com a mulher mais velha será de: " + produto;

    }
}
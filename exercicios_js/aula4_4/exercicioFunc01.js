let texto = "racificar";

function verificaPalindrome(meuTexto){
    // Vai até o indice antes do metade do texto
    let indiceMeio = Math.floor(texto.length / 2);
    let ehPalindrome = true;
    for (let indice = 0;  indice < indiceMeio; indice +=1){
        let indiceFinal = texto.length - (indice+1);
        if (meuTexto[indice] !=  meuTexto[indiceFinal]){
            ehPalindrome = false;
        }
    }
    return ehPalindrome;
}

console.log(verificaPalindrome(texto));
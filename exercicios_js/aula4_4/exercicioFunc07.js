let word = "trybe";
let ending = "be";

function verificaFinal(palavra, palavraFinal){
    let indInicio = palavra.length - palavraFinal.length;
    let indPalavraFinal = 0;
    let ehIgual = true;
    for(i = indInicio; i < palavra.length; i += 1){
        if (palavra[i] != palavraFinal[indPalavraFinal]) {
            ehIgual = false;
            break;
        }
        indPalavraFinal += 1;
    }
    return ehIgual;
}

console.log(verificaFinal(word, ending));
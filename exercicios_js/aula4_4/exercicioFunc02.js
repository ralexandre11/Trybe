let teste = [2, 3, 6, 7, 10, 1];

function maiorIndice(meuArray){
    let maiorNum = meuArray[0];
    let maiorInd = 0;
    for (let indice = 1; indice < meuArray.length; indice += 1){
        if (meuArray[indice] > maiorNum) {
            maiorNum = meuArray[indice];
            maiorInd = indice;
        }
    }
    return maiorInd;
}

console.log(maiorIndice(teste));
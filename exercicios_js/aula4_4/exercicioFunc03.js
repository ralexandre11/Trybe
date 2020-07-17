let teste = [2, 4, 6, 7, 10, 0, -3];

function menorIndice(meuArray){
    let menorNum = meuArray[0];
    let menorInd = 0;
    for (let indice = 1; indice < meuArray.length; indice += 1){
        if (meuArray[indice] < menorInd) {
            menorNum = meuArray[indice];
            menorInd = indice 
        }
    } 
    return menorInd;
}

console.log(menorIndice(teste));
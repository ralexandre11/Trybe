let teste =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(meuArray){
    let maior = meuArray[0];
    for (let indice = 1; indice < meuArray.length; indice += 1){
        if (meuArray[indice].length > maior.length) {
            maior = meuArray[indice]; 
        }
    } 
    return maior;
}

console.log(maiorNome(teste));
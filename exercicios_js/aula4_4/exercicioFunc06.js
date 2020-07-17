let N = 5;

function somatorio(num){
    let soma = 0;
    for (i = 1; i <= num; i += 1){
        soma = soma + i;
    }
    return soma;
}

console.log(somatorio(N));
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpares = 0;
for (let item = 0; item < numbers.length; item += 1){
    if (numbers[item] % 2 !== 0) {
        qtdImpares += 1;
    }
}
if (qtdImpares == 0){
    console.log("Nenhum valor impar encontrado");
} else {
    console.log("Numero de ímpares: " + qtdImpares);
}


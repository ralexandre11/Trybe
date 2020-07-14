let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let item = 0; item < numbers.length; item += 1){
    soma += numbers[item];
}
let media = soma / numbers.length;
console.log("Soma total: " + soma);
console.log("Média: " + media);
if (media > 20) {
    console.log("Valor maior que 20!");
} else {
    console.log("Valor menor ou igual a 20!");
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let item = 0; item < numbers.length; item += 1){
    soma += numbers[item];
}
console.log("Soma total: " + soma);
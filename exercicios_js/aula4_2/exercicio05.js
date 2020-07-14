let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for (let item = 1; item < numbers.length; item += 1){
    if (numbers[item] > maior) {
        maior = numbers[item]
    }
}
console.log("Maior número: " + maior);
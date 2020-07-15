let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let item = 1; item < numbers.length; item += 1){
    if (numbers[item] < menor) {
        menor = numbers[item]
    }
}
console.log("Menor número: " + menor);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];
for (let item = 0; item < numbers.length - 1; item += 1){
    numbers2.push(numbers[item] * numbers[item+1]);
}
numbers2.push(numbers[numbers.length - 1] * 2);    

console.log("Nova lista: " + numbers2);
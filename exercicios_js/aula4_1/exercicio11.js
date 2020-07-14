let salarioBruto = 2500;
let salarioLiquido;
let aliqInss;
let aliqIR;

if (salarioBruto <= 1556.94) {
    aliqInss = 0.08 * salarioBruto;
} else if (salarioBruto <= 2594.92) {
    aliqInss = 0.09 * salarioBruto;
} else if (salarioBruto <= 5189.82) {
    aliqInss = 0.11 * salarioBruto;
} else {
    aliqInss = 570.88;
}
salarioLiquido = salarioBruto - aliqInss;
console.log("Salário com descontos INSS: " + salarioLiquido);

if (salarioLiquido <= 1903.98){
    aliqIR = 0;
} else if (salarioLiquido <= 2826.65){
    aliqIR = (salarioLiquido * 0.075) - 142.8;
} else if (salarioLiquido <= 3751.05){
    aliqIR = (salarioLiquido * 0.15) - 354.8;
} else if (salarioLiquido <= 4664.68){
    aliqIR = (salarioLiquido * 0.225) - 636.13;
} else {
    aliqIR = (salarioLiquido * 0.275)- 869.36;
}
salarioLiquido -= aliqIR;

console.log("Salário com descontos do IR: " + salarioLiquido.toFixed(2));
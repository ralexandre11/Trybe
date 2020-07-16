let n = 79;
console.log("n = " + n);
let ndiv = 0;
let ehPrimo = true;
for (let i=1; i<=n; i+=1){
    if (n%i == 0) {
        ndiv += 1;    
    }
    if (ndiv > 2){
        ehPrimo = false;
        break;
    }
}
if (ehPrimo) {
    console.log(n + " é um número primo");
} else {
    console.log(n + " NÃO é um número primo");
}

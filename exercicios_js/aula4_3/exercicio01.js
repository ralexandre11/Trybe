let n = 5;
console.log("n = " + n);
for (let i=1; i<=n; i+=1){
    let linha = "";
    for (let x=1; x<=n; x+=1){
        linha = linha + "*";
    }
    console.log(linha);
}
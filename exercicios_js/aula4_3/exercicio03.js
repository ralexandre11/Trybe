let n = 5;
console.log("n = " + n);
for (let i=1; i<=n; i+=1){
    let linha = "";
    for (let x=n-i; x>0; x-=1){    
        linha = linha + " ";
    }
    for (let y=1; y<=i; y+=1){    
        linha = linha + "*";
    }
    console.log(linha);
}
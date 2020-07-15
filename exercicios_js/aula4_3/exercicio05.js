let n = 11;
console.log("n = " + n);
let meio = Math.floor(n / 2);
let linha = "";
//console.log(meio);
for (let i=1; i<=meio; i+=1){
    linha = "";
    for (let x=meio-i+1; x>0; x-=1){    
        linha = linha + " ";
    }
    linha = linha + "*";

    if (i>1) {
        for (let y=1; y<=((i*2)-3); y+=1){    
            linha = linha + " ";
        }
        linha = linha + "*";
    }

    console.log(linha);
}
linha = "";
for (let x=1; x<=n; x+=1){
    linha = linha + "*";
}
console.log(linha);

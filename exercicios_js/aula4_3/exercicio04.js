let n = 7;
console.log("n = " + n);
let meio = Math.floor(n / 2)+1;
for (let i=1; i<=meio; i+=1){
    let linha = "";
    for (let x=meio-i; x>0; x-=1){    
        linha = linha + " ";
    }
    for (let y=1; y<=((i*2)-1); y+=1){    
        linha = linha + "*";
    }
    console.log(linha);
}
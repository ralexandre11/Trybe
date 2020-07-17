let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

numeroRomano = "MCMXCIX";

function converterNumero (num){
    let ValorFinal = 0;
    let numeroDecimal = 0;
    let numeroDecimalAnterior = 0;
    for (i = 0; i < num.length; i += 1){
        let letraRomana = num[i];
        numeroDecimal = romanos[letraRomana];
        if ((numeroDecimal <= numeroDecimalAnterior) || (numeroDecimalAnterior == 0)) {
            ValorFinal += numeroDecimal;
        } else {
            ValorFinal += numeroDecimal - numeroDecimalAnterior - numeroDecimalAnterior;
        }
        numeroDecimalAnterior = numeroDecimal;
    }
    return ValorFinal;
}

console.log(converterNumero(numeroRomano));
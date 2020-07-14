let peca = "Rain";

let pecaXadrez = peca.toLowerCase();
let movimento = "";

switch (pecaXadrez){
    case "rei": 
        movimento = "Somente uma casa, qualquer direção";
        break;
    case "rainha": 
        movimento = "Várias casas, qualquer direção";
        break;
    case "Bispo": 
        movimento = "Várias casas, apenas na diagonal";
        break;
    case "cavalo": 
        movimento = "três casas, movimento em L";
        break;
    case "torre": 
        movimento = "Várias casas, na vertical ou horizontal";
        break;
    case "peão": 
        movimento = "Várias casas, na vertical ou horizontal";
        break;
    default:
        movimento = "Peça informada inválida!";
}

console.log(pecaXadrez, " -> ", movimento);
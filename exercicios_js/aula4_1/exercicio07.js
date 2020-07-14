let porc = 101;
let nota = "";

if (porc > 100 || porc < 0) {
    nota = "Valor inválido!";
} else if (porc >= 90) {
    nota = "Nota A";
} else if (porc >= 80) {
    nota = "Nota B";
} else if (porc >= 70) {
    nota = "Nota C";
} else if (porc >= 60) {
    nota = "Nota D";
} else if (porc >= 50) {
    nota = "Nota E";
} else {
    nota = "Nota F";
}

console.log(nota);
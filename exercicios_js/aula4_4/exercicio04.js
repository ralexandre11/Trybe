let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
  };

for (let prop in info){
    if (info[prop] != info2[prop]){
        console.log(info[prop] + " e " + info2[prop]);
    } else {
        console.log("Ambos recorrentes");
    }
}
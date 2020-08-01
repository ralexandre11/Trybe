window.onload = function() {

  const btnOK = document.getElementById("btnOK");

  const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  const inputUF = document.getElementById("estado");
  for (let i = 0; i < estados.length; i += 1) {
    let opt = document.createElement("option");
    opt.innerText = estados[i];
    inputUF.appendChild(opt);
  }



}
window.onload = function() {

  carregaUF();

  const btnOK = document.getElementById("btnOK");


  // const iptEmail = document.getElementById("email");
  // iptEmail.addEventListener("focusout", function() {
  //   let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
  //   if (!reg.test(iptEmail.value)){
  //     alert("email inválido");
  //     // iptEmail.focus();
  //   };
  // });
}

function carregaUF() {
  const inputUF = document.getElementById("estado");
  const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
  for (let i = 0; i < estados.length; i += 1) {
    let opt = document.createElement("option");
    opt.innerText = estados[i];
    inputUF.appendChild(opt);
  }
}


window.onload = function() {

  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    onSelect: function(date) {
        console.log(date);
    }
  });

  new window.JustValidate('.myForm', {
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: 'O campo email é obrigatório',
        email: 'O email digitado não é válido'
      },
    },

    submitHandler: function (form, values) {
      let myCV = document.getElementById("myCV");

      let item = document.createElement("p");
      item.appendChild(document.createTextNode(values["tipo"]));
      myCV.appendChild(item);
    },
  });



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


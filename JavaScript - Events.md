# JavaScript - Eventos

## O que vamos aprender?
Olá querido aluno, tudo bem com você? 
Chegamaos numa parte do bloco bastante importante, na qual você vai entender como funciona os *eventos* na liguagem *JavaScript*, e como realizar o tratamento destes.

## Você será capaz de:
- Controlar o que pode acontecer em resposta a uma ação ocorrida em determinado elemento HTML, como por exemplo a do "*click*" de um botão.
- Utilizar os eventos *onClick*, *onChange*, *onMouseOver*, *onmouseout*, *onkeydown*, *onFocus*, *onLoad*.
  
## Por que isso é importante?
Você desenvolvedor, irá utilizar bastante o tratamento dos eventos quando estiver trabalhando com JavaScript em suas páginas web. Por que? por um simples motivo: **interação**. Através dos eventos, você poderá deixar sua *página* bem mais interessante e **dinâmica**.

## Conteúdos
###### Tempo sugerido para realização: 130 minutos
### Introdução
O JavaScript reage aos eventos gerados pelos elementos de uma página HTML, e o **tratamento de um evento** consiste em definir o que será feito quando esse evento for disparado.

Por exemplo, você quer mostrar uma mensagem quando o usuário clicar em um botão. Então neste caso, você pode tratar o evento “click” deste elemento, e em seguinda mostrar a mensagem desejada.

### Formas de tratamento dos eventos

Existem algumas formas de fazer este tratamento dos eventos utilizando o JavaScript. Você pode:
      
1. A primeira é Utilizando de maneira "**inline**" diretamente na tag do elemento HTML. No exemplo abaixo foi usado a **propriedade** *onclick* do elemento *button*, para tratar o clique do botão:

    ``` javascript
    <body>
        <button id="btn" onclick="alert('Sejam bem vindos')">Clique aqui</button>
    </body>
    ```
    Essa forma somente é indicada quando se tem poucas instruções. Caso tenha outras expressões a serem executadas, com cálculos e outros processamentos, seria inviável escrever tudo no interior da propriedade, sendo assim utilizar a próxima forma que veremos a seguir.

1. A outra forma é utilizando o *Escutador de Eventos*, que permite ligar o disparo de um evento de um determinado elemento a uma função que fará seu tratamento. A tarefa de escutar cada evento certo é feita pelo **addEventListener()**, que é uma função nativa do JavaScript, e é usada da seguinte forma:

    ```javascript
    source.addEventListener(eventName, eventHandler);
    ```
    - **source**: elemento que gerou o evento 
    - **eventName**: especificação do evento a ser tratado
    - **eventHandler**: especificação da função que será chamada quando o evento for disparado 

    Veja na prática! Copie o código abaixo e observe o evento como é utilizado o *addEventListener()* :

    ```javascript
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JavaScript - Events</title>
    </head>
    <body>
      <h1>Por favor, clique no botão abaixo:</h1>
      <button id="btn">Clique aqui</button>

      <script type="text/javascript">
        function exibirMensagem() { 
          alert("Você clicou no botão agora!"); 
        }
        const btn = document.getElementById("btn");
        btn.addEventListener("click", exibirMensagem);
      </script>
    </body>
    </html>
    ```
    ##### Neste código, a função *exibirMensagem* é chamada, quando o evento *click* do elemento **btn** é disparado.
      Essa forma mostrada acima, é na maioria das vezes mais indicada para ser utilizada, pois vai deixar suas linhas de código mais organizadas e de melhor manutenção.
      
      Para mais informações sobre addEventListener(), [acesse aqui](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

### Alguns eventos JavaScript

|Evento| O que é tratado neste evento|
  |------|----------------|
  |**onClick**| O clique de um elemento 
  |**onChange**| O valor de um elemento é alterado
  |**onMouseOver**| O mouse passa por cima um elemento
  |**onmouseout**| O mouse sai de cima de um elemento
  |**onkeydown**| Alguma tecla é pressionada sobre o elemento
  |**onFocus**| O elemento recebe o foco
  |**onLoad**| O carregamento completo do elemento


### onMouseOver e onMouseOut

### onkeydown e onFocus

### onLoad

### Evitando o comportamento padrão

Às vezes, você se deparará com uma situação em que deseja interromper um evento fazendo o que ele faz por padrão. O exemplo mais comum é o de um formulário da Web, por exemplo, um formulário de registro personalizado. Quando você preenche os detalhes e pressiona o botão Enviar, o comportamento natural é que os dados sejam enviados para uma página específica no servidor para processamento, e o navegador seja redirecionado para uma página de "mensagem de sucesso" de algum tipo (ou a mesma página, se outra não for especificada.)

O problema surge quando o usuário não submete os dados corretamente - como desenvolvedor, você deve interromper o envio para o servidor e fornecer uma mensagem de erro informando o que está errado e o que precisa ser feito para corrigir as coisas. Alguns navegadores suportam recursos automáticos de validação de dados de formulário, mas como muitos não oferecem isso, é recomendável não depender deles e implementar suas próprias verificações de validação. Vamos dar uma olhada em um exemplo simples.

Primeiro, um formulário HTML simples que requer que você digite seu primeiro e último nome:

<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
Agora algum JavaScript — aqui nós implementamos uma verificação muito simples dentro de um manipulador de evento onsubmit (o evento submit é disparado em um formulário quando é enviado) que testa se os campos de texto estão vazios. Se estiverem, chamamos a função preventDefault() no objeto de evento — que interrompe o envio do formulário — e, em seguida, exibir uma mensagem de erro no parágrafo abaixo do nosso formulário para informar ao usuário o que está errado:

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}

[![IMAGE ALT TEXT HERE](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-PJdQJxnRzTu8k3ZsmPSrGqAnUVDzfBS-2w&usqp=CAU)](https://www.youtube.com/watch?v=YUHQ8_zUKz8)


## Exercícios
## Recursos Adicionais

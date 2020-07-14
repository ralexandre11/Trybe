let valorVenda = 80;
let custoProduto = 30;

if (valorVenda <=0 || custoProduto <=0){
    console.log("Valores inválidos!");
} else {
    let lucro = (valorVenda - custoProduto) * 0.8;
    console.log("Valor do lucro para 1000 produtos", lucro*1000);
}


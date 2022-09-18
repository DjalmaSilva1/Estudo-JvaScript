function verPromocao() {
    let inproduto = document.getElementById("inproduto");
    let inpreco = document.getElementById("inpreco");
    let outPreco = document.getElementById("outPreco");
    let outPromocao = document.getElementById("outPromocao");

    let produto = inproduto.value;
    let preco = Number(inpreco.value);
    
    let Promocao = preco*0.5;
    let precoFinal = preco*2 + Promocao;

    outPreco.textContent = produto + ": Leve Três por : " + precoFinal.toFixed(2) + " Kz.";
    outPromocao.textContent= "O 3º produto custa apenas: " + Promocao.toFixed(2);
}
let btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", verPromocao);
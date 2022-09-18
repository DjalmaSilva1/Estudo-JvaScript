function revendaVeiculos(){
    let inVeiculos = document.getElementById('inVeiculos');
    let inPreco = document.getElementById('inPreco');
    let outVeiculos = document.getElementById('outVeiculos');
    let outPromocao = document.getElementById('outPromocao');
    let outParcela = document.getElementById('outParcela');

    let veiculos = inVeiculos.value;
    let preco = Number(inPreco.value);

    let promocao = preco*0.50;
    let Parcela = (preco*0.50)/12;

    outVeiculos.textContent = 'Promoção: ' + veiculos;
    outPromocao.textContent = 'Entrada de Kz: ' + promocao.toFixed(2);
    outParcela.textContent = ' Parcela de + 12x de Kz: ' + Parcela.toFixed(2);
}
let btPromocao = document.getElementById('btPromocao');
btPromocao.addEventListener('click', revendaVeiculos);
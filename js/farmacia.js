/*
function mostraPromocao(){
    let inMedicamento = document.getElementById('inMedicamento');
    let inPreco = document.getElementById('inPreco');
    let outMedicamento = document.getElementById('outMedicamento');
    let outDesconto = document.getElementById('outDesconto');

    let Medicamento = inMedicamento.value;
    let Preco = Number(inPreco.value);

    let promocao = Math.floor(Preco*2);

    outMedicamento.textContent = 'Promoção de ' + Medicamento;
    outDesconto.textContent = 'Leve 2 por apenas: ' + promocao.toFixed(2) + 'Kz';
}
let btMostrar = document.getElementById('btMostrar');
btMostrar.addEventListener('click', mostraPromocao);

*/



    const frm = document.querySelector('form')
    const inMedicamento = document.querySelector('inMedicamento')
    const inPreco = document.querySelector('inPreco')
    const outMedicamento = document.querySelector('outMedicamento')
    const outDesconto = document.querySelector('outDesconto')

    //Criar "Ouvite" de evento, Acionado quando o botão submit for clicado

    frm.addEventListener('submit', (e) => {
        const Medicamento = inMedicamento.value
        const Preco = Number(inPreco.value)
        
        const promocao = Math.floor(Preco*2)

        //Exiebe as Respostas
        outMedicamento.innerText = `Promoção de ${Medicamento}`
        outDesconto.innerText =`Leve dois por apenas: ${promocao.toFixed(2)}`
        e.preventDefault()   //Evita envio de form 
    })

    
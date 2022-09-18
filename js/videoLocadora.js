function Coverter(){
    let inTitulo = document.getElementById('inTitulo');
    let inDuracao = document.getElementById('inDuracao');
    let outTitulo = document.getElementById('outTitulo');
    let outDuracao = document.getElementById('outDuracao');

    let titulo = inTitulo.value;
    let duracao = Number(inDuracao.value);

    let horas = Math.floor(duracao/60);
    let min = duracao % 60;

    outTitulo.textContent = titulo;
    outDuracao.textContent = horas + ' hora(s) e ' + min + ' minutos'  
}
let btConverter = document.getElementById('btConverter');
btConverter.addEventListener('click', Coverter);
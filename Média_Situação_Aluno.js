function calcularMedia(){
    //Referência dos elementos da página
    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outMedia = document.getElementById("outMedia");
    let outSituacao = document.getElementById("outSituacao");

    //Obtém os conteúdos do campos da pagina
    let nome = String(inNome.value);
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    //Calcular a Média  das notas 
    let media = (nota1 +nota2)/2;

    //Apresentar a media
    outMedia.textContent = "Médias Das Notas " + media.toFixed(1);

    //criar condição 
    if( media>=10 ){
        outSituacao.textContent = "Parabés " + nome + " Você foi Aprovado";
       outSituacao.style.color = "blue";
    }else{
        outSituacao.textContent = "Ops " + nome + "Você foi Reprovado";
        outSituacao.style.color = "red";

    } 
}
let btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);

function calcularPeso(){
    let inNome = document.getElementById("inNome");
    let rbMasculino = document.getElementById("rbMasculino");
    let rbFemenino = document.getElementById("rbFemenino");
    let inAltura = document.getElementById("inAltura");
    let outNome = document.getElementById("outNome");
    let outResposta = document.getElementById("outResposta");

    let nome = inNome.value;
    let masculino = rbMasculino.value;
    let femenino = rbFemenino.value;
    let altura = Number(inAltura.value);

    //Verifica se o nome foi preenchido e sexo selecionado
    if(nome == '' || (masculino == false && femenino == false)){
        alert("Por favor, informe o nome e selecione o sexo ...")
        inNome.focus(); // Posiciona (joga o foco) no campo de edição inNome
        return;
    }

    //Se altura for Vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if(altura == 0 || isNaN(altura)){
        alert("Por favor, informe o altura Correctamente ...")
        inAltura.focus(); // Posiciona (joga o foco) no campo de edição inAltura
        return;
    }
    // Se Masculino (signica se masculino == true)
    if(masculino){
        let peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
        outNome.textContent = nome ;
        outResposta.textContent = " O seu peso ideal  é " + peso.toFixed(3) + " Kg";
    } else {
        let peso = 21 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
        outNome.textContent = nome;
        outResposta.textContent = " O seu peso ideal  é " + peso.toFixed(3) + " Kg";

    }
    // Apresenta a resposta (altera o conteúdo da linha auto resposta)
    //outResposta.textContent = nome + " O seu peso ideal  é " + peso.toFixed(3) + " Kg";
}
let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);


//Função Limpar campos 
function limparCampos(){
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFemenino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outNome").textContent;
    document.getElementById("outResposta").textContent;

    //Posiciona e joga o foco no elemento inNome
    document.getElementById("inNome").focus();

}
let btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);

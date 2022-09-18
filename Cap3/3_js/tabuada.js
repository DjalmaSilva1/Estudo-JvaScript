function calcularTabuada(){
    let inNumeros = document.getElementById("inNumeros");
    let outTabuada = document.getElementById("outTabuada");

    let numeros = Number(inNumeros.value);

    if(numeros == 0 || isNaN(numeros)){
        alert("Informe o numero valido");
        inNumeros.focus();
        return;
    }

    //Cria a variavel tipo string que irá se conectar a resposta
    let resposta = "";
    for(let i=0; i<=12; i++){
        resposta = resposta + numeros + " x " + i + " = " + numeros*i +"\n";
    }
    outTabuada.textContent = resposta;
}
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularTabuada);
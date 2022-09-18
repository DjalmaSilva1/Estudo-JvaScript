let pacientes= []; // Declara um Vetor Global

function adicionarPaciente(){
    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nome = inPaciente.value; //Obtém o nome do paciente

    //Verifica preenchimento do nome do paciente
    if(nome== ""){
        alert("Informe o nome do Paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); // Adiciona o nome no final do vetor

    let lista = ""; // string para concatenar pacientes

    //Percorre os elementos do vetor
    for(let i=0; i<pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    //Altera o conteúdo da tag outLista
    outLista.textContent = lista;

    //limpa o campo e posiciona cursor em paciente 
    inPaciente.value = "";
    inPaciente.focus();
    return;

}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);





function adicionarUrgencia(){
    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");

    let nome = inPaciente.value; //Obtém o nome do paciente

    //Verifica preenchimento do nome do paciente
    if(nome== ""){
        alert("Informe o nome do Paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome); // Adiciona o nome no final do vetor

    let lista = ""; // string para concatenar pacientes

    //Percorre os elementos do vetor
    for(let i=0; i<pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    //Altera o conteúdo da tag outLista
    outLista.textContent = lista;
   // outLista.style.color = "red";

    //limpa o campo e posiciona cursor em paciente 
    inPaciente.value = "";
    inPaciente.focus();
    return;

}
let btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);




function atenderPaciente(){
    let inPaciente = document.getElementById("inPaciente");
    //let outLista = document.getElementById("outLista");


    //Verificar se vetor paciente esta vazio
    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera ");
        inPaciente.focus();
        return;
    }
    //Cria referência aos elementos de saida de dados
    let outAtendimento = document.getElementById("outAtendimento");
    let outLista = document.getElementById("outLista");

    //remove paciente do incio da fila (e obtém o nome)
    let atender = pacientes.shift();

    //exibe o nome do paciente em atendimento
    outAtendimento.textContent = atender;

    //String para concatenar pacientes
    let lista = "";

    //Percorre os elementos do vetor
    for(let i=0; i<pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }
    //Altera o conteudo da tag outLista
    outLista.textContent = lista;
}
let btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);


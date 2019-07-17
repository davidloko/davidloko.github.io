function minhaFunção() {
    // O uso mais comum para a saída de dados
    document.getElementById("demo").innerHTML = "Parágrafo Mudado...";
    
    //window.alert("Este é um alerta!!");
    // Uso mais comum para a depuração de código
    console.log("Só apareço com o F12!!");

}


function minhaFunção2() {
    if (document.getElementById("demo1").innerText.length === 0){
        //se demo1 for vazio, escreve dentro (inner) dele
    document.getElementById("demo1").innerHTML = "Sou Dollinho, seu amiguinho";
    document.getElementById("demo2").innerHTML = "Vamos cantar?";
    document.querySelector("#div_central").style.border = "2px dotted deeppink";
}

    else{
        //senão apaga o texto
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("demo2").innerHTML = "";
        document.querySelector("#div_central").style.border = "None";
    }
  }

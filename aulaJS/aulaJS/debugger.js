//Espere carregar a página
window.onload = function(){
    console.log("Se quiser me ver, tem que pressionar F12! Console...")
    //Concatenação de strings com o símbolo +
    console.log("a = " + a + " b = " + b);
    console.log("a + b = " + parseInt(a+b));

    
};

//Variável Global
var a = 10;
var b = 20;

    let entradas = document.querySelectorAll('input');
    let resposta = document.querySelector('.resposta');
    let botão = document. querySelector('#btn-somar');


pegaNúmero1 = function(){
    return entradas[0].value;
}

pegaNúmero2 = function(){
    return entradas[1].value;
}

testarEntradasVazias = function(){
    //Se entrada 1 ou 2 for vazia, retorna verdadeiro
    if(pegaNúmero1() === '' || pegaNúmero2() === '')
        return true;
    else
        return false;
}

somar = function(){
    if(testarEntradasVazias()){
        resposta.textContent = "Erro: Preencha os dois campos numéricos";
        resposta.classList.remove('correta');
        resposta.classList.add('errada');
        return false;
    }
    else{
        atualizaResposta();
        resposta.classList.remove('errada');
        resposta.classList.add('correta');
    }
}

atualizaResposta = function(){
    let num1 = pegaNúmero1();
    let num2 = pegaNúmero2();
    var soma = num1 + num2;

    resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

//Monitoramento do click do botão
//Quando o botão for clicado, a função somar será chamada!
botão.addEventListener('click', somar);

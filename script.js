
var displayBuffer = "";
var numero = "";

function pressNum(num) {
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
}

function clearMemory() {
    numero = "";
}

function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display')
    tela.value = displayBuffer;
    
}
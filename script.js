var textInput = document.querySelector("#input-texto");
var output = document.querySelector("#output");

function criptografar(){
        var texto = textInput.value;

        var resultCripto = texto.replace(/a/g, "juca").replace(/e/g, "bala").replace(/i/g, "good")
        .replace(/o/g, "dog").replace(/u/g, "winner");

        document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' +
        resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

}

function descriptografar(){
        var texto = textInput.value;

        var resultDescripto = texto.replace(/juca/g, "a").replace(/bala/g, "e").replace(/good/g, "i").
        replace(/dog/g, "o").replace(/winner/g, "u");

        document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' +
        resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

}

function copiar(){
        var textoCop = document.getElementById('input-texto');

        textoCop.select();
        document.execCommand('copy');
        alert("Texto copiado!");
}
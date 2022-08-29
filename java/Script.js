const input = document.querySelector(".input");
const output = document.querySelector(".output");

function encrypt() {
    let textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    if (output.value != "") {
        output.style.backgroundImage = "none";
    }
    input.value = "";
}
function desencrypt(){
    let textoDesencriptado = desencriptar(input.value);
    output.value = textoDesencriptado;
    if (output.value != "") {
        output.style.backgroundImage = "none";
    }
    input.value = "";
}

function encriptarI(texto) {
    var cambio = /i/g;
    texto = texto.replace(cambio,"imes");
    return texto;
}
function encriptarA(texto) {
    var cambio = /a/g;
    texto = texto.replace(cambio,"ai");
    return texto;
}
function encriptarE(texto) {
    var cambio = /e/g;
    texto = texto.replace(cambio,"enter");
    return texto;
}
function encriptarO(texto) {
    var cambio = /o/g;
    texto = texto.replace(cambio,"ober");
    return texto;
}
function encriptarU(texto) {
    var cambio = /u/g;
    texto = texto.replace(cambio,"ufat");
    return texto;
}
function encriptar(texto) {
    let validar = /[^(a-z)|(\s)]/g;
    if (validar.test(texto)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        return "";
    } else {
    texto = encriptarI(texto);
    texto = encriptarE(texto);
    texto = encriptarA(texto);
    texto = encriptarO(texto);
    texto = encriptarU(texto);
    return texto;
    }
}

function desencriptarA(texto) {
    var cambio = /ai/g;
    texto = texto.replace(cambio,"a");
    return texto;
}
function desencriptarE(texto) {
    var cambio = /enter/g;
    texto = texto.replace(cambio,"e");
    return texto;
}
function desencriptarI(texto) {
    var cambio = /imes/g;
    texto = texto.replace(cambio,"i");
    return texto;
}
function desencriptarO(texto) {
    var cambio = /ober/g;
    texto = texto.replace(cambio,"o");
    return texto;
}
function desencriptarU(texto) {
    var cambio = /ufat/g;
    texto = texto.replace(cambio,"u");
    return texto;
}
function desencriptar(texto) {
    let validar = /[^(a-z)|(\s)]/g;
    if (validar.test(texto)) {
        alert("Solo se admiten letras minusculas sin acentos ni caracteres especiales");
        return "";
    } else {
        texto = desencriptarA(texto);
        texto = desencriptarE(texto);           
        texto = desencriptarI(texto);
        texto = desencriptarO(texto);
        texto = desencriptarU(texto);
        return texto;
    }
}
function copy() {
    output.select();
    navigator.clipboard.writeText(output.value);
    output.value = "";
}
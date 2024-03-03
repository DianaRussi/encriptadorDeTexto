const mensajeParaEncriptarDesencriptar = document.querySelector('.mensajeParaEncriptarDesencriptar');
const mensajeEncriptadoDesencriptado = document.querySelector('.mensajeEncriptadoDesencriptado');

//Llaves de encriptacion
/* La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(mensajeParaEncriptarDesencriptar.value);
    mensajeEncriptadoDesencriptado.value = textoEncriptado;
    mensajeParaEncriptarDesencriptar.value = "";
    mensajeEncriptadoDesencriptado.style.backgroundImage = 'none';
}

function encriptar(stringEncriptado){
    let llavesEncriptacion =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if(stringEncriptado.includes(llavesEncriptacion[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensajeParaEncriptarDesencriptar.value);
    mensajeEncriptadoDesencriptado.value = textoDesencriptado;
    mensajeParaEncriptarDesencriptar.value = "";
}

function desencriptar(stringDesencriptado){
    let llavesEncriptacion =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if(stringDesencriptado.includes(llavesEncriptacion[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiar() {
    mensajeEncriptadoDesencriptado.select();
    navigator.clipboard.writeText(mensajeEncriptadoDesencriptado.value)
    mensajeEncriptadoDesencriptado.value = "";
    alert('El texto se copio en el portapapeles');
}
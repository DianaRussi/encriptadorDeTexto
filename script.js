const mensajeParaEncriptar = document.querySelector('.mensajeParaEncriptar');
const mensajeEncriptado = document.querySelector('.mensajeEncriptado');

//Llaves de encriptacion
/* La letra "e" es convertida para "enter"
 * La letra "i" es convertida para "imes"
 * La letra "a" es convertida para "ai"
 * La letra "o" es convertida para "ober"
 * La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(mensajeParaEncriptar.value);
    mensajeEncriptado.value = textoEncriptado;
    mensajeParaEncriptar.value = "";
    mensajeEncriptado.style.backgroundImage = 'none';

}

function encriptar(stringEncriptado){
    let llavesEncriptacion =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < llavesEncriptacion.length; i++) {
        if(stringEncriptado.includes(llavesEncriptacion[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
        }
        return stringEncriptado;
    }
}

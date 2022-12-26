let texto = document.getElementById("entradaM");
let textAreaFTA = document.getElementById("mensajeFTA");
let bReset = document.getElementById("botonP");
let bEncriptar = document.getElementById("encriptar");
let bDesencriptar = document.getElementById("desencriptar");
let bCopiar = document.getElementById("copiar");
let bLimpiar = document.getElementById("limpiar");
let imagen = document.getElementById("oops");
let oops = document.getElementById("oopsM");
let contFinal = document.getElementById("contenedorFinal");
let arr = [];
let encriptado = "";
let desencriptado = "";

bReset.addEventListener('click', recargar);
bEncriptar.addEventListener('click', encriptacion);
bDesencriptar.addEventListener('click', desencriptacion);
bCopiar.addEventListener('click', copiado);
bLimpiar.addEventListener('click', limpiar);


function encriptacion(){
    if(/[^a-z ]/.test(texto.value) == true){
        alert("Por favor utiliza caracteres permitidos\nRecuerda que solo puedes utilizar minúsculas sin acentos");
    }else if(texto.value == "") {
        alert("Por favor ingresa algun caracter");
    } else {
    if (arr.length == 0){
        dividir();
    } else {
        arr = [];
        dividir();
    }
    for (var i=0;i < arr.length; i++) {
        if (arr[i]=="a"){
            arr[i]="ai"; 
        } else if (arr[i] == "e"){
            arr[i] = "enter";
        }else if (arr[i] == "i"){
            arr[i] = "imes";
        }else if (arr[i] == "o"){
            arr[i] = "ober";
        }else if (arr[i] == "u"){
            arr[i] = "ufat"
        }
    }
    juntar();
    textAreaFTA.value = encriptado;
    texto.value = "";
    visibilidad();
}
    
}

function desencriptacion(){
    if(/[^a-z ]/.test(texto.value) == true){
        alert("Por favor utiliza caracteres permitidos\nRecuerda que solo puedes utilizar minúsculas sin acentos");
    }else if(texto.value == "") {
        alert("Por favor ingresa algun caracter");
    } else {
     if (arr.length == 0){
        dividir();
    }else {
        arr = [];
        dividir();
    }

    for (var i=0;i < arr.length; i++) {
        if (arr[i] == "a" && arr[(i+1)] == "i"){
            arr[(i+1)] = "";
        }else if (arr[i] == "e" && arr[i+1] == "n" && arr[i+2] == "t"){
            arr[(i+1)] = "";
            arr[(i+2)] = "";
            arr[(i+3)] = "";
            arr[(i+4)] = "";
        }else if (arr[i] == "i" && arr[i+1] == "m" && arr[i+2] == "e"){
            arr[(i+1)] = "";
            arr[(i+2)] = "";
            arr[(i+3)] = "";
        }else if (arr[i] == "o" && arr[i+1] == "b" && arr[i+2] == "e"){
            arr[(i+1)] = "";
            arr[(i+2)] = "";
            arr[(i+3)] = "";
        }else if (arr[i] == "u" && arr[i+1] == "f" && arr[i+2] == "a"){
            arr[(i+1)] = "";
            arr[(i+2)] = "";
            arr[(i+3)] = "";
        }
    }

    juntar_1();
    textAreaFTA.value = desencriptado;
    texto.value = "";
    visibilidad();
    }
}

function dividir(){
    arr = texto.value.split("");
}

function juntar(){
   encriptado = arr.join("");
}

function juntar_1(){
    desencriptado = arr.join("");
 }

 function visibilidad(){
    if(textAreaFTA.value == ""){
        bCopiar.style.display = "none";
        bLimpiar.style.display = "none";
        imagen.style.display = "block";
        oops.style.display= "block";
        contFinal.style.background = "#96e7b1;";
    } else {
        imagen.style.display = "none";
        oops.style.display= "none";
        contFinal.style.background = "linear-gradient(270deg,#222742,#96e7b1)";
        bCopiar.style.display = "block";
        bLimpiar.style.display = "block";
    }
 }

 function limpiar(){
    textAreaFTA.value = "";
    visibilidad();
 }

 function copiado(){
    textAreaFTA.select();
    textAreaFTA.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textAreaFTA.value);
    document.getSelection().removeAllRanges()
 }

 function recargar(){
    location.reload();
 }
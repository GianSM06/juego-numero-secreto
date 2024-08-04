//Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

//CÓDIGOS
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya adivinaste todos los números');
    } else {
            //Si el n° generado pertenece a la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto) {
        //El usuario acertó
        asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos === 1)?'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje de intervalos
    //generar n° secreto
    //iniciar contador de intentos
    condicionesIniciales();
    //deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
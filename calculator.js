/**Constantes de la calculadora */
const output = document.querySelector('#output')
const btnAc = document.querySelector('#ac')
const btnDel = document.querySelector('#del')
const btnEnt = document.querySelector('#entre')
const btnPor = document.querySelector('#por')
const btnMas = document.querySelector('#mas')
const btnMen = document.querySelector('#menos')
const btnPun = document.querySelector('#punto')
const btnIgu = document.querySelector('#igual')
const btnN1 = document.querySelector('#n1')
const btnN2 = document.querySelector('#n2')
const btnN3 = document.querySelector('#n3')
const btnN4 = document.querySelector('#n4')
const btnN5 = document.querySelector('#n5')
const btnN6 = document.querySelector('#n6')
const btnN7 = document.querySelector('#n7')
const btnN8 = document.querySelector('#n8')
const btnN9 = document.querySelector('#n9')
const btnN0 = document.querySelector('#n0')

/**Constantes para resultados */
let op1
let op2
let operacion

/**Eventos botones */
btnN1.addEventListener('click', function(e){
    output.textContent= output.textContent + "1";
})

btnN2.addEventListener('click', function(e){
    output.textContent= output.textContent + "2";
})

btnN3.addEventListener('click', function(e){
    output.textContent= output.textContent + "3";
})

btnN4.addEventListener('click', function(e){
    output.textContent= output.textContent + "4";
})

btnN5.addEventListener('click', function(e){
    output.textContent= output.textContent + "5";
})

btnN6.addEventListener('click', function(e){
    output.textContent= output.textContent + "6";
})

btnN7.addEventListener('click', function(e){
    output.textContent= output.textContent + "7";
})

btnN8.addEventListener('click', function(e){
    output.textContent= output.textContent + "8";
})

btnN9.addEventListener('click', function(e){
    output.textContent= output.textContent + "9";
})

btnN0.addEventListener('click', function(e){
    output.textContent= output.textContent + "0";
})

btnAc.addEventListener('click', function(e){
    resetear();
})

btnDel.addEventListener('click', function(e){
    limpiar();
})

btnMas.addEventListener('click', function(e){
    op1 = output.textContent;
    operacion = "+";
    limpiar();
})

btnMen.addEventListener('click', function(e){
    op1 = output.textContent;
    operacion = "-";
    limpiar();
})

btnPor.addEventListener('click', function(e){
    op1 = output.textContent;
    operacion = "*";
    limpiar();
})

btnEnt.addEventListener('click', function(e){
    op1 = output.textContent;
    operacion = "/";
    limpiar();
})

btnIgu.addEventListener('click', function(e){
    op2 = output.textContent;
    solucion();
})

btnPun.addEventListener('click', function(e){
    output.textContent= output.textContent + ".";
})

/**Funciones para calculadora */

function limpiar(){
    output.textContent= "";
}

function resetear(){
    output.textContent = "";
    op1 = 0;
    op2 = 0;
    operacion = ""
}

function solucion(){
    let resultado = 0;
    if(operacion === "+"){
        resultado = parseFloat(op1)+parseFloat(op2);
    } else if (operacion === "-"){
        resultado = parseFloat(op1)-parseFloat(op2);
    } else if (operacion === "*"){
        resultado = parseFloat(op1)*parseFloat(op2);
    } else if (operacion === "/"){
        resultado = parseFloat(op1)/parseFloat(op2);
    }
    resetear();
    output.textContent = resultado;
}
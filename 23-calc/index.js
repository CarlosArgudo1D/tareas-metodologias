"use strict";
//crear funcion sumar
let suma = function(a,b){
    suma = a + b;
    alert ('EL RESULTADO ES: ' + suma);
}

//funcion resta

let resta = (a,b) => a - b;

//funcion calcular 

function calc (op, fnSum, fnRest) {
    let number1 = Number(prompt('ingrese el primer numero'));
    let number2 = Number(prompt('ingrese el segundo numero'));

if (op === "suma"){
    fnSum(number1, number2);

}else{
    alert(fnRest(number1, number2));
}

}

calc("suma", suma)
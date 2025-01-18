// funciones de primer orden 
// funciones que reciben funciones como argumentos

// función que recibe una función como argumento
function operar(a, b, operacion) {
    return operacion(a, b);
}

// función que se pasa como argumento
function suma(a, b) {
    return a + b;
}

// función que se pasa como argumento
function resta(a, b) {
    return a - b;
}

// función que se pasa como argumento
function multiplicacion(a, b) {
    return a * b;
}

// función que se pasa como argumento
function division(a, b) {
    return a / b;
}

// llamada a la función operar con la función suma
console.log(operar(2, 3, suma)); // 5

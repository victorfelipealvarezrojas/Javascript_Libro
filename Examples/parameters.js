// Ejemplo pasar funciones como parametros

const suma = (a, b) => a + b;

const multiplicar = (a, b) => a * b;

const funcionMath = (a, b) => a + b;

const result = funcionMath(suma(2, 2), multiplicar(2, 2));

console.log(result);



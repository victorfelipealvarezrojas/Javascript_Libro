/*
    Recursión => Función que se llama a si misma 
*/

// Primer Ejemplo
function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

console.log(fact(5));

// Segundo Ejemplo
const array = [1, 2, 3, 4, 5];

function recorre(array, i) {
  if (i < array.length) {
    console.log(array[i]);
    recorre(array, i + 1);
  }
}

recorre(array, 0);

/*
  Closures => Función que encapsula una funcion
*/

function newCount() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const nc = newCount();

console.log(nc());
console.log(nc());
console.log(nc());

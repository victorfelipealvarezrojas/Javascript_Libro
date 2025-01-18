function fact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
console.log(fact(5)); // 120


const array = [1, 2, 3, 4, 5];

function recorreArray(array, i) {
  if (i < array.length) {
    console.log(array[i]);
    recorreArray(array, i + 1);
  }
}

recorreArray(array, 0);
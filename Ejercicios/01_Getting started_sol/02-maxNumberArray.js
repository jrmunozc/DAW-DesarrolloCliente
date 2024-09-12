// Enunciado: Escribe una función que reciba un array de números y devuelva el número más grande.

function maxNumber(arr) {
    return Math.max(...arr);
  }
  
// Prueba
console.log(maxNumber([10, 5, 100, 2, 42])); // 100            
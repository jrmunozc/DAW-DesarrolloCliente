// Enunciado: Escribe una función que tome un array y devuelva uno nuevo sin elementos duplicados.

function deleteDuplicated(arr) {
    return [...new Set(arr)];
  }
  
// Prueba
console.log(deleteDuplicated([1, 2, 3, 4, 3, 2, 1])); // [1, 2, 3, 4]   
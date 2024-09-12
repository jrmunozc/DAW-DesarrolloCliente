// Enunciado: Escribe una función que ordene un array de números de menor a mayor.

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Prueba
  console.log(sortArray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
              
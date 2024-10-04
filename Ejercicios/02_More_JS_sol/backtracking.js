function backtrackCombinations(arr, start, path, result) {
    // Agregar la combinación actual al resultado
    result.push([...path]);
  
    // Probar agregar cada elemento del array a la combinación actual
    for (let i = start; i < arr.length; i++) {
      // Agregar el elemento actual a la combinación
      path.push(arr[i]);
  
      // Llamada recursiva para generar combinaciones desde el siguiente índice
      backtrackCombinations(arr, i + 1, path, result);
  
      // Eliminar el último elemento para retroceder y probar otras combinaciones
      path.pop();
    }
  }
  
  // Función para obtener todas las combinaciones de un array
  function getAllCombinations(arr) {
    const result = [];
    backtrackCombinations(arr, 0, [], result);
    return result;
  }
  
  // Ejemplo de uso
  const array = [1, 2, 3];
  const combinations = getAllCombinations(array);
  console.log(combinations);
  
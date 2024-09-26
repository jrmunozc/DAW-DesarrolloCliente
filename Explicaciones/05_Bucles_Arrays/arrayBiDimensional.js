let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceder a un elemento específico:
console.log(matriz[0][0]);  // Output: 1 (fila 1, columna 1)
console.log(matriz[1][2]);  // Output: 6 (fila 2, columna 3)

// Modificar un elemento de la matriz:
matriz[2][1] = 10;
console.log(matriz[2][1]);  // Output: 10

// Mostrar la matriz completa
console.log(matriz);  // Output: [[1, 2, 3], [4, 5, 6], [7, 10, 9]]

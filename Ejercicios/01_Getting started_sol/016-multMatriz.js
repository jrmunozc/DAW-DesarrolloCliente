function multiplicarMatrices(A, B) {
    let n = A.length; // El tamaño de las matrices cuadradas

    // Creamos la matriz resultado C, inicializada con ceros usando un bucle tradicional
    let C = [];
    for (let i = 0; i < n; i++) {
        C[i] = [];
        for (let j = 0; j < n; j++) {
            C[i][j] = 0; // Inicializamos cada elemento con 0
        }
    }

    // Multiplicamos las matrices
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

// Ejemplo de uso:
let A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let resultado = multiplicarMatrices(A, B);
console.log(resultado);

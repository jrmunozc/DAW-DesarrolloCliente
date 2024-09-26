function rotarMatriz(matriz) {
    let n = matriz.length;
    let nuevaMatriz = [];

    for (let i = 0; i < n; i++) {
        nuevaMatriz[i] = [];
        for (let j = 0; j < n; j++) {
            nuevaMatriz[i][j] = matriz[n - j - 1][i];
        }
    }

    return nuevaMatriz;
}

// Ejemplo de uso:
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotarMatriz(matriz));
/*
Output:
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
*/

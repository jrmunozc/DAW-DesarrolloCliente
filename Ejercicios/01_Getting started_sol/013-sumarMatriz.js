function sumarMatrices(matriz1, matriz2) {
    let resultado = [];

    // Suponemos que ambas matrices tienen las mismas dimensiones
    for (let i = 0; i < matriz1.length; i++) {
        let fila = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            // Sumar los elementos en la posición [i][j] de ambas matrices
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        // Agregar la fila sumada a la matriz resultado
        resultado.push(fila);
    }

    return resultado;
}

// Ejemplo de uso:
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

let suma = sumarMatrices(matriz1, matriz2);
console.log(suma);
/*
Output:
[
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]
*/

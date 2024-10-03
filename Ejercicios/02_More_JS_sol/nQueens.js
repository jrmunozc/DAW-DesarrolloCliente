// Función principal para resolver el problema de las N reinas
function resolverNReinas(n) {
    let tablero = new Array(n).fill().map(() => new Array(n).fill(0)); // Creamos un tablero NxN lleno de ceros
    let soluciones = []; // Aquí almacenamos todas las soluciones
    
    colocarReinas(tablero, 0, soluciones); // Llamamos a la función recursiva
    
    return soluciones; // Devolvemos todas las soluciones encontradas
}

// Función recursiva para colocar reinas
function colocarReinas(tablero, fila, soluciones) {
    let n = tablero.length;

    if (fila === n) {
        // Si hemos colocado una reina en cada fila, añadimos una solución
        soluciones.push(imprimirTablero(tablero));
        return;
    }

    for (let columna = 0; columna < n; columna++) {
        if (esSeguro(tablero, fila, columna)) {
            tablero[fila][columna] = 1; // Colocamos una reina en esta posición
            colocarReinas(tablero, fila + 1, soluciones); // Intentamos colocar en la siguiente fila
            tablero[fila][columna] = 0; // Backtracking: quitamos la reina para probar otras posiciones
        }
    }
}

// Función para verificar si es seguro colocar una reina en una posición
function esSeguro(tablero, fila, columna) {
    let i, j;
    let n = tablero.length;

    // Comprobamos si hay otra reina en la misma columna
    for (i = 0; i < fila; i++) {
        if (tablero[i][columna] === 1) {
            return false;
        }
    }

    // Comprobamos la diagonal superior izquierda
    for (i = fila, j = columna; i >= 0 && j >= 0; i--, j--) {
        if (tablero[i][j] === 1) {
            return false;
        }
    }

    // Comprobamos la diagonal superior derecha
    for (i = fila, j = columna; i >= 0 && j < n; i--, j++) {
        if (tablero[i][j] === 1) {
            return false;
        }
    }

    return true; // Si no hay amenazas, es seguro colocar la reina
}

// Función para imprimir el tablero en formato amigable
function imprimirTablero(tablero) {
    return tablero.map(fila => fila.map(celda => (celda === 1 ? 'Q' : '.')).join(' '));
}

// Ejemplo: resolver el problema para un tablero de 8x8
const soluciones = resolverNReinas(8);
console.log(`Se encontraron ${soluciones.length} soluciones.`);

// Mostrar las soluciones
soluciones.forEach((solucion, index) => {
    console.log(`Solución ${index + 1}:`);
    console.log(solucion.join('\n'));
    console.log(''); // Línea vacía entre soluciones
});

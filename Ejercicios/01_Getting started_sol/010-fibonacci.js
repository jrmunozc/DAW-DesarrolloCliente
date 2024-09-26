function fibonacci(n) {
    // Condición base: los dos primeros valores de la secuencia son 0 y 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Llamada recursiva: suma de los dos términos anteriores
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso:
console.log(fibonacci(6));  // Output: 8

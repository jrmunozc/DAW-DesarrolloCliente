function invertirArray(arr) {
    // Caso base: si el array tiene 1 elemento o está vacío, devolvemos el array tal cual
    if (arr.length <= 1) {
        return arr;
    }

    // Tomamos el primer elemento y lo colocamos al final de la recursión
    return invertirArray(arr.slice(1)).concat(arr[0]);
}

// Ejemplo de uso: invertir un array
let array = [1, 2, 3, 4];
let arrayInvertido = invertirArray(array);
console.log(arrayInvertido);

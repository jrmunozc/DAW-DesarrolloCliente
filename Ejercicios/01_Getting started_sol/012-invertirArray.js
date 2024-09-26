function invertirArray(arr) {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido.push(arr[i]);
    }
    return invertido;
}

// Ejemplo de uso:
let array = [1, 2, 3, 4, 5];
console.log(invertirArray(array));  // Output: [5, 4, 3, 2, 1]

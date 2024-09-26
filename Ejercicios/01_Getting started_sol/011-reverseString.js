function invertirCadena(cadena) {
    // Condición base: si la cadena está vacía o tiene solo un carácter, se devuelve tal cual
    if (cadena === "") {
        return cadena;
    }
    // Llamada recursiva: tomar el último carácter y concatenar con el resultado de invertir el resto de la cadena
    return invertirCadena(cadena.slice(1)) + cadena[0];
}

// Ejemplo de uso:
let texto = "recursividad";
console.log(invertirCadena(texto));  // Output: "dadivisrucer"

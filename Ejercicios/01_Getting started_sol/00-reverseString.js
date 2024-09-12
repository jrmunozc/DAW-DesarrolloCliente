// Enunciado: Escribe una función que tome una cadena y devuelva la cadena invertida.

function reverseString(string) {
    return string.split('').reverse().join('');
}
  
// Prueba
console.log(reverseString("Hola Mundo")); // "odnuM aloH"
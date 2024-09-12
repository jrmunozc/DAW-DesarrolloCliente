/*
    Enunciado: Escribe una función que tome un texto y devuelva un objeto
     donde las claves son las palabras y los valores son el número de 
     veces que cada palabra aparece en el texto. Ignora la puntuación y 
     considera que las palabras no son sensibles a mayúsculas.
*/

function contarFrecuenciaPalabras(texto) {
    // Limpiamos el texto: eliminamos puntuación y lo convertimos a minúsculas
    const palabras = texto.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
  
    // Creamos un objeto para almacenar las frecuencias
    const frecuencias = {};
  
    palabras.forEach(palabra => {
      frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
    });
  
    return frecuencias;
}
  
// Prueba
const texto = "Hola, hola! ¿Cómo estás? Estoy bien, bien bien!";
console.log(contarFrecuenciaPalabras(texto));
// { hola: 2, cómo: 1, estás: 1, estoy: 1, bien: 3 }
    
// Enunciado: Escribe una función que determine si un número es par o impar.

function isEven(number) {
    return number % 2 === 0 ? "Es par" : "Es impar";
  }
  
// Prueba
console.log(isEven(5)); // "Es impar"
console.log(isEven(8)); // "Es par"
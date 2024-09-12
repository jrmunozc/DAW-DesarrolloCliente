// Enunciado: Escribe una función que determine si una palabra o frase es un palíndromo.

function isPalindrome(cadena) {
    let cleanString = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return cleanString === cleanString.split('').reverse().join('');
  }
  
  // Prueba
  console.log(isPalindrome("La ruta natural")); // true
  
// Enunciado: Escribe una función que determine si un número es primo.

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
// Prueba
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Enunciado: Escribe una función que calcule el factorial de un número.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
// Prueba
console.log(factorial(5)); // 120
  
// Enunciado: Implementa la función fibonacci(n) que calcule el número de Fibonacci n.
// Optimiza la función usando memoización para evitar cálculos repetidos y mejorar la eficiencia.

function fibonacciMemoizado() {
    const cache = {};
  
    function fibonacci(n) {
      if (n <= 1) return n;
      if (n in cache) return cache[n];
      
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  
    return fibonacci;
  }
  
// Prueba
const fibonacci = fibonacciMemoizado();
console.log(fibonacci(50)); // 12586269025
  
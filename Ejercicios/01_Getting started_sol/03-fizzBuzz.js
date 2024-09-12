/*
    Enunciado: Escribe un programa que imprima los números del 1 al 100, pero:
        Para los múltiplos de 3, imprime "Fizz" en lugar del número.
        Para los múltiplos de 5, imprime "Buzz" en lugar del número.
        Para números que son múltiplos de 3 y 5, imprime "FizzBuzz".
*/

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
// Prueba
fizzBuzz();
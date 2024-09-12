// Enunciado: Escribe una función que cuente cuántas vocales hay en una string de texto.

function countVowels(string) {
    let counter = 0;
    const vowels = 'aeiouAEIOU';
    for (let letter of string) {
      if (vowels.includes(letter)) {
        counter++;
      }
    }
    return counter;
  }
  
// Prueba
console.log(countVowels("Hola Mundo")); // 4    
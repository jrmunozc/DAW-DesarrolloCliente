/* 
    Enunciado: Implementa un solucionador de Sudoku. La función debe
    aceptar una matriz de 9x9 (array bidimensional), donde las celdas 
    vacías están representadas por 0. La función debe llenar el tablero
    con números válidos según las reglas del Sudoku y devolver 
    el tablero resuelto.
*/

function resolverSudoku(tablero) {
    function esValido(tablero, fila, col, num) {
      // Verificar la fila
      for (let i = 0; i < 9; i++) {
        if (tablero[fila][i] === num) return false;
      }
      // Verificar la columna
      for (let i = 0; i < 9; i++) {
        if (tablero[i][col] === num) return false;
      }
      // Verificar la subcuadrícula 3x3
      const inicioFila = Math.floor(fila / 3) * 3;
      const inicioCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (tablero[inicioFila + i][inicioCol + j] === num) return false;
        }
      }
      return true;
    }
  
    function resolver(tablero) {
      for (let fila = 0; fila < 9; fila++) {
        for (let col = 0; col < 9; col++) {
          if (tablero[fila][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (esValido(tablero, fila, col, num)) {
                tablero[fila][col] = num;
                if (resolver(tablero)) return true;
                tablero[fila][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }
  
    resolver(tablero);
    return tablero;
  }
  
  // Prueba
  const sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  console.log(resolverSudoku(sudoku));
  
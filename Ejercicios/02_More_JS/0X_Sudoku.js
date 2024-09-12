/* 
    Enunciado: Implementa un solucionador de Sudoku. La función debe
    aceptar una matriz de 9x9 (array bidimensional), donde las celdas 
    vacías están representadas por 0. La función debe llenar el tablero
    con números válidos según las reglas del Sudoku y devolver 
    el tablero resuelto.
*/

//todo: función para resolver el problema

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
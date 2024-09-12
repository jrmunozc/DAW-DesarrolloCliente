// Desarrolla el 3 en raya (tic-tac-toe) usando javascript simple
// Inicializamos el tablero de 3x3 vacío con valores nulos
let tablero = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  
  let jugadorActual = 'X'; // 'X' siempre empieza
  
  // Función para imprimir el tablero en la consola
  function imprimirTablero() {
    tablero.forEach(row => {
      console.log(row.map(cell => (cell ? cell : '_')).join(' '));
    });
    console.log('\n');
  }
  
  // Función para verificar si hay un ganador
  function verificarGanador() {
    // Verifica filas, columnas y diagonales
    for (let i = 0; i < 3; i++) {
      // Filas
      if (tablero[i][0] && tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2]) {
        return tablero[i][0];
      }
      // Columnas
      if (tablero[0][i] && tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i]) {
        return tablero[0][i];
      }
    }
  
    // Diagonales
    if (tablero[0][0] && tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2]) {
      return tablero[0][0];
    }
    if (tablero[0][2] && tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0]) {
      return tablero[0][2];
    }
  
    return null;
  }
  
  // Función para verificar si el tablero está lleno (empate)
  function esEmpate() {
    return tablero.flat().every(cell => cell !== null);
  }
  
  // Función para hacer un movimiento
  function hacerMovimiento(fila, columna) {
    // Verificar si la celda está vacía
    if (tablero[fila][columna] === null) {
      tablero[fila][columna] = jugadorActual;
      imprimirTablero();
  
      // Verificar si hay un ganador
      const ganador = verificarGanador();
      if (ganador) {
        console.log(`¡El jugador ${ganador} ha ganado!`);
        return;
      }
  
      // Verificar si es empate
      if (esEmpate()) {
        console.log("¡Es un empate!");
        return;
      }
  
      // Cambiar al otro jugador
      jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    } else {
      console.log("Esa celda ya está ocupada. Intenta de nuevo.");
    }
  }
  
  // Prueba del juego
  imprimirTablero();
  hacerMovimiento(0, 0); // Jugador X en (0, 0)
  hacerMovimiento(0, 1); // Jugador O en (0, 1)
  hacerMovimiento(1, 1); // Jugador X en (1, 1)
  hacerMovimiento(1, 0); // Jugador O en (1, 0)
  hacerMovimiento(2, 2); // Jugador X en (2, 2) -> Gana X
  
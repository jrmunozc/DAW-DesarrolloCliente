// Mejora el código del 3 en raya para que sea interactivo
const readline = require('readline');

// Crear la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Inicializamos el tablero de 3x3 vacío con valores nulos
let tablero = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

let jugadorActual = 'X'; // 'X' siempre empieza

// Función para imprimir el tablero en la consola
function imprimirTablero() {
  let visualTablero = tablero.map(row => row.map(cell => (cell ? cell : '_')).join(' ')).join('\n');
  console.log(visualTablero);
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
      rl.close();
      return true;
    }

    // Verificar si es empate
    if (esEmpate()) {
      console.log("¡Es un empate!");
      rl.close();
      return true;
    }

    // Cambiar al otro jugador
    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
  } else {
    console.log("Esa celda ya está ocupada. Intenta de nuevo.");
  }

  return false;
}

// Función para pedir movimiento al usuario
function pedirMovimiento() {
  rl.question(`Jugador ${jugadorActual}, ingresa la fila (0, 1 o 2): `, (fila) => {
    rl.question(`Jugador ${jugadorActual}, ingresa la columna (0, 1 o 2): `, (columna) => {
      fila = parseInt(fila);
      columna = parseInt(columna);

      if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3) {
        if (!hacerMovimiento(fila, columna)) {
          pedirMovimiento(); // Si no hay ganador ni empate, continuar
        }
      } else {
        console.log("Coordenadas no válidas. Intenta de nuevo.");
        pedirMovimiento();
      }
    });
  });
}

// Función principal del juego
function iniciarJuego() {
  console.log("¡Bienvenido al 3 en raya!");
  imprimirTablero();
  pedirMovimiento();
}

// Iniciar el juego
iniciarJuego();

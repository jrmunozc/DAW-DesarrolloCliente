// Función para crear la tabla 100x100
function createTable() {
  const table = document.getElementById("number-table");
  let number = 1; // El primer número de la tabla

  for (let row = 0; row < 100; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 100; col++) {
      const td = document.createElement("td");
      td.textContent = number;
      tr.appendChild(td);
      number++;
    }
    table.appendChild(tr);
  }
}

// Función para verificar si un número es casi primo
function isCasiPrimo(num) {
  let divisores = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisores++;
    }
  }
  return divisores === 3; // Casi primos tienen exactamente 3 divisores
}

// Función para calcular los casi primos y cambiar el color de fondo
function calcularCasiPrimos() {
  const cells = document.getElementsByTagName("td");

  for (let cell of cells) {
    const num = parseInt(cell.textContent);
    if (isCasiPrimo(num)) {
      cell.classList.add("casi-primo"); // Añadir clase para fondo amarillo
    }
  }
}

// Crear la tabla cuando la página carga
createTable();

// Añadir el evento al botón para calcular casi primos
document
  .getElementById("calc-casi-primos-btn")
  .addEventListener("click", calcularCasiPrimos);

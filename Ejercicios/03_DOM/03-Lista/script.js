// Función que genera un número aleatorio y lo añade a la lista
function addRandomNumber() {
  // Generar un número aleatorio entre 1 y 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Crear un nuevo elemento <li>
  const newListItem = document.createElement("li");

  // Asignar el número aleatorio como contenido del nuevo <li>
  newListItem.textContent = randomNumber;

  // Añadir el nuevo <li> a la lista <ul>
  document.getElementById("random-number-list").appendChild(newListItem);
}

// Añadir un event listener al botón para que llame a la función cuando se pulse
document
  .getElementById("add-number-btn")
  .addEventListener("click", addRandomNumber);

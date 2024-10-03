// Selecciona el botón y el contenedor donde se añadirán los nuevos elementos
const boton = document.getElementById('añadirParrafoBtn');
const contenedor = document.getElementById('contenedor');

// Contador para llevar la cuenta de los párrafos añadidos
let contadorParrafos = 1;

// Función que añade un nuevo párrafo al contenedor
function añadirParrafo() {
    // Crea un nuevo elemento <p>
    const nuevoParrafo = document.createElement('p');
    
    // Incrementa el contador de párrafos y establece el contenido del nuevo párrafo
    contadorParrafos++;
    nuevoParrafo.textContent = `Este es el párrafo número ${contadorParrafos}.`;
    
    // Establece un estilo opcional (ejemplo de color de fondo)
    nuevoParrafo.style.backgroundColor = 'lightyellow';
    
    // Añade el nuevo párrafo al final del contenedor
    contenedor.appendChild(nuevoParrafo);
}

// Agrega un evento 'click' al botón para añadir un párrafo al contenedor
boton.addEventListener('click', añadirParrafo);

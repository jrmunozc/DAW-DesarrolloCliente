// Selecciona el párrafo y el botón usando sus IDs
const parrafo = document.getElementById('texto');
const boton = document.getElementById('cambiarTextoBtn');

// Guardamos el estado inicial del texto y el estilo del párrafo
const textoOriginal = 'Este es un texto que cambiará cuando presiones el botón.';
const estiloOriginal = {
    backgroundColor: '',
    color: '',
    fontWeight: ''
};

// Bandera para saber si estamos en el estado inicial o cambiado
let cambiado = false;

// Función que cambia o resetea el texto y el estilo del párrafo
function alternarTextoYEstilo() {
    if (!cambiado) {
        // Cambia el texto y el estilo
        parrafo.textContent = 'El texto ha sido cambiado exitosamente!';
        parrafo.style.backgroundColor = 'lightblue';
        parrafo.style.color = 'darkblue';
        parrafo.style.fontWeight = 'bold';
        cambiado = true; // Cambiamos el estado a "modificado"
    } else {
        // Resetea el texto y el estilo original
        parrafo.textContent = textoOriginal;
        parrafo.style.backgroundColor = estiloOriginal.backgroundColor;
        parrafo.style.color = estiloOriginal.color;
        parrafo.style.fontWeight = estiloOriginal.fontWeight;
        cambiado = false; // Volvemos al estado "original"
    }
}

// Agrega un evento 'click' al botón para alternar entre los dos estados
boton.addEventListener('click', alternarTextoYEstilo);

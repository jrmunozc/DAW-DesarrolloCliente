function Persona(nombre, edad, profesion) {
  this.nombre = nombre;
  this.edad = edad;
  this.profesion = profesion;
  this.saludar = function () {
    console.log("Hola, mi nombre es " + this.nombre);
  };
}

const persona1 = new Persona("Carlos", 35, "Doctor");
const persona2 = new Persona("Lucía", 28, "Abogada");

persona1.saludar(); // "Hola, mi nombre es Carlos"
persona2.saludar(); // "Hola, mi nombre es Lucía"

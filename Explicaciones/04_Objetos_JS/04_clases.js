class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log("Hola, mi nombre es " + this.nombre);
  }
}

const persona1 = new Persona("Mario", 40, "Arquitecto");
persona1.saludar(); // "Hola, mi nombre es Mario"

class Persona {
  static especie = "Humano"; // Atributo estático

  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static mostrarEspecie() {
    console.log(`Especie: ${this.especie}`);
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

// Acceder a un atributo estático sin crear una instancia
console.log(Persona.especie); // "Humano"
Persona.mostrarEspecie(); // "Especie: Humano"

const persona1 = new Persona("Laura", 30);
persona1.mostrarDatos(); // "Nombre: Laura, Edad: 30"

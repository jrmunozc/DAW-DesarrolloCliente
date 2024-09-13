class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Getter para país (atributo no definido en el constructor)
  get pais() {
    return this._pais || "No especificado";
  }

  // Setter para país
  set pais(pais) {
    this._pais = pais;
  }

  mostrarDatos() {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, País: ${this.pais}`
    );
  }
}

const persona1 = new Persona("Roberto", 40);

// Usar el setter para añadir el país después de la creación
persona1.pais = "México";

persona1.mostrarDatos(); // "Nombre: Roberto, Edad: 40, País: México"

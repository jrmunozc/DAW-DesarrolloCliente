const persona = new Object();
persona.nombre = "Ana";
persona.edad = 25;
persona.saludar = function () {
  console.log("Hola, mi nombre es " + this.nombre);
};

console.log(persona.nombre); // "Ana"
persona.saludar(); // "Hola, mi nombre es Ana"

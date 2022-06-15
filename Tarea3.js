function Persona (edad, nombre){
        this.edad = edad
        this.nombre = nombre
        let telefono = 232323
    this.getTelefono = function () {
        return telefono
    }
    this.saludar = function () {
        console.log("Hola soy " + nombre + " tengo " + edad + " años y mi numero de telefono es " + this.getTelefono())
    }
}

const newPersona = new Persona(22, "Andres");
newPersona.saludar()

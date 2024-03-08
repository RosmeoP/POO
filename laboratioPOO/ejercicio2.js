class Mascota {
    constructor(nombre, edad, tipo) {
      this._nombre = nombre;
      this._edad = edad;
      this._tipo = tipo;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(nuevaEdad) {
      this._edad = nuevaEdad;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    set tipo(nuevoTipo) {
      this._tipo = nuevoTipo;
    }
  }
  
 
  const miMascota = new Mascota('Fido', 3, 'Perro');
  
  
  console.log(`Nombre: ${miMascota.nombre}, Edad: ${miMascota.edad}, Tipo: ${miMascota.tipo}`);
  
  
  miMascota.nombre = 'Max';
  miMascota.edad = 5;
  
  
  console.log(`Nombre: ${miMascota.nombre}, Edad: ${miMascota.edad}, Tipo: ${miMascota.tipo}`);
  
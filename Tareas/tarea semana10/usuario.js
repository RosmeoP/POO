export  class Usuario{
    constructor(nombre) {
        this.nombre = nombre;
        this.carrito = [];
      }
    
      agregarAlCarrito(producto) {
        this.carrito.push(producto);
        console.log(`${producto.nombre} agregado al carrito de ${this.nombre}`);
      }
    
      verCarrito() {
        console.log(`Carrito de ${this.nombre}:`);
        this.carrito.forEach(producto => {
          console.log(`- ${producto.nombre}: $${producto.precio}`);
        });
      }
}

class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
      this.carrito = [];
    }
  
    agregarAlCarrito(producto) {
      this.carrito.push(producto);
      console.log(`${producto.nombre} agregado al carrito de ${this.nombre}`);
    }
  
    verCarrito() {
      console.log(`Carrito de ${this.nombre}:`);
      this.carrito.forEach(producto => {
        console.log(`- ${producto.nombre}: $${producto.precio}`);
      });
    }
  }
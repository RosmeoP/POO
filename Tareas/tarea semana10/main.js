// Módulo de Usuarios
import { Usuario } from "./usuario";
// Módulo de Productos
import {Producto} from "./producto.js"
// Módulo de Interacción
import { Interaccion } from "./interaccion.js";
  
  // Uso del programa
  const usuario1 = new Usuario("Rosmeo");
const producto1 = new Producto("Camiseta", 20);
const producto2 = new Producto("Pantalón", 30);

Interaccion.comprarProducto(usuario1, producto1);
Interaccion.comprarProducto(usuario1, producto2);
usuario1.verCarrito();
  
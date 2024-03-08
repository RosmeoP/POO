class Boleto {
    constructor(numero, precio, estado = "Disponible") {
        this._numero = numero;
        this._precio = precio;
        this._estado = estado;
    }

    get numero() {
        return this._numero;
    }

    get precio() {
        return this._precio;
    }

    get estado() {
        return this._estado;
    }

    set estado(nuevoEstado) {
        this._estado = nuevoEstado;
    }
}

class Cliente extends Boleto {
    constructor(nombre, dui, edad, telefono, numeroBoleto) {
        super(numeroBoleto, 475.7);
        this._nombre = nombre;
        this._dui = dui;
        this._edad = edad;
        this._telefono = telefono;
    }

    get nombre() {
        return this._nombre;
    }

    get dui() {
        return this._dui;
    }

    get edad() {
        return this._edad;
    }

    get telefono() {
        return this._telefono;
    }

    realizarCompra() {
        if (this.estado === "Disponible") {
            const precioConIVA = this.precio * 1.13;  
            const costoVoleteria = precioConIVA * 0.05;  
            const costoTotal = precioConIVA + costoVoleteria;

            const mensaje = `El cliente ${this.nombre} compró el boleto ${this.numero} por un precio de $${costoTotal.toFixed(2)}. Su espacio está reservado.`;
            alert(mensaje);

            this.estado = "Ocupado";

            const estadoVoleto = findElementByTextContent("td", this.numero).nextElementSibling.nextElementSibling;
            estadoVoleto.textContent = "Ocupado";
        } else {
            alert(`El boleto ${this.numero} ya está ocupado.`);
        }
        
    }
}

function findElementByTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent === text) {
            return elements[i];
        }
    }
    return null;
}


const cliente = new Cliente("Rosmeo", "123456789", 20, "555-1234", "001");


document.getElementById('nombre').innerText = cliente.nombre;
document.getElementById('dui').innerText = cliente.dui;
document.getElementById('edad').innerText = cliente.edad;
document.getElementById('telefono').innerText = cliente.telefono;
document.getElementById('numeroBoleto').innerText = cliente.numero;

function realizarCompra() {
    cliente.realizarCompra();
}
class Datos{
    constructor(nombre, dui, telefono){
        this.nombre = nombre
        this.dui = dui
        this.telefono = telefono

    }

    verdatos(){
        return `${this.nombre} ${this.dui} ${this.telefono}`
    }
}

class Empresa{
    constructor(empresa, puesto, salario){
        this.empresa = empresa
        this.puesto = puesto
        this.salario = salario
    }

    verdatosempresa(){
        return `${this.empresa} ${this.puesto} ${this.salario}`
    }
}

function ObtenerData(){
    let nombre = document.getElementById('nombre').value
    let dui = document.getElementById('dui').value
    let telefono = document.getElementById('telefono').value
    let empresa = document.getElementById('empresa').value
    let puesto = document.getElementById('puesto').value
    let salario = document.getElementById('salario').value

    infoEmpleado = new Datos(nombre, dui, telefono)
    infoEmpresa = new Empresa(empresa, puesto, salario)
    infoEmpleado.verdatos()
    infoEmpresa.verdatosempresa()

    document.getElementById('contenidoDatos').innerHTML=
    '<table border="1">'+
    '<tr>'+
    '<th>Nombre</th>'+
    '<th>DUI</th>'+
    '<th>Teléfono</th>'+
    '<th>Empresa</th>'+
    '<th>Puesto</th>'+
    '<th>Salario</th>'+
    '</tr>'+
    '<tr>'+
    '<td><label id="nom"></label></td>'+
    '<td><label id="d"></label></td>'+
    '<td><label id="t"></label></td>'+
    '<td><label id="e"></label></td>'+
    '<td><label id="p"></label></td>'+
    '<td><label id="s"></label></td>'+
    '</tr>'+
    '</table>'


    document.getElementById('nom').innerText=infoEmpleado.nombre
    document.getElementById('d').innerText=infoEmpleado.dui
    document.getElementById('t').innerText=infoEmpleado.telefono

    document.getElementById('e').innerText=infoEmpresa.empresa
    document.getElementById('p').innerText=infoEmpresa.puesto
    document.getElementById('s').innerText=infoEmpresa.salario
    
}
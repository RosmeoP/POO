class a{
    constructor(nombre){
        this.nombre = nombre
    }

}

class b{
    constructor(apellido){
        this.apellido = apellido
    }

}

class c{
    constructor(nombre, apellido){
       this.a = new a(nombre)
       this.b =new b(apellido)
    }

    invocar(){
        return `${this.a.nombre} + ${this.b.apellido}`
    }

}

let obj = new c ("Rosmeo", "Parada")
alert(obj.invocar())



class Person{
    constructor(cliente){
        this.cliente = cliente
    }
}



class carro{
    constructor(auto){
        this.auto = auto
    }
}

class credito{
    constructor(cliente, auto){
        this.Person = new Person(cliente)
        this.carro = new  carro(auto)
    }

    mostrar(){
        return `${this.Person.cliente} esta comprando un ${this.carro.auto} al credito con la tarjet del papá`
    }
    
}
comprador = new credito("Rosmeo", "Porsche 911")
alert(comprador.mostrar())
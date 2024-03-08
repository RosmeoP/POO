class Hogar{
    constructor(dueño, estructuraCasa){
        this._dueño = dueño
        this._estructuraCasa = estructuraCasa

    }

    get Estructura(){
        return this._estructuraCasa 
    }

    set Estructura(estructura){
        this._estructuraCasa = estructura
    }

    get Name(){
        return this.dueño
    }

    set Name(name){
        this.dueño = name
    }


    move(){
        return `${this._dueño}  is moving to her ${this._estructuraCasa}`
    
    }
}






let accion = new Hogar("Sharlin","")
accion.Estructura="Cuarto de descanso"
alert(accion._estructuraCasa)


let nombre = new Hogar("Rosmeo Mauricio")
nombre.Name="My name is Rosmeo"
alert(nombre.Name)

alert(accion.move())

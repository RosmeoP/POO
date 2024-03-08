class Gafete{

    #private// doesnt work you can change the acces adding # and private and you can change to public erarising that
    constructor(nombre,  departamento, phonenumber, born, year){
        this.nombre = nombre
        this.departamento = departamento 
        this.phonenumber = phonenumber
        this.year = year
        this.born = born


    }


    edad(){
        let edad = this.year - this.born
        return edad
    }
     //~destroy() this how youd destroy in other languages 
    information(){
        return console.log(` ${this.nombre} + ${this.born} +  ${this.departamento} + ${this.phonenumber}`)
    }

}
    nombre= prompt("Introduce your name")
     born = prompt("Introduce when you were born")
    departamento = prompt("introduce where you live")
    phonenumber = prompt("Introduce your tetephone number")
  person = new Gafete(nombre,  departamento, phonenumber, born, 2024 )
  document.getElementById('nombre').innerText= person.nombre
  document.getElementById('age').innerText= person.edad()
  document.getElementById('departamento').innerText= person.departamento
  document.getElementById('phonenumber').innerText= person.phonenumber
  person.information()



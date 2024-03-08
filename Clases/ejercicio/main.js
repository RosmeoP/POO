class Message{
    constructor(nombre, mensaje){
        this.nombre = nombre
        this.mensaje = mensaje
    }

   get Nombre () {
    return this.nombre
   }

   set Nombre (nuevanombre){
    this.nombre = nuevanombre
   }
}

function sendMessage() {
    let nombre = document.getElementById('nombre').value
    let texto = document.getElementById('mensaje').value

   const mensaje = new Message(nombre, texto)
       if (nombre === "") {
        mensaje.Nombre = "Anonymous" 
      } 

      alert(`${mensaje.nombre}: ${mensaje.mensaje}`)
    
}


  
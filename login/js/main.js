

function run(){
  const main = new Main(document.getElementById("user"), document.getElementById("password"), document.getElementById("type").value)
  main.run()
}
class getAccess{
    constructor(username, password){
        this.username = username
        this.password = password
        this.righUsername = "rosmeoo"
        this.rightPassword = "villalobos"
    }

    newAccess(){
        let validation = false
        if(this.username === this.righUsername && this.password === this.rightPassword){
            alertify.success('You have log in succesfully, congrats! ');

            validation = true
        }

        else{

            if(this.username !== this.righUsername && this.password !== this.rightPassword){

                alertify.error('Both credential are incorrect');
                console.log({"a":this.username,"b": this.password,"c": this.rightPassword,"d" :this.righUsername})

                
            }

            else if(this.username !== this.righUsername){
                alertify.error('The username is  incorrect');

            }
            else{
                alertify.error('The password is incorrect');
            }
            
        }

        return validation


    }
}

class LoginWithGoogle extends getAccess{
    constructor(username, password, googlePassword){
        super(username, password)
        this.googlePassword = googlePassword
        this.righUsername = "mauricio"
        this.rightPassword = "parada"
        
    }

    newAccess(){
        let validation = false
             if(this.username === this.righUsername && this.password === this.rightPassword && this.googlePassword === this.rightPassword){
            alertify.success('You have log in succesfully, congrats! ');

            validation = true
        }

        else{

            if(this.username !== this.righUsername && this.password !== this.rightPassword && this.googlePassword !== this.rightPassword){

                alertify.error('Both credential are incorrect');
                console.log({"a":this.username,"b": this.password,"c": this.rightPassword,"d" :this.righUsername})
                
            }

            else if(this.username !== this.righUsername){
                alertify.error('The username is  incorrect');

            }
            else{
                alertify.error('The password is incorrect');
            }
            
        }
        return validation
    }



}

class Login extends getAccess{
    constructor(username, password){
        super(username, password)
    }


    
}


class Main{
    constructor(txtUser, txtPassword, type){
        this.txtUser = txtUser
        this.txtPassword = txtPassword
        this.type = parseInt(type)
    }

    run(){
        let login 
        console.log(this.type)
        if (this.type === 0){
             login = new Login(this.txtUser.value, this.txtPassword.value)
             
        }

        else{
             login = new LoginWithGoogle(this.txtUser.value, this.txtPassword.value, this.txtPassword.value)
        }

    const isValid = login.newAccess()
        if(isValid){
            window.location.href="profile.html"
        }
    }




}


function informacion() {              
    let nombre = document.getElementById('nombre').value
    let fecha = document.getElementById('fecha').value
    let genero = document.getElementById('genero').value
    let departamento = document.getElementById('departamento').value
    let ciudad = document.getElementById('ciudad').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
  
    var url = 'documents.html?nombre=' + encodeURIComponent(nombre) +
              '&fecha=' + encodeURIComponent(fecha) +
              '&genero=' + encodeURIComponent(genero) +
              '&departamento=' + encodeURIComponent(departamento) +
              '&ciudad=' + encodeURIComponent(ciudad) +
              '&telefono=' + encodeURIComponent(telefono) +
              '&direccion=' + encodeURIComponent(direccion);
    window.location.href = url;
  }


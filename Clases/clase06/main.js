class promedio{
    constructor(nombre, n1, n2, n3 ,n4){
        this.nombre = nombre
        this.n1= n1
        this.n2= n2
        this.n3= n3
        this.n4= n4

    }

    calcular(){
        let prom=($this.n1 + this.n2 + this.n3 + this.n4)/4
        return prom
    }
}

alumno = prompt("Enter yor name")
n1 = prompt("Enter your first note")
n2 = prompt("Enter your second note")
n3 = prompt("Enter your third note")
n4 = prompt("Enter your fourth note")

student = new promedio(alumno, n1, n2, n3,n4)
document.getElementById('promedio').innerText=student.calcular()
document.getElementById('nombre').innerText=student.nombre()

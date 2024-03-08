class IMC{
    constructor(peso, altura){
        this.peso = peso
        this.altura= altura
    }

    calcular(){
        let IMC = this.peso / (this.altura * this.altura)
        return IMC
    }
}

function CalcularIMC(){
    let pesoKG = parseFloat(document.getElementById("pesokg").value)
    let alturaMetros = parseFloat(document.getElementById("altura").value)

    Indice = new IMC (pesoKG, alturaMetros)
    let resultado = Indice.calcular().toFixed(2)
    alert(resultado)
}   
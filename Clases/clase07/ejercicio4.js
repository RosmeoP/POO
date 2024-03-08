class Usuario {
    constructor(numeroCuenta, saldoInicial) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldoInicial;
    }
  
    depositar(monto) {
      if (isNaN(monto) || monto <= 0) {
        alert("¡Error! El monto debe ser un número positivo.");
        return;
      }
      this.saldo += monto;
    }
  
    get nuevoBalance() {
      return this.saldo.toFixed(2);
    }
  }
  
  function main() {
    const numeroCuenta = prompt("Ingrese su número de cuenta: ");
    const usuario = new Usuario(numeroCuenta, 35.45);
  
    const monto = parseFloat(prompt("Ingrese el monto a depositar: "));
    usuario.depositar(monto);
  
    alert(`¡Felicidades! Su nuevo balance para la cuenta ${usuario.numeroCuenta} es de $${usuario.nuevoBalance}`);
  }
  
  main();
  
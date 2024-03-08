function evaluarDatos() {
    const nombre = document.getElementById("nombre").value;
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const genero = document.getElementById("genero").value.toUpperCase();

    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    
    if (hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    const resultado = `${nombre} tiene ${edad} años y es ${genero === "M" ? "Masculino" : "Femenino"}.`;
    document.getElementById("resultado").innerText = resultado;
}

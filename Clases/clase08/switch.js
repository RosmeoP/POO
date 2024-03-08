let dia = prompt("¿Qué día de la semana es hoy?");

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes.");
    break;
  case "martes":
    console.log("Hoy es martes.");
    break;
  case "miércoles":
    console.log("Hoy es miércoles.");
    break;
  case "jueves":
    console.log("Hoy es jueves.");
    break;
  case "viernes":
    console.log("Hoy es viernes.");
    break;
  case "sábado":
    console.log("Hoy es sábado.");
    break;
  case "domingo":
    console.log("Hoy es domingo.");
    break;
  default:
    console.log("No es un día válido de la semana.");
}

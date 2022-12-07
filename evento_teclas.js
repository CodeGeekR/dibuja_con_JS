const teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

const boton = document.getElementById("botoncito");
const select = document.getElementById("Pixeles");
const canvas = document.getElementById("Area de dibujo");
const papel = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height / 2;
var ancho_lienzo = canvas.width;
var alto_lienzo = canvas.height;

// Agrega un listener al elemento select
select.addEventListener("change", (event) => {
  // Obtiene la opción seleccionada
  const option = event.target.value;
  // Si la opción seleccionada es 300 x 300
  if (option === "300 x 300") {
    // Cambia el ancho y alto del canvas a 300
    canvas.setAttribute("width", "300");
    canvas.setAttribute("height", "300");
    // Actualiza la posición del cursor en el centro del canvas
    x = canvas.width / 2;
    y = canvas.height / 2;
  } else if (option === "500 x 500") {
    // Cambia el ancho y alto del canvas a 500
    canvas.setAttribute("width", "500");
    canvas.setAttribute("height", "500");
    // Actualiza la posición del cursor en el centro del canvas
    x = canvas.width / 2;
    y = canvas.height / 2;
  } else if (option === "800 x 800") {
    // Cambia el ancho y alto del canvas a 800
    canvas.setAttribute("width", "800");
    canvas.setAttribute("height", "800");
    // Actualiza la posición del cursor en el centro del canvas
    x = canvas.width / 2;
    y = canvas.height / 2;
  }
});

// Variable global para almacenar el color elegido por el usuario
let colorElegido = "#000000";

// Función que actualiza la variable colorElegido con el valor del color seleccionado por el usuario en la paleta
function actualizarColor(color) {
  colorElegido = color;
}

//dibujando con el teclado desde el punto central
dibujarLinea(colorElegido, x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(
  colorElegido,
  x_inicial,
  y_inicial,
  x_final,
  y_final,
  lienzo
) {
  lienzo.beginPath();
  lienzo.strokeStyle = colorElegido;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorcito = colorElegido;
  var movimiento = 7;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default: // representa un else, se ejecueta en cualquier otro caso
      console.log("Otra tecla");
      break;
  }
}

// el evento tecla se puede representar con un if o con un switch,
//    if(evento.keyCode == teclas.UP)
//    {
//        console.log("Tecla Arriba OK");
//    }

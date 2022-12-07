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

// Agrega un listener al canvas para el evento mousedown
canvas.addEventListener("mousedown", (event) => {
  // Obtiene la posición del mouse en el canvas
  x = event.offsetX;
  y = event.offsetY;

  // Inicia un nuevo trazo en el canvas
  papel.beginPath();
  // Establece el color del trazo
  papel.strokeStyle = colorElegido;
  // Establece el grosor del trazo
  papel.lineWidth = 3;
  // Mueve la posición del lápiz al punto donde se ha presionado el mouse
  papel.moveTo(x, y);
});

// Agrega un listener al canvas para el evento mousemove
canvas.addEventListener("mousemove", (event) => {
  // Si el mouse está presionado
  if (event.buttons === 1) {
    // Obtiene la posición del mouse en el canvas
    x = event.offsetX;
    y = event.offsetY;

    // Dibuja una línea hasta la posición del mouse
    papel.lineTo(x, y);
    // Dibuja el trazo en el canvas
    papel.stroke();
  }
});

// Agrega un botón de borrador y un listener para cuando se haga click en él
const borrarBoton = document.createElement("button");
borrarBoton.setAttribute("id", "borrador");
borrarBoton.textContent = "Borrar";
document.body.appendChild(borrarBoton);

// Variable global para controlar si el modo borrador está activado o no
let modoBorrador = false;

// Agrega un listener al botón "Borrador"
borrarBoton.addEventListener("click", (event) => {
  // Activa o desactiva el modo borrador
  modoBorrador = !modoBorrador;

  // Si el modo borrador está activado
  if (modoBorrador) {
    // Cambia la apariencia del puntero del mouse cuando está sobre el canvas
    canvas.style.cursor =
      "url('https://github.com/CodeGeekR/peso_planeta/blob/main/paper-eraser.png?raw=true'), auto";
  } else {
    // Reestablece la apariencia del puntero del mouse cuando no está sobre el canvas
    canvas.style.cursor = "auto";
  }
});

// Agrega un listener al canvas para el evento mousedown
canvas.addEventListener("mousedown", (event) => {
  // Si el modo borrador está activo
  if (modoBorrador) {
    // Obtiene la posición del mouse en el canvas
    const x = event.offsetX;
    const y = event.offsetY;
    // Borra el contenido del canvas en la posición del mouse
    papel.clearRect(x, y, 1, 1);
  }
});

// Agrega un listener al canvas para el evento touchstart
canvas.addEventListener("touchstart", (event) => {
  // Obtiene la posición del dedo en el canvas
  const touch = event.touches[0];
  x = touch.clientX;
  y = touch.clientY;

  // Inicia un nuevo trazo en el canvas
  papel.beginPath();
  // Establece el color del trazo
  papel.strokeStyle = colorElegido;
  // Establece el grosor del trazo
  papel.lineWidth = 3;
  // Mueve la posición del lápiz al punto donde se ha tocado el canvas
  papel.moveTo(x, y);
});

// Agrega un listener al canvas para el evento touchmove
canvas.addEventListener("touchmove", (event) => {
  // Obtiene la posición del dedo en el canvas
  const touch = event.touches[0];
  x = touch.clientX;
  y = touch.clientY;

  // Dibuja una línea hasta la posición del dedo
  papel.lineTo(x, y);
  // Dibuja el trazo en el canvas
  papel.stroke();
});

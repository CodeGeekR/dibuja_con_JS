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

// Función que devuelve el color elegido por el usuario cuando el botón Borrador está desactivado
function obtenerColor() {
  // Si el modo borrador está desactivado
  if (!modoBorrador) {
    // Devuelve el color elegido por el usuario
    return colorElegido;
  }
}

// Agrega un listener al canvas para el evento mousedown
canvas.addEventListener("mousedown", (event) => {
  // Obtiene la posición del mouse en el canvas
  x = event.offsetX;
  y = event.offsetY;

  // Inicia un nuevo trazo en el canvas
  papel.beginPath();
  // Establece el color del trazo
  papel.strokeStyle = obtenerColor();
  // Establece el grosor del trazo
  papel.lineWidth = 7;
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
    // Establece el color del trazo utilizando la función obtenerColor
    papel.strokeStyle = obtenerColor();

    // Dibuja una línea hasta la posición del mouse
    papel.lineTo(x, y);
    // Dibuja el trazo en el canvas
    papel.stroke();
  }
});

// Agrega un listener al canvas para el evento touchstart
canvas.addEventListener("touchstart", (event) => {
  // Obtiene el elemento canvas y la posición del dedo en el canvas
  const canvasElement = event.touches[0].target;
  const touch = event.touches[0];
  x = touch.clientX - canvasElement.offsetLeft;
  y = touch.clientY - canvasElement.offsetTop;

  // Inicia un nuevo trazo en el canvas
  papel.beginPath();
  // Establece el color del trazo
  papel.strokeStyle = obtenerColor();
  // Establece el grosor del trazo
  papel.lineWidth = 7;
  // Mueve la posición del lápiz al punto donde se ha tocado el canvas
  papel.moveTo(x, y);
});

// Agrega un listener al canvas para el evento touchmove
canvas.addEventListener("touchmove", (event) => {
  // Evita que el evento touchmove se propague al elemento padre
  event.preventDefault();
  // Obtiene la posición del dedo en el canvas
  const touch = event.targetTouches[0];
  // Obtiene el elemento canvas
  const canvasElement = touch.target;
  // Calcula la posición del dedo en el canvas
  x = touch.pageX - canvasElement.offsetLeft;
  y = touch.pageY - canvasElement.offsetTop;
  // Establece el color del trazo utilizando la función obtenerColor
  papel.strokeStyle = obtenerColor();

  // Dibuja una línea hasta la posición del dedo
  papel.lineTo(x, y);
  // Dibuja el trazo en el canvas
  papel.stroke();
});

// Agrega un botón de borrador y un listener para cuando se haga click en él
const borrarBoton = document.createElement("button");
borrarBoton.setAttribute("id", "borrar");
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
      "url('https://github.com/CodeGeekR/dibuja_con_JS/blob/main/eraser-tool-24.png?raw=true'), auto";
    // Establece el color del trazo en blanco
    borrar(); // Llama a la función Borrador
  } else {
    // Reestablece la apariencia del puntero del mouse cuando no está sobre el canvas
    canvas.style.cursor = "auto";
  }
});

// Crea una función Borrador que cambia el color del trazo a blanco
function borrar() {
  // Establece el color del trazo en blanco
  papel.strokeStyle = "#FFFFFF";

  // Inicia un nuevo trazo en el canvas cuando se presiona el mouse o se toca el canvas
  canvas.addEventListener("mousedown", (event) => {
    // Obtiene la posición del mouse en el canvas
    x = event.offsetX;
    y = event.offsetY;

    // Inicia un nuevo trazo en el canvas
    papel.beginPath();
    // Establece el color del trazo
    papel.strokeStyle = "#FFFFFF";
    // Establece el grosor del trazo
    papel.lineWidth = 3;
    // Mueve la posición del lápiz al punto donde se ha presionado el mouse
    papel.moveTo(x, y);
  });
  canvas.addEventListener("touchstart", (event) => {
    // Obtiene la posición del dedo en el canvas
    const canvasElement = event.touches[0].target;
    const touch = event.touches[0];
    x = touch.clientX - canvasElement.offsetLeft;
    y = touch.clientY - canvasElement.offsetTop;

    // Inicia un nuevo trazo en el canvas
    papel.beginPath();
    // Establece el color del trazo
    papel.strokeStyle = "#FFFFFF";
    // Establece el grosor del trazo
    papel.lineWidth = 3;
    // Mueve la posición del lápiz al punto donde se ha tocado el canvas
    papel.moveTo(x, y);
  });
}

function obtenerColor() {
  // Si el modo borrador está desactivado
  if (!modoBorrador) {
    // Devuelve el color elegido por el usuario
    return colorElegido;
  }
}

//<!-- Funcion que activa una nueva pestaña para Chat WhatsApp (jQuery para WhatsApp) -->
function addChatWp() {
  var botonWhatsApp = document.querySelector(".boton-whatsapp");

  botonWhatsApp.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://wa.me/+573132007146", "_blank");
  });
}
window.addEventListener("load", addChatWp);

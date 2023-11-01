// Definimos el contador como una variable global
let contador = 0;

// Función para actualizar el contador en el HTML
function actualizar() {
  // Busca el elemento con la clase "contador" y actualiza su contenido con el valor del contador
  document.querySelector(".contador").innerText = contador;
}

// Función para incrementar el contador
function incrementar() {
  // Incrementa el contador
  contador++;
  // Actualiza el valor mostrado en la página
  actualizar();
}

// Función para reiniciar el contador
function reiniciar() {
  // Reinicia el contador a 0
  contador = 0;
  // Actualiza el valor mostrado en la página
  actualizar();
}

// Función para manejar los botones al iniciar
function empezar() {
  // Selecciona el elemento con la clase "caja"
  const caja = document.querySelector(".caja");
  // Actualiza el contenido de la caja con botones y el contador inicializado
  caja.innerHTML = `
    <button class="boton2">Añadir 1</button>
    <button class="boton3">Reiniciar</button>
    <div class="contador">${contador}</div>`;

  // Asigna eventos a los botones recién creados
  document.querySelector(".boton2").addEventListener("click", incrementar);
  document.querySelector(".boton3").addEventListener("click", reiniciar);
}

// Asigna evento de click al botón "Empezar"
document.querySelector(".boton1").addEventListener("click", empezar);

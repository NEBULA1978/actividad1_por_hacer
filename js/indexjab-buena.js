// Inicialización del contador en 1
let contador = 1;

// Asigna el evento 'click' al botón con clase "boton1" y llama a la función "empezar" al hacer clic
document.querySelector(".boton1").addEventListener("click", empezar);

// Función que se ejecuta al hacer clic en el botón "boton1"
function empezar() {
    // Reemplaza el contenido de la caja con nuevos elementos HTML para los botones y el contador
    document.querySelector(".caja").innerHTML = `
        <button class="boton2">Añadir 1</button>
        <button class="boton3">Reiniciar</button>
        <div class="contador"></div>`;
    
    // Actualiza el valor del contador en la página
    actualizar();

    // Asigna eventos a los botones "Añadir 1" y "Reiniciar"
    document.querySelector(".boton2").addEventListener("click", incrementar);
    document.querySelector(".boton3").onclick = reiniciar;
}

// Función para aumentar el contador al hacer clic en el botón "Añadir 1"
function incrementar() {
    // Incrementa el contador en 1
    ++contador;
    // Actualiza el valor del contador en la página
    actualizar();
}

// Función para reiniciar el contador al hacer clic en el botón "Reiniciar"
function reiniciar() {
    // Reinicia el contador a 1
    contador = 1;
    // Actualiza el valor del contador en la página
    actualizar();
}

// Función para actualizar el valor del contador en la página
function actualizar() {
    // Actualiza el contenido del elemento con la clase "contador" con el valor del contador
    document.querySelector(".contador").innerHTML = contador;
}

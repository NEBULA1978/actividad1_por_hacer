document.addEventListener("DOMContentLoaded", function() {
  const caja = document.querySelector('.caja');

  function empezar() {
    const botonEmpezar = document.querySelector('.boton1');
    botonEmpezar.removeEventListener('click', empezar); // Elimina el listener del botón "Empezar" después del primer clic

    // Eliminar el botón "Empezar" al iniciar
    caja.removeChild(botonEmpezar);

    // Función para crear botones
    function crearBoton(texto, clase, callback) {
      const boton = document.createElement('button');
      boton.textContent = texto;
      boton.classList.add(clase);
      boton.addEventListener('click', callback);
      caja.appendChild(boton);
    }

    let contador = 0;
    const resultado = document.createElement('p');
    caja.appendChild(resultado);

    // Función que se activará al hacer clic en "Añadir 1"
    function agregarUno() {
      contador++;
      resultado.textContent = contador;
    }

    // Función que se activará al hacer clic en "Reiniciar"
    function reiniciar() {
      contador = 1;
      resultado.textContent = contador;
    }

    // Crear botón "Añadir 1"
    crearBoton('Añadir 1', 'anadir', agregarUno);

    // Crear botón "Reiniciar"
    crearBoton('Reiniciar', 'reiniciar', reiniciar);
  }

  document.querySelector('.boton1').addEventListener('click', empezar);
});

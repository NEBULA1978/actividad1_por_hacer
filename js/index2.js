document.addEventListener("DOMContentLoaded", function() {
  const caja = document.querySelector('.caja');
  const botonEmpezar = document.querySelector('.boton1');

  botonEmpezar.addEventListener('click', function() {
    caja.removeChild(botonEmpezar); // Eliminar el primer botón "Empezar"

    // Crear botón "Añadir 1"
    const botonAnadir = crearBoton('Añadir 1', 'anadir');
    caja.appendChild(botonAnadir); // Agregar el botón "Añadir 1" a la caja

    // Crear botón "Reiniciar"
    const botonReiniciar = crearBoton('Reiniciar', 'reiniciar');
    caja.appendChild(botonReiniciar); // Agregar el botón "Reiniciar" a la caja

    let contador = 0;
    const resultado = crearElemento('p');
    caja.appendChild(resultado); // Agregar el elemento para mostrar el conteo a la caja

    // Event listener para el botón "Añadir 1"
    botonAnadir.addEventListener('click', function() {
      contador = incrementarContador(contador, resultado);
    });

    // Event listener para el botón "Reiniciar"
    botonReiniciar.addEventListener('click', function() {
      contador = reiniciarContador(resultado);
    });
  });

  // Función para crear botones
  function crearBoton(texto, clase) {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.classList.add(clase); // Agregar clase para estilos
    return boton;
  }

  // Función para crear elementos
  function crearElemento(tipo) {
    return document.createElement(tipo);
  }

  // Función para incrementar el contador y mostrar el valor
  function incrementarContador(contador, elemento) {
    contador++;
    elemento.textContent = contador; // Mostrar el contador actualizado
    return contador;
  }

  // Función para reiniciar el contador y mostrar el valor como 1
  function reiniciarContador(elemento) {
    const reinicio = 1;
    elemento.textContent = reinicio; // Mostrar el contador restablecido
    return reinicio;
  }
});

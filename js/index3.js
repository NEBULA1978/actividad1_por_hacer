// Función para crear botones
function crearBoton(texto, clase) {
  const boton = document.createElement('button');
  boton.textContent = texto;
  boton.classList.add(clase);
  return boton;
}

// Función para crear elementos
function crearElemento(tipo) {
  return document.createElement(tipo);
}

document.addEventListener("DOMContentLoaded", function() {
  const caja = document.querySelector('.caja');
  const botonEmpezar = document.querySelector('.boton1');
  let contador = 0;
  let botonesAgregados = false;
  let botones;

  botonEmpezar.addEventListener('click', function() {
    caja.removeChild(botonEmpezar);
    mostrarBotones();
  });

  // Función para mostrar botones "Añadir 1" y "Reiniciar"
  function mostrarBotones() {
    const botonAnadir = crearBoton('Añadir 1', 'anadir');
    caja.appendChild(botonAnadir);

    const botonReiniciar = crearBoton('Reiniciar', 'reiniciar');
    caja.appendChild(botonReiniciar);

    const resultado = crearElemento('p');
    caja.appendChild(resultado);

    botonAnadir.addEventListener('click', function() {
      contador = incrementarContador(contador, resultado);
    });

    botonReiniciar.addEventListener('click', function() {
      contador = reiniciarContador(resultado);
    });

    const botonVolver = crearBoton('Volver', 'volver');
    caja.appendChild(botonVolver);

    botonVolver.addEventListener('click', function() {
      reiniciarInterfaz();
    });

    botonesAgregados = true;
    botones = [botonAnadir, botonReiniciar, resultado, botonVolver];
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

  // Función para reiniciar la interfaz al estado inicial
  function reiniciarInterfaz() {
    if (botonesAgregados) {
      botones.forEach(function(boton) {
        caja.removeChild(boton); // Eliminar solo los botones agregados
      });
      botonesAgregados = false;
    }
    caja.appendChild(botonEmpezar); // Volver a mostrar el botón "Empezar"
    contador = 0; // Restablecer el contador
  }
});

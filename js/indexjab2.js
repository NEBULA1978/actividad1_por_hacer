document.addEventListener("DOMContentLoaded", function() {
  const caja = document.querySelector('.caja');
  let contador; // Variable definida para el contador
  let resultado; // Variable definida para el elemento de resultado

  // Función para manejar el clic en los botones "Añadir 1" y "Reiniciar"
  function botonClick(event) {
    const texto = event.target.textContent;

    // Verifica el texto del botón clicado para decidir la acción a realizar
    if (texto === 'Añadir 1') {
      contador++;
      resultado.textContent = contador; // Muestra el contador actualizado
    } else if (texto === 'Reiniciar') {
      contador = 1; // Reinicia el contador a 1
      resultado.textContent = contador; // Muestra el contador restablecido
    }
  }

  // Función para crear botones dinámicamente
  function crearBoton(texto, clase) {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.classList.add(clase);
    boton.addEventListener('click', botonClick); // Agrega el evento al botón creado
    caja.appendChild(boton); // Agrega el botón al contenedor
  }

  const botonEmpezar = document.querySelector('.boton1');
  botonEmpezar.addEventListener('click', function() {
    caja.removeChild(botonEmpezar); // Elimina el botón "Empezar" al iniciar

    contador = 0; // Inicializa el contador
    resultado = document.createElement('p'); // Crea el elemento para mostrar el contador
    caja.appendChild(resultado); // Agrega el elemento al contenedor

    // Crea los botones "Añadir 1" y "Reiniciar" con su clase respectiva
    crearBoton('Añadir 1', 'anadir');
    crearBoton('Reiniciar', 'reiniciar');
  });
});

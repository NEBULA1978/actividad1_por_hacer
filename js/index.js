document.addEventListener("DOMContentLoaded", function() {
  const caja = document.querySelector('.caja');
  const botonEmpezar = document.querySelector('.boton1');

  botonEmpezar.addEventListener('click', function() {
    caja.removeChild(botonEmpezar); // Eliminar el primer botón "Empezar"

    // Crear botón "Añadir 1"
    const botonAnadir = document.createElement('button');
    botonAnadir.textContent = 'Añadir 1';
    botonAnadir.classList.add('anadir'); // Añadir clase para estilos
    caja.appendChild(botonAnadir); // Agregar el botón "Añadir 1" a la caja

    // Crear botón "Reiniciar"
    const botonReiniciar = document.createElement('button');
    botonReiniciar.textContent = 'Reiniciar';
    botonReiniciar.classList.add('reiniciar'); // Añadir clase para estilos
    caja.appendChild(botonReiniciar); // Agregar el botón "Reiniciar" a la caja

    let contador = 0;
    const resultado = document.createElement('p'); // Elemento para mostrar el conteo
    caja.appendChild(resultado); // Agregar el elemento para mostrar el conteo a la caja

    // Event listener para el botón "Añadir 1"
    botonAnadir.addEventListener('click', function() {
      contador++;
      resultado.textContent = contador; // Mostrar el contador actualizado
    });

    // Event listener para el botón "Reiniciar"
    botonReiniciar.addEventListener('click', function() {
      contador = 1; // Restablecer el contador a 1
      resultado.textContent = contador; // Mostrar el contador restablecido
    });
  });
});

'use strict'

/* No cambiar los nombres de las funciones. */

/*****************************************************************************************/

/* 

Ejercicio 6: Completar las siguientes funciones. Recordar que una función siempre devuelve 
un valor (return). 

*/

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  let contador = 0; 

  return function() {
    contador++;
    return contador;
  };
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  const cache = {}; // Objeto para guardar los resultados

  return function(arg) {
    if (cache.hasOwnProperty(arg)) {
      return cache[arg]; // Si ya existe en cache, devolvemos el valor guardado
    } else {
      const resultado = cb(arg); // Ejecutamos la callback
      cache[arg] = resultado;    // Guardamos en el cache
      return resultado;
    }
  };
}

/*****************************************************************************************/

// ------------------------------------------------------------------
// No modificar nada debajo de esta línea, sino no correrán los test.
// ------------------------------------------------------------------

module.exports = {
  counter,
  cacheFunction,
};
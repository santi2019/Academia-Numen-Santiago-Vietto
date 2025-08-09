/* Ejercicio 1: En estas primeras consignas, reemplaza "null" por la respuesta correcta
   para que de verdadero. 
*/

// Crea una variable "string", puede contener lo que quieras (Borrar el dato null antes
// de poner el nuevo dato).

const nuevaString = "hola";

// Crea una nueva variable numerica.

const nuevoNum = 32;

// Crea una nueva variable booleana.

const nuevoBool = true;

// Resuelve el siguiente problema matematico:

const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matematico:

const nuevoMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matematico:

const nuevoModulo = 21 % 5 === 1;

/*****************************************************************************************/

/* Ejercicio 2: Completar las siguientes funciones. Recordar que una función siempre 
devuelve un valor (return). */

function devolverString(str){
    // "Return" la string provista: str.
    // Tu codigo:
    return str;
}

function suma(x, y){
    // "x" e "y" son numeros.
    // Sumá "x" e "y" juntos y devolve el valor.
    // Tu codigo:
    return x + y;
}

function resta(x, y){
    // "x" e "y" son numeros.
    // Restá "x" e "y" y devolve el valor.
    // Tu codigo:
    return x - y;
}

function multiplica(x, y){
    // "x" e "y" son numeros.
    // Multiplicá "x" por "y" y devolve el valor.
    // Tu codigo:
    return x * y;
}

function divide(x, y){
    // "x" e "y" son numeros.
    // Dividi "x" entre "y"  y devolve el valor.
    // Tu codigo:
    return x / y;
}

function sonIguales(x, y){
    // Devuelve "true" si "x" e "y" som iguales.
    // De lo contrario, devuelve "false".
    // Tu codigo:
    return x === y; 
}

function tieneMismaLongitud(str1, str2){
    // Devuelve "true si los dos strings tienen la misma longitud.
    // De lo contrario, devuelve "false".
    // Tu codigo:
    return str1.length === str2.length;
}

function menosQueNoventa(num){
    // Devuelve "true" si el argumento de la funcion es menor que noventa.
    // De lo contrario, devuelve "false".
    // Tu codigo:
    return num < 90;
}

function mayorQueCincuenta(num){
    // Devuelve "true" si el argumento de la funcion es mayor que cincuenta.
    // De lo contrario, devuelve "false".
    // Tu codigo:
    return num > 50;
}

function obtenerResto(x, y){
    // Devuelve "true" si el argumento de la funcion es mayor que cincuenta.
    // De lo contrario, devuelve "false".
    // Tu codigo:
    return num > 50;
}

function obtenerResto(x, y) {
    // Obtener el resto de la división de "x" entre "y".
    // Tu código:
    return x % y;
}

function esPar(num) {
    // Devuelve "true" si "num" es par (cualquier numero dividido 2, si el 
    // resto es 0, entonces es par).
    // De lo contrario, devuelve "false".
    // Tu código:
    return num % 2 === 0;
}

function esImpar(num) {
    // Devuelve "true" si "num" es impar (cualquier numero dividido 2, si el 
    // resto es 1, entonces es impar).
    // De lo contrario, devuelve "false"
    // Tu código:
    return num % 2 === 1;
}

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado.
    // Tu código:
    return num ** 2; //Math.pow(num, 2)
}

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo.
    // Tu código:
    return  elevar(num, 3);
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent".
    // Tu código:
    return num ** exponent;
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo.
    // Tu código:
    return Math.round(num); //A partir de 5 redondea para arriba.
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo.
    // Tu código:
    return Math.ceil(num); //Si tenemos 3.14 o 3.68 redonde a 4.
}

function redondearHaciaAbajo(num) {
    // Redondea "num" hacia abajo (al próximo entero) y devuélvelo.
    // Tu código:
    return Math.floor(num); //Si tenemos 3.14 o 3.68 redonde a 3.
}

function numeroRandom() {
    // Generar un número al azar entre 0 y 1 y devolverlo.
    return Math.random(); // Para colocar un rango hacemos Math.random() * num
}

function esPositivo(numero) {
    // La función va a recibir un entero. 
    // Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    // Si el número es positivo, devolver --> "Es positivo".
    // Si el número es negativo, devolver --> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código: Resolvemos con estructura ternaria, en la cual se retorna la opcion que se cumple.
    // Pero no es recomendable cuando hay mas de dos comparaciones.
    return numero > 0
        ? "Es postivio"
        : numero < 0
            ? "Es negativo"
            : false
}

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string.
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str + "!"
}

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Cristian", "Romulo" -> "Cristian Romulo"
    // Tu código:
    return nombre + " " + apellido
}

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Nahuel" -> "Hola Nahuel!"
    // Tu código:
    return "Hola" + " " + nombre + "!"
}

function deEuroAdolar(euro) {
    // Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba como parámetro un 
    // número de euros y calcule el cambio en dólares.
    // Escribe tu código aquí:
    return euro * 1.20
}

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho.
    // Tu código:
    return alto * ancho
}

function retornarPerimetro(lado) {
    // Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    // Escribe tu código aquí:
    return lado * 4.
}

function areaDelTriangulo(base, altura) {
    // Desarrolle una función que calcule el área de un triángulo.
    // Escribe tu código aquí:
    return (base * altura) / 2
}

function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  // Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  // que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Escribe tu código aquí:

  if (letra.length !== 1){
    return "Dato incorrecto";
  }

  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal"; 
  }
}

/*
    Las funciones se nombran con un verbo en infinitivo cuando devuelven, o bien un valor no 
    booleano, o cuando ejecutan acciones (cuando son procedimientos y no retornan valores). 
    Pero cuando el retorno es booleano, no se usa un verbo en infinitivo porque se una pregunta.
*/

/*****************************************************************************************/

// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  redondearHaciaAbajo,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};


































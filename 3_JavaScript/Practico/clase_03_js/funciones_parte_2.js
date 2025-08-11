/********* FUNCIONES PARTE 2 **********/

/*
    Scope (ambito/alcance): En la programacion en general, cuando creamos bloques como funciones o estructuras de
    control, las instrucciones que colocamos dentro, se encuentran en un ambito distinto (ambito local) a si las 
    colocamos sueltas en la hoja de JS (ambito global). Esto puede afectar el alcance que nuestras funciones tienen 
    para acceder a las variables que se encuentren declaradas en dicho ambito. Mientras mas privado es el ambito, 
    mas dificil es alcanzarlo, pero desde el mas privado se pueden alcanzar todos los ambitos que sean mayores o mas
    genericos desde el que partimos.

    En el siguiente ejemplo, para las variables de tipo var, volver a hacer la decaracion de la misma variable es una 
    sobre escritura. Si la variable se muestra dentro de la funcion, se mostrara Rock, si se muestra debajo de la funcion
    y antes de la segunda declaracion de la variable se mostrara Pop, y si se muestra abajo de todo se mostrara Jazz.
    Si se muestra la variable musica dentro de la funcion, pero a su vez no se declara dentro el valor de la variable, se
    va a mostrar Pop, pero si dentro de la funcion se mustra la variable antes de la declaracion, se mostrara indefinido
    porque el sistema, en tiempo de ejecucion, sabe que la variable esta declarada dentro de la funcion pero no puede
    acceder por cuestiones de orden, y no muestra el valor global, en este caso pop, por que justamente la variable ya 
    esta declarada en la funcion y tiene prioridad.


var musica = "Pop"; //Ambito global

function casa(){
    var musica = "Rock"; //Ambito local
    console.log(musica);
};

var musica = "Jazz"; //Ambito global

casa();


    Hoisting (Elevacion): Cuando JS no puede resolver un problema de alcance, eleva la sentencia al ambito global 
    para que pueda ser accedida. Y esto es lo que ocurre en el siguiente caso , en la cual, durante tiempo de 
    ejecucion, saca la variable a fuera de los corchetes para poder acceder a ella. Por ende, en la siguiente 
    estructura, que no es rigida como las funciones, se permite acceder al dato y se sobreescribe, pero esto no 
    deberia suceder:

{
    var musica = "Rock";
}

    Con las variables de tipo let podemos evitar esto, por lo que se mostrara la variable del ambito global, a no 
    ser que se muestre la variable endro de las estructuras tanto rigidas como no rigidas. Entonces la variable let
    como la variable const arreglan los problemas que tiene la variable var en terminos de scope. Y con esto no es
    necesario usar los bloques poco estrictos. Y en caso de mostrar la variable, dentro de la funcion, pero antes
    de su propia declaracion, nos saldra un error indicando, en este caso, que "no se puede acceder a la variable
    musica antes de ser declarada".
    - Error TDZ (Temporal Dead Zone): Ya que la variable existe dentro de la estructura, pero no en tiempo de 
      ejecucion. No se puede acceder hasta que exista.

let musica = "Pop"; //Ambito global

function casa(){
    var musica = "Rock"; //Ambito local
};

{
    var musica = "Rock";
}

console.log(musica); // Va a mostrar Pop

casa();

var musica = "Jazz"; //Ambito global


    Con las variables const no podemos sobre escribir, por lo tanto si declaramos la variable como const
    al principio, nos puede llegar a salir un error en el ambito global, si queremos mostrar la variable 
    sobreescrita en algun momento, ya que las variables constantes siempre van a ser igual y nunca cambian.
*/

/*****************************************************************************************************************/

/*** VARIABLES LET ***/

// Usamos estas variables cuando el valor asignado cambiara a lo largo del programa. Por ejemplo:

let contador = 0;

// Ademas, las usamos en todos los casos, salvo en las funciones de cierre, donde se usara var.


/*** VARIABLES CONST ***/

// Usamos estas variables cuando el valor primitivo no cambiara a lo largo del programa. Por ejemplo:

const PI = 3.1416812783;
const E = 2.16128371892;

// Ademas, cuando queremos proteger un tipo de dato compuesto, como, por ejemplo, objetos, arreglos o funciones.
const sumar = function(a, b){

} 

//sumar = "jorge"; // No seria posible sobreescribir.

// Y tambien, cuando queremos guardar una referencia a un elemento HTML, por ejemplo:
const section = document.querySelector('section');
section.textContent = "Hola";
console.log(section);




/********* ASINCRONIA **********/

/*
    Este concepto es importante tanto en el frontend como en el backend, ya que nos va a permitir ahorrarnos
    mucho trabajo, porque vamos a poder consumir informacion desde otras fuentes, y ademas nos va a permitir 
    realizar acciones como, por ejemplo, insersiones a bases de datos, lecturas, ediciones, eliminaciones, etc.
    Entonces, la asincronia nos permite establecer un sistema de resguardo ante posibles fallos o demoras en la
    interaccion con dispositivos de terceros. Si tenemos una aplicacion que tiene una serie de instrucciones, y 
    en el medio, alguna instruccion demora mucho,nos traba toda la aplicacion, entonces JS permite tomar recaudos 
    de estas situaciones.
    JS no es un lenguaje multi hilo (multi threading), sino que es un lenguaje de tipo Single Thread, en el cual
    hay un solo hilo de proceso, y todas las instrucciones se apilan en un unico hilo.

    Concurrencia: El trafico en JS tiene un nombre y es concurrencia, pero JS es un lenguaje no concurrente, ya que 
    tiene un sistema para evitar el enbotellamiento de ejecucion de instrucciones.
    Call Stack: Es la pila general de ejecuciones de instrucciones. Y como es una pila, esta funciona con la
    logica LIFO (Last In First Out).
    Call Back Queue: Es un espacio en donde se coloca la instruccion que demora el proceso. Esta funciona con la
    logica FIFO (First In First Out).
    
    Un codigo sincrono es aquel en el que todas las intrucciones se dan en el orden en el cual se establecieron.

    setTimeout: Es un tipo de funcion asincronica que recibe dos argumentos, una funcion y un timer que indica 
    dentro de cuanto tiempo se va a ejecutar la funcion, por lo tanto, lo que se ejecuta de forma asincronica es
    setTimeout en si, pero la funcion interna se va a ejecutar cuando se le indique. Esta funcion siempre es
    asincrona independientemente del timer asignado.
    Entonces, como JS sabe que setTimeout es una funcion asincronica, va a colocar a dicha ejecucion en la 
    Call Back Queue y volvera a la Call Stack, dado el ejemplo, luego de 3 segundos.

console.log("Instruccion 1");
console.log("Instruccion 2");

setTimeout(() => console.log("Instruccion 3"), 3000);

console.log("Instruccion 4");
console.log("Instruccion 5");

*/

/*****************************************************************************************************************/

/*
    A continuacion, tenemos un juego consiste en determinar en que orden se van a imprimir los console.log del
    codigo.
    En la pila de llamados no se puede acceder a una funcion, si la funcion anterior no esta resuelta, por lo tanto
    el llamado de dos(), dentro de uno() debe ejecutarse antes de mostrar por consola el Dos de uno(), aplicando 
    la logica LIFO.


console.log("Codigo sincrono");
console.log("Inicio");

function dos(){
    console.log("Dos");
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Dos")
}

uno();
console.log("Fin")

*/


/*
    Ahora, tenemos la version del codigo anterior pero de forma asincronica.
    Los valores de Uno y Dos entran a la cola de espera. Se ejecutan en orden Tres y Fin, y luego
    sale Uno, y por ultimo Dos.
*/

console.log("Codigo asincrono");
console.log("Inicio");

function dos(){
    setTimeout(function(){
        console.log("Dos");
    }, 1000)
}

function uno(){
    setTimeout(function(){
        console.log("Uno");
    }, 0);
    dos();
    console.log("Tres")
}

uno();
console.log("Fin")

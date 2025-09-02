/********* FUNCIONES DE ORDEN SUPERIOR **********/

/*

    Un cierre es una funcion que retorna otra funcion, y que para poder acceder al retorno de la funcion interna
    (o atrapada), es necesario referenciar a la funcion externa.

    En el siguiente ejemplo, la funcion dentro de la funcion "saludar", es la que espera el atributo nombre, la
    funcion de afuera, o sea "saludar", espera el saludo como parametro.


function saludar(saludo){
    return function(nombre){
        return `${saludo} ${nombre}`
    }
}

const hola = saludar("Hola")
const chau = saludar("Chau")
const che = saludar("Che")

console.log(hola("Santi"))
console.log(chau("Pablo"))
console.log(che("Lucas"))

*/

/*****************************************************************************************************************/

/***** El Dilema del Contador *****/

/* Se crea un algoritmo de cierre para evitar que la variable contador se resetee o sea accedida por otra funcion. 
    - En este caso el uso de var evita el hoisting. Mejora el codigo y la comunicacion.
*/

function incrementar(){
    var contador = 0;

    return function(){
        return contador = contador + 1;
    }
}

const add = incrementar();

function imprimir (){
    console.log(add());
}






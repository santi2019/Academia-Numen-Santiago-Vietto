/********* OBJETOS **********/

/*

    Los objetos son una coleccion de estructuras clave-valor que buscan representar un elemento de la realidad
    o la ficcion, como, por ejemplo, un auto, un producto, una persona, un personaje, etc.
    Los objetos se componen de lo que llamamos propiedades y metodos.
    - Propiedades: Se les asignan valores primitivos o compuestos.
    - Metodos: Se les asignan funciones. En pocas palabras los metodos son propiedades ejecutables.
    Estos dos son variables, al fin y al cabo, pero internas de un objeto.
*/

    const auto = {
        
        // Propiedades
        marca: "Peugeot",
        modelo: 206,
        color: "rojo",

        // Metodos
        arrancar: function(){
            return "arranca"
        },
        frenar: function(){
            return "frena"
        }
    }
/*
    Podemos acceder a los elementos de un array por medio de []. Pero tenemos 2 formas de acceder a los valores
    de las propiedades de un objeto:
    -> Notacion de punto (dotwalking): Si lo aplicamos en los metodos, devuelve la asignacion, por lo tanto, para
    ejecutar el metodo, se colocan los parentesis.
    console.log(auto)
    console.log(auto.color)
    console.log(auto.arrancar())

    -> Notacion de corchetes (bracket notation)
    auto[propiedad]                 // Acceso dinamico
    console.log(auto["color"])      // Acceso literal
    console.log(auto["arrancar"]()) // Acceso literal

    La diferencia entre estos dos metodos de acceso es que la notacion de puntos es mas directa, pero en la notacion
    de corchetes no necesitamos pasar necesariamente un valor estatico.  
*/

/*****************************************************************************************************************/

/*

    Ejercicio 1: Crear una funcion que agregue una propiedad y un valor a un objeto.

*/

    function agregarPropiedad(objeto, propiedad){
        objeto[propiedad] = "127km";
        console.log(objeto)
    }

    agregarPropiedad(auto, "Velocidad");


/*

    Ejercicio 2: Crear una funcion que elimine una propiedad y de un objeto.

*/

    function eliminarPropiedad(objeto, propiedad){
        delete objeto[propiedad]
        console.log(objeto) 
    }

    eliminarPropiedad(auto, "marca");

/*

    Ejercicio 3: Obtener los valores de un objeto por medio de un forin. Y preguntar si el obeto tiene la
    propiedad tal.

*/

    for (const propiedades in auto) {
        console.log(auto[propiedades])
    }

/*

    Ejercicio 4: Preguntar si el obeto tiene la propiedad marca.

*/


if(auto.hasOwnProperty("marca")){
    console.log("La pripiedad existe en el objeto")
} else {
    console.log("La pripiedad no existe en el objeto")
}





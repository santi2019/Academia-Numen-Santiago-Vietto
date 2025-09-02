/********* PROTOTIPOS Y HERENCIA **********/

/*  PROTOTIPOS

    Tipos de datos primitivos: Se accede al valor de manera directa. Tenemos 6 tipos:
        - string
        - number
        - boolean
        - null
        - undefined
        - symbol

    let contador = 0;
    console.log(contador);

    Para el caso de null, este figura como object por un bug en la creacion del lenguaje. Por lo tanto a veces
    puede ingresar como un tipo de dato object.


    Tipos de datos compuestos: Se accede a los valores por referencia. Solo tenemos un tipo:
        - object: {}, [], function()

    const objeto = {
        nombre: "Pepe"
    };
    console.log(objeto.nombre);

    Para el caso de function, ocurre lo mismo que null, es un objeto ejecutable, tiene la capacidad de ser llamada
    o invocada, de otro modo se ve como un objeto.
        - function() -> (){}

    let cadena = new String('hola mundo')
    let numero = new Number(32)

    const object = {}

    console.log(cadena);
    console.log(numero);
    console.log(object);

    Con reverse() podemos dar vuelta un array de numeros -> [1,2,3] = [3,2,1].
    Esto funciona con los arrays por que son datos mutables, pero no funciona con los strings por que son tipos de
    datos inmutables. En los strings no podemos eliminar valores de posiciones. 

    let numeros = "123"
    console.log(numeros.split("").reverse().join(""))

    Podemos crear un metodo casero para poder dar vuelta un string. Por lo tanto, insteramos una funcion nueva en
    el prototipo del string, la cual hace una funcion determinada. La funcion reverse que le añadimos a String, es
    artesanal y se añade al prototipo del dato nativo y se lo puede consumir.
    Tambien es posible crear un metodo artesanal para filtrar datos y lo aplicamos al prototipo del dato Array.

String.prototype.reverse = function(){
    // Programamos
}

const cadena = new String("hola");
console.log(cadena)

Array.prototype.filtrar = function(condicion){
    if(condicion()){

    }
}

const nombres = []
console.log(() => {})

    Entonces, los prototipos son el toolkit de un tipo de datos determinado, pero como son limitadas, podemos 
    fabricar los nuestros de acuerdo a nuestras necesidades.

*/

/***** Palabra reservada this *****/

/* 
    Es una palabra reservada muy importante. En otros lenguajes como Python se conoce como self.
    Se utiliza dentro de objetos para hacer referencia al scope interno de dicho objeto. De esta manera se pueden
    rastrear propiedades como si se encontraran en el ambito global. Entonces, this ancla la busqueda de una 
    variable al interior de ambito de un objeto.


let nombre = "Bienvenido al ambito global"

const objeto = {
    nombre: "Contexto del objeto",
    imprimir: function(){
        //console.log(nombre)
        //console.log(objeto.nombre)  
        console.log(this.nombre) 
    }
}

const objeto2 = {
    nombre: "Contexto del objeto 2",
    imprimir: objeto.imprimir
}

//objeto.imprimir() 
objeto2.imprimir()

// console.log(objeto.imprimir) -> Muestra toda la estructura de imprimir, por que no se llama a la ejecucion con ().


    En primera instancia, la funcion imprimir mostrara el valor del nombre que esta por fuera el objeto, ahora si 
    colocamos la referencia del objeto al parametro nombre, permitira que al ejecutarse la funcion, muestre el valor 
    del nombre interno.
    Lo anterior no es una buena practica, porque si el nombre del objeto cambia a otro, se rompen las referencias
    internas, por lo tanto las referencias deben ser independientes del nombre del objeto, y ahi es cuando se 
    utiliza this. Asi, la busqueda no queda en el ambito global sino que permanece en el ambito local. 

    Ahora, cuando desde objeto2 llamamos a la funcion imprimir de objeto, lo que ocurre es que viene una copia de 
    la estructura de la funcion imprimir de objeto, por lo tanto como se coloca dentro de objeto2, se va a mostrar
    el valor de nombre de objeto2.

    Entonces, aplicando el concepto del this al metodo reverse que creamos para dar vuelta los caracteres de un 
    string, el this hace referencia al ambito del string que estemos aplicando, o sea, cadena en este caso, pero
    puede ser cualquier otro.


String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

let cadena = "123"
let nombre = "Santi"

console.log(cadena.reverse())
console.log(nombre.reverse())


Array.prototype.filtrarMayoresATres = function(condicion){
    const newArray = [];

    for (const element of this){
        if(condicion(element)){
            newArray.push(element);
        }
    }
    
    return newArray;
}

const numeros = [1,2,3,4,5,6]

console.log(numeros.filtrarMayoresATres((num) => num > 3))

*/

/*****************************************************************************************************************/

/***** Funciones Constructoras  *****/

/*
    A traves de estas funciones podemos generar instancias de la plantilla, y cada instancia es un objeto nuevo.
    Es posible pasarle atributos a las funciones.
*/

function Pokemon(nombre, tipo, frase){
    this.nombre = nombre,
    this.tipo = tipo
    this.frase = function(){
        return frase
    }
}

const pikachu = new Pokemon("Pikachu", "Electrico", "Pika Pika")
const squirtle = new Pokemon("Squirtle", "Agua", "Vamo a calmarnos")
const charmander = new Pokemon("Charmander", "Fuego", "Char char charmander")
const bulbasaur = new Pokemon("Bulbasaur", "Planta/veneno", "dasjdahsdhashd")


console.log(pikachu)
console.log(squirtle)
console.log(charmander)
console.log(bulbasaur)

console.log(pikachu.frase())
console.log(squirtle.frase())
console.log(charmander.frase())
console.log(bulbasaur.frase())
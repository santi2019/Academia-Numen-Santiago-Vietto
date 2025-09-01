/********* FUNCIONES DE ORDEN SUPERIOR **********/

/*
    Una funcion de orden superior es una funcion que recibe otra funcion como argumento, la cual obtiene como
    resultado, normalmente, un booleano, lo que permite modificar las condiciones que pueda tener la funcion
    original.

    A modo de ejemplo, se crea la funcion saludar la cual va a retornar un saludo, pero necesita de un 
    usuario para funcionar. Ademas, tenemos otra funcion despedir, que retorna un saludo de despedida y que
    tambien necesita de un usuario.
    Ahora, creamos una funcion que pueda recibir un usuario y un tipo de saludo, y saludar a dicho usuario con 
    dicho saludo.
        - saludo -> Este parametro representa una funcion y podria ser cualquiera de las dos creadas anteriormente.


function saludar(usuario){
    return `Hola ${usuario}`
}

function despedir(usuario){
    return `Adios ${usuario}`
}

function crearSaludo(usuario, saludo){
    return saludo(usuario)
}

console.log(crearSaludo("Santi", saludar))

*/

/*****************************************************************************************************************/

/*

    Ejercicio 1: Programar una funcion que filtre elementos de un arreglo, en base a diferentes condiciones:
        - El argumento condicion es una funcion y su resultado es booleano.



const frutas = ["Mora", "Pera", "Banana", "Manzana"];

function filtrar(lista, condicion){
    const nuevaLista = [];

    for (const elemento of lista){
        if(condicion(elemento)){
            nuevaLista.push(elemento);
        };
    };

    return nuevaLista;
}

console.log(filtrar(frutas, elemento => elemento.length === 4))
console.log(filtrar(frutas, elemento => elemento.length > 4))
console.log(filtrar(frutas, elemento => elemento === "Mora" || elemento === "Banana"))

*/

/*****************************************************************************************************************/

/***** Funciones nativas de orden sueperior *****/

const frutas = ["Mora", "Pera", "Banana", "Manzana"];

/* Filter: Siempre retorna un array. */
const frutasFiltradas = frutas.filter(fruta => fruta.length === 4)   //Funcion nativa para filtrar.
console.log(frutasFiltradas)

// Las variables elemento o fruta son solo variables internas de la funcion, no podemos usarlas en otro lado.


/* 
   Find: Siempre retorna un solo elemento, o el primer elemento en caso de que varios coincidan con la condicion. 
   Es util utilizarlo para buscar elementos por atributos unicos como el ID, el mail o username.
*/
const frutaFiltrada = frutas.find(fruta => fruta.length === 4)   
console.log(frutaFiltrada)

/*
   forEach: Recorre un array y ejecuta cosas sobre cada elemento, pero devuelve undefined (no devuelve nada).
   Este tipo de funcion es un procedimiento.
*/
const recorrerFrutas = frutas.forEach(fruta => console.log(fruta)) 
console.log(recorrerFrutas)

/*
   map: Es un metodo o funcion que recorre una lista, copia el contenido del arreglo original pero lo devuelve con 
   los cambios aplicados.
*/
const frutasFeas = frutas.map(fruta => fruta + " fea")
console.log(frutasFeas)

/*
   reduce: Retorna un elemento el cual es la acumulacion de todos los elementos, tanto numeros como strings.
   El valor inicial del acumulador es una cadena de texto vacia.
*/
const totalFrutas = frutas.reduce((acumulador, fruta) => {return acumulador + " " + fruta}, "")
console.log(totalFrutas)

const listanumeros = [1,2,3,4,5,6,7]
const suma = listanumeros.reduce((acumulador, numero) => {return acumulador + numero}, 0)
console.log(suma)

/*****************************************************************************************************************/

/***** Funciones de conversion nativas de orden sueperior *****/

/* toString: Sirve para convertir un numero a un string, en base a un patron X. */
/* parseInt: Sirve para convertir un string en un numero, en base a un patron X. */
/* join: Sirve para convertir un arreglo en string, en base a un patron X. */
/* split: Sirve para convertir un string en un arreglo, en base a un patron X. */
/* Number(): Constructor que permite convertir un string o boolean en un numero. */
/* String(): Constructor que permite convertir un numero o boolean en un string. */
/* Boolean(): Constructor que permite convertir un string o numero en un boolean. */

/*****************************************************************************************************************/

/***** Funciones booleanas nativas de orden sueperior *****/

/* every: Devuelve un boolean, validando si todos los elementos de un array cumplen con la condicion. */
const unos = [1,1,1,1,1,1]
const sonIguales = unos.every(numero => numero === 1)
console.log(sonIguales)

/* some: Devuelve un boolean, validando si alguno de los elementos de un array cumple con la condicion. */
const dos = [1,2,1,1,1,1]
const hayUnDos = dos.some(numero => numero === 2)
console.log(hayUnDos) 

/*****************************************************************************************************************/

/***** Funciones de conversion nativas de orden sueperior *****/

/* 
   sort: Utiliza patrones de ordenamiento. Por defecto, ordena alfabeticamente y con respecto a los numeros, los
   ordena de menor a mayor, pero tomando como referencia el primer digito del numero.
   Para el caso de los numeros, para ordenarlos correctamente se compara el primero de la lista con el segundo, el
   segundo modificado con el tercero, y asi sucesivamente.
   - a - b: Ascendente -> Si el resultado es negativo entonces b es mayor que a, si es positivo a es mayor que b y 
     se cambian de lugar.
   - b - a: Descendente -> Si a > 0 es menor que b, si a < 0 b es mayor que b.
*/
const meses = ["Ene", "Dic", "Nov", "Jul", "Feb"]
const numeros = [1, 3, 20, 5, 1000, 4, 30]

const mesesOrdenados = meses.sort()
console.log(mesesOrdenados)

const numerosOrdenados = numeros.sort((a, b) => a - b)
console.log(numerosOrdenados)
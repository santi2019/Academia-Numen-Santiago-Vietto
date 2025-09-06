/********* DOCUMENT OBJECT MODEL - DOM **********/

/*
    Tomamos el documento HTML y lo modelamos como un objeto gigante. Entonces, el recorrido que se hace del 
    documento HTML, va a ser como si se estuvieran recorriendo arreglos u objetos, y anidando los atributos de las
    etiquetas como si fueran propiedades de objeto.
    El DOM es el arbol de HTML inscrustado en el navegador.
    El DOM es una API a la cual se le puede hacer modificaciones desde de la hoja HTML, o se le puede hacer
    acciones de modificacion.    
    Para comunicarnos con el DOM, primero debemos necesitamos encontrar el objeto del navegador, porque al fin y
    al cabo la consola y el DOM son propiedades del objeto navegador.
    El objeto del navegador se llama ventana o window, y podemos acceder a ella por que estamos conectados al 
    navegador por medio de la hoja HTML, y dentro de esta tenemos la instancia del archivo JS. Entonces tenemos
    acceso al objeto window por mas que no exista.
    console es una propiedad del objeto window pero a su vez es un objeto con metodos internos. Tenemos los siguientes:
        - log()
        - info()
        - warn()
        - error()

console.log(document)  // De esta forma vemos el DOM.
console.log(document.doctype) // Acceso a la etiqueta DOCTYPE.
console.log(document.documentElement) // Acceso a la etiqueta HTML sin incluir la etiqueta DOCTYPE.
console.log(document.head) // Acceso al head del documento HTML.
console.log(document.body) // Acceso al body del documento HTML.

*/

/*****************************************************************************************************************/

/*****  Metodos consultores de selectores *****/

/*** Especificos ***/

/*
    - getElementByID: Permite buscar un solo elemento por el ID.
    - getElementsByTagName: Permite consultar una coleccion de elementos que coincidan con el nombre de una etiqueta.
    - getElementsByClassName: Permite consultar una coleccion de elementos que coincidan con el nombre de clase.
    - getElementsByName: Permite consultar una coleccion de elementos que coincidan con la propiedad nombre (no el
      nombre del tipo de etiqueta).

console.log(document.getElementById("perro"))
console.log(document.getElementsByTagName("section"))

*/

/*** Universales ***/

/*
    - querySelector: Permite consultar un elemento, por etiqueta, clase, ID y por anidaciones. Normalmente se usa 
      para un elemento que esta solo o para buscar por ID unico.
    - querySelectorAll: Permite consultar una coleccion de elementos.
  
console.log(document.querySelector("#perro"))
console.log(document.querySelector('input[type="email"]'))

*/

/*****************************************************************************************************************/

/*****  Abreviaturas *****/

const c = console;
const d = document;

// c.log(d.querySelector())


/*
    Aca se introdce la libreria jQuery, una libreria cross-browser, que crea metodos y propiedades para manejarnos
    con el DOM de forma mas eficiente, en lugar de usar metodos y abreviaciones que provee JS. Todas las cosas que
    estan relacionadas al DOM, estan mejoradas en terminos de sintaxis, por ejemplo:
    $ -> document
*/

/*
    Cuando queremos guardar un elemento del DOM creamos una variable con un signo $ delante.
*/

const $a = d.querySelector("a");

$a.target = "_blank";
$a.textContent = "Ir a Google";
$a.innerHTML = `
    <p> Me gusta el <b>pan</b> con <i>queso</i>.</p>
    `

/*****************************************************************************************************************/

/***** Fragmento *****/

/*
    Lo siguiente es un ejemplo de insersion de objetos de un array en el DOM de un archivo HTML. Es decir, es la 
    generacion de elementos HTML con datos dinamicos, sin interaccion del usuario.
    El procedimiento realizado no es una buena practica ya que si tenemos 3000 elementos para crear, se le va a 
    pegar 3000 veces al DOM. Entonces, para evitar esto, se utiliza un fragmento el cual es una especie de array
    que colecciona todas las inserciones, y cuando termina el bucle, se inserta una unica vez con todos los elementos
    coleccionables.

const pokemons = [];
const $cards = document.querySelector(".cards");

pokemons.forEach(pokemon => {   //pokemon -> {} -> pokemon.img
    const $div = d.createComment('div');  // Crea un elemento.
    $div.className = "card";
    $div.style.backgroundColor = pokemon.bgColor;

    $div.innerHTML = `
        <img src=${pokemon.img} alt=${pokemon.title}>
        <h3>${pokemon.name}</h3>
        <p>${pokemon.type}</p>
    `

    $cards.appendChild($div);  // Inserta un elemento.
})

    A continuacion tenemos la version con fragment: 

*/

const pokemons = [];
const $cards = document.querySelector(".cards");
const $fragment = d.createDocumentFragment();

pokemons.forEach(pokemon => {   
    const $div = d.createComment('div');  
    $div.className = "card";
    $div.style.backgroundColor = pokemon.bgColor;

    $div.innerHTML = `
        <img src=${pokemon.img} alt=${pokemon.title}>
        <h3>${pokemon.name}</h3>
        <p>${pokemon.type}</p>
    `

    $fragment.appendChild($div);  
})

$cards.appendChild($fragment);










/*
Librerias de componentes:

    - Flowbite
    - React Drawer
    - Modal Bulma 
    - Drawer Chakra

*/

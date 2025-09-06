/********* EVENTOS **********/

/*
    onclick: Este metodo se dispara cuando hacemos click izquierdo. Es un atributo para HTML pero para JS es un metodo 
    sobre el cual se puede ingresar a el mismo, desde cualquier elemento HTML, sea interactivo o no. Pero no se sugiere 
    aplicarlo a elementos no interactivos porque los interactivos suelen tener alguna forma de acceder a ellos via 
    teclado, por ende si se hace interactivo algo que no lo es, el usuario no sabra que es interactivo, porque no 
    tiene nada visual que lo identifique.
    Para evitar que el alert se ejecute algo por el hoisting, le aplicamos una funcion y luego una variable para
    que solo onclick la pueda ejecutar. Por ende, no hay que dejar en onclick una funcion que se esta llamando, sino
    colocar algo que no puede ser detectado por el programa pero si por el onclick.


const d = document;  // DOM
const w = window;  // Navegador
const c = console;  // Consola

const $button = d.querySelector('button');

const alerta = () => alert('Hola desde una alerta !');

$button.onclick = alerta;


    Otros eventos son:

    - contextmenu: Se dispara cuando hacemos click derecho sobre algo.
    - onclose: Este metodo se dispara cuando cerramos algo, por ejemplo, cuando le damos cruz a un modal.
    - onmouseover: Este metodo se dispara cuando pasamos el mouse por arriba de algo (un efecto similar al hover).
    - onmouseout: Igual que onmouseover pero cuando sacamos el mouse de arriba del elemento.
    - onscroll: Se dispara cuando hacemos scroll en el sitio.
    - onresize: Se dispara cuando detecta que se redimensiona el ancho del navegador.
    - keydown: Este metodo se dispara cuando se aprieta una tecla del teclado.
    - DOMContentLoaded: Se dispara cuando se recarga el navegador.
    - onsubmit: Este metodo se dispara cuando se clickea el elemento de submit de un formulario.
    - onchange: Este metodo se dispara cuando se detecta un cambio en el value de un formulario.

    Hay eventos que se diparan cuando uno interactua con un elemento HTML, pero hay otros que se disparan cuando
    ocurre una situacion. Por ejemplo, en el caso de onscroll, se interactua con la barra de scroll y se
    ejectura constantemente, lo mismo ocurre con el onresize al dispararse constantemente cuando se agranda o 
    reduce la pantalla, tenemos tambien el caso de DOMContentLoaded cuando se aprieta F5, etc.
    Entonces, dados estos contextos, existe un tipo de metodo que permite detectar cosas que pasan, no solamente
    con el hardware del usuario, sino tambien que pueda detectar cosas que pasan en el documento, la consola, o en 
    el navegador:
    - addEventListener: Se le pasa por parametro d, w, o c, y se indica que tipo de evento se va a disparar y por
      otro lado se indica la funcion que queremos que se dispare en la interaccion.
      addEventListener(event, function)

const d = document;  
const w = window;  
const c = console;  

const $button = d.querySelector('button');

const alerta = (saludo) => alert(`${saludo} desde una alerta !`);

$button.addEventListener("click", () => alerta("hola"));

d.addEventListener("DOMContentLoaded", () => c.log("Me gusta el pancito"));


w.addEventListener("click", () => c.log("disparar"))
w.addEventListener("contextmenu", () => c.log("ampliar mira"))

w.addEventListener("keydown", (event) => {
    switch (event.key){
        case "ArrowUp":
            c.log("Mover arriba");
            break;
        case "ArrowDown":
            c.log("Mover abajo");
            break;
        case "ArrowLeft":
            c.log("Mover izquierda");
            break;
        case "ArrowRight":
            c.log("Mover derecha");
            break;
        case " ":
            c.log("Plantando C4");
            setTimeout(() => {
                c.log("Bomb has been planted !")
            }, 2000);
            break;
        default:
            return;
    }
});

*/

// https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/ 

/*****************************************************************************************************************/

/*
    Ahora se realiza un ejemplo, de como poder detectar el elemento desde el cual se esta disparando un evento.
    Entonces, como primera medida nos comunicamos con el formulario.
    Una vez sobre el formulario, lo que queremos es poder ejecutar sobre este una funcion de sumbit, las cuales 
    se llaman handle seguido de la palabra que identifique la accion.
    El tipo de evento en el addEventListener es de tipo onsumbit ya que es un parametro de los elementos form de
    HTML, el cual detecta cuando se hace click en su button de submit.
    El objeto event tiene muchos metodos cuando lo invocamos, y uno de esos son la propiedad key, que vimos 
    anteriormente, tambien esta preventDefault el cual es una funcion y siempre se coloca como primera 
    instruccion en la funcion de submit de un formulario.
    Ahora, lo que queremos es consumir los valores de los inputs del formulario.
    En JS es recomendable usar las comillas simples ya que las comillas dobles se usan para agregar HTML. 

const d = document;  
const w = window;  
const c = console;  

const $form = d.querySelector('form');
const $username = d.querySelector('input[type="text"]');
const $email = d.querySelector('input[type="email"]');

const handleSumbit = (event) => {
    event.preventDefault();

    c.log({
        username: $username.value,
        email: $email.value
    })
}

$form.addEventListener("submit", handleSumbit);

*/

/*****************************************************************************************************************/

/*
    Existe otra propiedad que permite detectar un elemento sin tener acceso, llamada target.
    Suponiendo que tenemos una estructura como la del archivo index HTML, y lo que queremos es que se imprima por
    consola el elemento sobre el cual se hizo click, detectando justamente sobre el cual se esta haciendo click.
    Entonces, la propiedad target sirve para determinar cual fue el elemento objetivo del evento, en este caso,
    el click.

const d = document;  
const w = window;  
const c = console;  

d.addEventListener("click", (event) => {
    c.log("Hiciste click en", event.target);

    if(event.target.matches(".una-seccion a")){
        alert("A donde crees que vas wachin?");
        event.preventDefault();
    }
});

*/
import React from "react";

let texto = "Esto es un texto";
let objeto = {
  nombre: "santi"
}
const lista = [1,2,3,4,5];

const variable_estilos ={
  color: "red",
  backgroundColor: "green"
}

let toggle = true;

export default function Home() {
  return (
    /*
      Lo que se coloca aca adentro, entra en el modulo de React y ejecuta React.createElement("p"), y si se añade contenido
      se colocan mas argumentos, ("p", {}, "hola"). En el espacio de llaves se listan los atributos como id, className, etc.
      Las expresiones JSX deben tener un elemento primario, esto significa que, dentro del elemento retorno (return), no 
      es posible retornar dos valores a la vez. Es necesario colocar una estructura que permita retornar varios elementos a
      la vez, como por ejemplo un div general que contenga los dos p. Ahora tendriamos algo asi como React.createElement("div", null,p p).
      Entonces los createElement de ambos p son el argumento del createElement padre del div, y asi el retorno retorna una
      sola funcion.
      Entonces, siempre tiene que haber un contenedor principal o general para poder retornar varios elmentos a la vez.
      Generalmente se suele usar la siguiente estructura: <> </>. Esta nos permite coleccionar todas las iteraciones que se 
      hacen al DOM, y despues insertar un paquete entero de forma directa. Entonces, esto es un fragmento. Originalmente,
      el fragmento en react era:
      import {Fragment} from 'React'

      return(
        <Fragment>

        </Fragment>
      );

      Pero cambio, y se reemplazo por <> el cual es basicamente un createFragment:

      <>
        <p>Hola</p>
        <p>Hola</p>
      </>
    */



    /***** Diferencias entre JSX y HTML: *****/

    /*
      Cuando creamos una etiqueta self-closign, como por ejemplo una img, cuando se elimina la barra /, sale un erro indicando
      que dicha barra es necesaria. Como esto esta basado en XML, todos los self-closing llevan la barra /, pero en HTML no
      obliga a tenerla, funciona igual ya sea que este o no.
      Otra diferencia esta relacionada con algunos atributos. Cuando creamos un elemento p, la propiedad para poner un nombre en 
      DOM de JS se llama className, por otro lado la palabra class es una palabra reservada en JS para las clases, a diferencia
      de HTML en donde para poner un nombre al elemento se utiliza class. 
      Por otro lado en el caso de los labels, estos tienen un atributo que es el for, donde se coloca el ID del input con el que 
      queremos conectar, pero no se puede usar for, como si se puede en HTML, porque es una palabra reservada, por lo que se lo 
      reemplaza por htmlFor.

      <>
        <img src="asasa" alt="asas" />

        <p className="Pepe"></p>

        <label>Nombre</label>
      </>
    */

    /***** Ventajas de JSX *****/

    /*
      Si creamos una variable que posea un texto y queremos insertarlo, por ejemplo, en una etiqueta h1, en JS puro lo que se 
      hacia era conectarnos con la etiqueta y despues entrar a su textContent y colocarle la variable.
      const $h1 = document.querySelector('h1');
      $h1.textContent = texto
      En JSX se coloca directamente dentro de la etiqueta, pero usando llaves ya que la construccion del componente seria:
      React.createElement("h1", {}, `${texto}`)
      Lo mismo seria con un objeto.
      <>
        <h1>{texto}</h1>
        <h1>{objeto.nombre}</h1>
      </>

      Ahora, si queremos mapear el contenido de un array, en JS crudo seria:
      const $ul = document.querySelector('ul');
      const $fragment = document.createDocumentFragment();
      lista.forEach(elemento => {
        const $li = document.querySelector('li'); 
        $li.textContent = elemento;
        $fragment.appendChild($li);
      });
      $ul.appendChild($fragment);
      En react es mas facil, ya que se evita la reinsercion en el fragmento, entonces simplemente se mapea la lista, y
      por cada elemento se crea un item de lista con el contenido adentro. Pero cuando se generan elementos en un 
      mapeo, varios pueden tener el mismo valor, pero hay que identificarlos como elementos distintos, entonces hay un
      warning que nos pide que usemos algun identificador para cada elemento. Si tuvieramos objetos podemos usar el
      parametro ID, pero como este no es el caso, usamos un argumento de los mapeos que se llama index, que similar al
      de los bucles for, arranca desde 0, y le coloca un indice a cada elemento que se genera.
      index = i

      <>
        <ul>
          {
            lista.map((elemento, i) => <li key={i}>{elemento}</li>)
          }
        </ul>
            
      </>
    */

    /***** Diferentes formas de poner CSS *****/
    
    /*
      1. Atributo style: A diferencia de JS puro, el atributo style se puede usar ya que colocamos logica entre llaves,
         y dentro otras llaves para colocar el objeto CSS en donde las propiedades van a estar en formato camel-case.
         Podemos colocar directamente el estilo, o usar una variable para referenciarlo. Queda mas limpio, no es redundante
         y ademas es posible trasladarlo a otra hoja:
      import {variable_estilos} from "@/components/estilos"

      <>
        <p style={estilos}>Hola</p>    
      </>


      2. La etiqueta style se puede colocar dentro del fragmento, se le coloca un atributo llamado JSX, se abren llaves
         porque se va a colocar codigo JS, se abren comillas inclinadas por ser tipo de escritura CSS, y se escriben las 
         propiedades. Lo bueno es que queda empaquetado en la misma hoja en la que se trabaja, y lo malo es que no se
         puede exportar a otras hojas. Pero tambien es posible colocar variables y construir logica dentro del CSS.

      <>
        <p>lorem ipsum dolor sir amet.</p>

        <style jsx>{`
          p{
            color: ${toggle ? "red" : "yellow"};
            background-color: green;
          }
        `}</style>
      </>


      3. La ultima forma de usar CSS es utilizando modulos. Las hojas de modulos se las usa cuando se busca aplicar
         a una pagina en particular, pero podemos tener una hoja de CSS para cada pagina.
         En estos archivos de CSS si o si se debe trabajar con clases, porque son la unica cosa que entienden los
         modulos. Al importar el modulo, se le puede poner un nombre cualquiera independientemente del nombre del 
         archivo CSS.
      import estilos from "@/styles/Home.module.css"

      <>
        <p className={estilos.parrafo}>lorem ipsum dolor sir amet.</p>
      </>
    */
    <>

    </>
  );
}



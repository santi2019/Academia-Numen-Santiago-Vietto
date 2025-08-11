/********* FUNCIONES PARTE 2 **********/

/*

    Funciones declaradas: Funcion independiente donde nosotros declaramos tanto las instrucciones, como el retorno,
    y los parametros. A continuacion, tenemos un ejemplo de una funcion que no esta relacionada con una variable, 
    objeto o nada en particular, solo es una funcion independiente:
    function sumar(a, b){
        return a + b;
    }
   Nosotros podemos ejecutar las funciones declaradas, independientemente de cualquier otra estructura del sistema.
   Sin embargo, esta estructura tiene una peculiaridad, que es diferente a como funciona cuando una funcion aparece
   dentro o relacionada con otra estructura.
   
   Elevacion o hoisting: Durante el proceso de compilacion, el sistema detecta la existencia de una funcion. 
   JavaScript, compila y luego ejecuta, pero el interprete revisa primero la estructura de la hoja, por lo que al 
   detectar que existe la funcion en algun lugar del programa, a la cual se la llama, por ejemplo, antes de su propia 
   declaracion, lo que hace es elevar la funcion a un lugar que permita ser ejecutada. Entonces, de alguna manera, en 
   el momento en el que la funcion se ejecuta, se eleva la funcion a una posicion que le permita a ese llamado, acceder
   a ella y por lo tanto, ejecutarla. Se presenta, por ejemplo, en estos casos, donde a pesar de que el llamado esta 
   antes de la funcion, se ejecuta igualmente:

   console.log(sumar(2, 2));

   function sumar(a, b){
        return a + b;
    }

    Entonces, la elevacion es el proceso por el cual una funcion o sentencia se eleva por sobre su invocacion o 
    lectura.

    Orden de declaraciones en JavaScript: El orden de declaracion es el siguiente:
    - 1ro -> Importaciones de modulos.
    - 2do -> Variables globales.
    - 3ro -> Declaracion de funciones.
    - 4to -> Llamado de funciones.

    Funcion expresada: Es una funcion que va a ser parte de una funcion mayor.
    - Sentencia o exprecion: En JavaScript, es algo compuesto por lo que llamamos, el lado izquierdo y derecho de 
      la expresion. El siguiente ejemplo es una sentencia:  
      let a = 2
      - a -> lefthand side.
      - 2 -> righthand side.
      - = -> Operador de asignacion.
    Por lo tanto, deseamos colocar una funcion como parte de una sentencia. 
    Si intentamos visualizar, en este caso, la variable "a", antes de su declaracion, nos saldra un error de acceso
    porque aun a no existe, un error TDZ. Pero el error es de la variable en si, por lo que aun teniendo un simple
    valor asignado o una funcion, si se intenta acceder previo a la existencia, va a tirar un error. Por lo tanto,
    dado la estructura de la variable, podemos llamar a una funcion dentro de ella, pero al momento de llamar a la
    variable, debemos hacerlo despues de su delcaracion, por ejemplo:
    
    let sumar = function(a, b){
        return a + b;
    }
    
    console.log(sumar(2, 2))

    Funciones anonimas: Siguiendo con el ejemplo anterior, las funciones anonimas son simplemente aquellas que no
    tienen nombre.

    Funciones flecha (arrow): Se introdujeron en el año 2015 (ES6). Estas son similres a las funciones expresadas
    pero mas elegantes. Por ejemplo:

*/

    let restar1 = (a, b) => {
        return a - b;
    };
    
    console.log(restar1(6, 3));

    const restar2 = (a, b) => a - b; // Esto se conoce como retorno implicito.

    console.log(restar2(2, 2))

    const restar3 = a => a - 4; 
    
    console.log(restar3(5))

/*

    Estas son similares a las funciones lambda de python, que permiten tener una funcion en una sola linea de 
    codigo.

*/
 




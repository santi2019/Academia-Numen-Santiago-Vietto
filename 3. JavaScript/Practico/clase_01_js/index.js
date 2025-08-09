/* 
    COMENTARIO MULTILINEA

*/

// COMENTARIO DE UNA SOLA LINEA

/*****************************************************************************************************************/

/****** CONCEPTOS *****/

/*
    Algoritmo: Es un set de instrucciones que se ejecutan en una secuencia determinada. Esa secuencia puede ser
    lineal (secuencial), o condicional.
*/

/*
    Depurar: Basicamente es revisar un espacio de memeoria de una computadora o un valor, e imprimirlo en alguna 
    instancia. Tenemos un comando para depurar informacion:
    - console.log(): En otros lenguajes suele llamarse print().
*/

/* 
    Variables: Tenemos los siguientes tipos de declaradciones de variables, segun la necesidad:
    - var: Definicion generica de variable.
    - let: Siginifica permitir, y es para valores cambiantes, es decir, permite que las variables cambien.
    - const: Para definir variables fijas o constantes.
    Necesitamos poner nombres de variables aislados que no generen confucion con sus valores.
    - var uno = 1 (mal)
    - var numero = 1 (bien)
*/

var numero = 1

console.log(2 + numero)

/*****************************************************************************************************************/

/****** TIPO DE DATOS *****/

/*
    Primitivos: Tipos de datos en los que se puede acceder al valor directamente. Tenemos los siguientes:
    - Number: Numeros (enteros y flotantes, int/float no se distinguen).
    - String: Cadena de texto.
    - Boolean: Booleano, proviene del algebra de boole o matematica discreta, en donde basicamente todos los 
      resultados de todas las operaciones son verdadero o falso.
    - NaN: Not a Number.
    - null: Es una inexistencia manualmente colocada.
    - undefined: Es la inexistencia de valor por defecto de JavaScript.
*/

32 //number
"hola", "32" //string
true, false //booleans

/*
    Compuestos: Tipos de datos en los que se accede al valor por referencia.

*/ 

/*****************************************************************************************************************/

/***** OPERADORES *****/

/*
    Operadores aritmeticos: Operadores cuyos resultados operativos son un number. Tenemos los siguientes:
    - Suma: +
    - Resta: -
    - Multiplicacion: *
    - Division: /
    - Modulo: % (resto de division)
    - Incremento: ++
    - Decremento: --
*/

/*
    Operadores de comparacion: Operadores cuyos resultados operativos son un boolean. Tenemos los siguientes:
    - Mayor que: >
    - Menor que: <
    - Mayor o igual que: >=
    - Menor o igual que: <=
    - Igualdad estricta: ===
    - Igualdad no estricta: ==
    - Desigualdad estricta: !==
    - Desigualdad no estricta: !=

    Estricta: Compara valor y tipo.
    No estricta: Solo compara valor.
*/

/*
    Operadores logicos: Operadores cuyos resultados operativos son un boolean, y oprtan con dos
    expresiones compuestas. Tenemos los siguientes:
    - AND, Y: && (Para que sea true, ambas partes deben ser verdaderas, de lo contrario, si una 
      parte, o ambas son falsas, entonces el resultado sera false).
    - OR, O: || (Para que sea true, ambas partes deben ser verdaderas, o alguna parte debe ser
      verdadera, pero si ambas son falsas, entonces el resultado sera false).
    - NOT, Negacion: ! (Niega expresiones)
*/

console.log(3>2 && 5>4)

console.log(3<2 || 5>4) 

console.log(!(3>=2 && 5>4))
/*****************************************************************************************************************/

/***** COERCION DE TIPOS DE DATOS *****/

/*
    Concatenacion: Proceso por el cual la suma se transforma en una ligadura de cadenas. Entonces solo ocurre
    con la suma.
*/
console.log(4 + "hola" + "pepe")

/*
    Coercion: Es un proceso por el cual JavaScript obliga a un tipo de dato a transformarse a otro para poder
    concretar una operacion. En el siguiente ejemplo, el dato que no pertenece al tipo de operacion, en este caso
    la cadena, es forzado a convertirse en un numero y asi poder operar. 
    En el caso de el valor dentro de la cadena, no es un valor numerico, el resultado es un NaN, ya que es un
    numero no representable.
*/
console.log(4 - "3")

console.log(4 - "hola")


/* Ttypeof: Permite identificar de que tipo es el valor o variable. */
console.log(typeof NaN)
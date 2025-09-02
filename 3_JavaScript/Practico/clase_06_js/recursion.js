/********* RECURSION **********/

/*
    La recursion consiste en una funcion que se llama asi misma, una y otra vez, hasta que una condicion deja de
    cumplirse. Para ello, el parametro recibe modificaciones en cada llamado. Por ejemplo:
        - Parametro original -> numero
        - Parametro en el llamado interno -> numero - 1
    La recursion es 3 veces mas elenta que un bucle, pero es mas elegante y mas flexible.
    A modo de ejemplo, se va a fabricar una funcion recursiva que genere una cuenta regresiva. Va a mostrar un
    numero, se llama a si misma para disminuir el numero y mostrarlo nuevamente.
    Las funciones tienen un limite de ejecucion, a diferencia de los bucles. Pero en este caso, se la limita para
    los numeros negativos.

function cuentaRegresiva(numero){
    console.log(numero);

    if(numero>0){
        cuentaRegresiva(numero - 1);
    }
}

cuentaRegresiva(3);

*/

/*****************************************************************************************************************/

/***** Secuencia de Fibonacci *****/

/*
    Es la formula matematica que nos permite explicar y generar la estructura de todos los espirales del universo.
    Las areas de cada parte de un espiral son siempre la suma de las dos anteriores.
    f(n) = f(n - 1) + f(n - 2) donde n >= 2.
    0 1 1 2 3 5 8 13 21 34

function f(n){
    
    if(n<2){
        return n;
    }

    return f(n-1) + f(n-2);
}

*/

const f = n => {
    if(n < 2) return n;

    return f(n - 1) + f(n - 2);
}

console.log(f(0)) // 0
console.log(f(1)) // 1
console.log(f(2)) // f(2 - 1) + f(2 - 2) = 1 + 0 = 1
console.log(f(3)) // f(3 - 1) + f(3 - 2) = f(2 - 1) + f(2 - 2) + 1 = 1 + 0 + 1 = 2
console.log(f(4)) // f(4 - 1) + f(4 - 2) = (f(3 - 1) + f(3 - 2) + f(2 - 1) + f(2 - 2)) = f(2 - 1) + f(2 - 2) + 1 + 1 + 0 = 1 + 0 + 1 + 1 + 0 = 3





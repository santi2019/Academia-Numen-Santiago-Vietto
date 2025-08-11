/*

¿Cuál crees que será el resultado de la ejecución de estas operaciones? Piensa primero cual será el resultado y escribelo. 
Luego, prueba ver la respuesta ejecuta las operaciones.

*/


console.log(6 / "3");           // 2 ("3" se convierte a entero)
console.log("2" * "3");         // 6 (Ambos strings se convierten a enteros)
console.log(4 + 5 + "px");      // 5 + 5 = 9 -> 9 + "px" = "9px"
console.log("$" + 4 + 5);       // "$" + 4 = "$4" -> "$4" + 5 = "$45"
console.log("4" - 2);           // 2 ("4" se convierte a entero)
console.log("4px" - 2);         // NaN - 2 = NaN ("4px" no se puede convertir a entero)
console.log(7 / 0);             // Infinity
console.log(parseInt("09"));    // 9
console.log([3] + [3] - [10]);  // [3] + [3] -> "3" + "3" = "33" -> "33" - [10] -> 33 - 10 = 23
console.log(3 > 2 > 1);         // 3 > 2 = true = 1 -> 1 > 1 = false
console.log([] == ![]);         // 0 == 0 = true (Un arreglo vacio es cero, y un arreglo vacio y negado es false, o sea, cero)
console.log(12 + "");           // "12"
console.log("15" * 2);          // 30 ("15" se convierte a entero)
console.log("15" - "11");       // 4 (Ambos strings se convierten a enteros)
console.log(undefined + 6);     // undefined = NaN -> NaN + 6 = NaN
console.log("Hello" + null);    // "hellonull"
console.log(null + 25);         // null = 0 -> 0 + 25 = 25
console.log(true + true);       // true = 1 -> 1 + 1 = 2
console.log(false + 10);        // false = 0 -> 0 + 10 = 10
console.log(5 && 2);            // 2 (En &&, si ambos son verdaderos, devuelve el utlimo) 
console.log(2 && 5);            // 5 (En &&, si ambos son verdaderos, devuelve el utlimo) 
console.log(5 || 0);            // 5 (En ||, devuelve el que es verdadero, y 0 = false) 
console.log(0 || 5);            // 5 (En ||, devuelve el que es verdadero, y 0 = false) 
console.log(true && false);     // false (Ambos no son verdaderos)
console.log(false || !false);   // true (Uno de los dos es verdadero, !false -> true)
console.log(!2);                // 2 = true -> !true = false (Un valor negado es false)
console.log("texto" || 0);      // texto (En ||, devuelve el que es verdadero, y 0 = false) 
console.log(2 || "prueba");     // 2 (En ||, si ambos son verdaderos, devuelve el primero) 
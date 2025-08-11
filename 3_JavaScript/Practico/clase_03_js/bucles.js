/********* BUCLES/CICLOS **********/

/*
    Los bucles son estructuras de control de flujo que permiten ejecutar repeticiones de instrucciones hasta que
    una condicion deja de cumplirse. Tenemos los siguientes tipos:
    - while (mientras): Es la estructura mas basica o nativa que tiene un lenguaje. Lo utilizamos para todo 
      aquello que no podemos usar con otro bucle, ya ue este tipo de bucle puede hacer todo, pero requiere de 
      mucho codigo de forma escrita, a diferencia de otros bucles que ya poseen una estructura prefabricada en la
      que simplemente se debe agregar cosas para lograr el objetivo. 
    - do while (hacer mientras)
    - for (para)
*/



/***** WHILE *****/

/* Ejecuta las instrucciones que posee dentro hasta que la condicion corta la ejecucion.

    while (condicion){
        // Instrucciones/sentencias
    }

var contador = 0;

while (contador < 10){
    console.log(contador + " while")
    contador++;             //Si no lo colocamos es un bucle infinito.
    // contador = contador  + 1 (pero no es igual )
}

*/

/*****************************************************************************************************************/

/***** DO WHILE *****/

/* Ejecuta las instrucciones que posee dentro y luego chequea la condicion.

    do{
        // Instrucciones/sentencias
    }while (condicion)


   En el siguiente ejemplo seguimos usando el contador del ejemplo del while, por lo tanto, el contador entrara
   como valor 10 al bucle do while, dado a los incrementos del ciclo anterior.

do{
    console.log(contador + " do while")
    contador++;             
}while (contador < 10)

*/

/*****************************************************************************************************************/

/***** FOR *****/

/*
   Permite hacer lo mismo que el do while pero integra una variable contador, la condicion y un incremento.

    for (variable; condicion; contador) {
        
    }

for (var contador = 0; contador < 10; contador++) {
        console.log(contador);
}

*/

/*****************************************************************************************************************/

/***** FOR EACH *****/

/*
   Permite recorrer colecciones

    var numeros = [1, 2, 3, 4, 5]

   numeros.forEach(numero => console.log(numero))

*/

/*****************************************************************************************************************/

/*

    Caso practico: Pablo se encuentra en medio de un apocalipsis zombie. Intentando refugiarse encuentra un hospital
    abandonado. Sin pensarlo 2 veces, decide entrar. El hospital no tiene luz pero, afortunadamente, Pablo posee una
    linterna con suficiente bateria.
    Al girar un pasillo encuentra una habitacion que podria tal vez contener comida. Pero tambien sabe que dentro
    de dicha habitacion podrian haber zombies.
    Duda un segundo si entrar o no, pero la pancita le cruje, asi que decide abrir la puerta. Al entrar se da con 10
    zombies cominedo un cadaver. Sin embargo, esto no asusta del todo a Pablo ya que tiene en el bolsillo una pistola
    con N balas. Tambien sabe que posee el cheet para poder matar un zombie de un tiro en la cabeza, aunque dicho cheet
    no le permite matar 2 zombies con la misma bala.

    Se debe programar una funcion que represente esta circunstancia de tal modo que, si la cantidad de balas alcanza o 
    sobra para matar a los zombies, arroja un mensaje de "mision cumplida". Caso contrario, informa "mision fallida". 

    balas = N
    zombies = 10

*/

var balas = Math.round(Math.random() * 20);     // De esta forma hay 10 posibilidades de sobrevivir y 10 de morir. 

for (var zombies = 10; zombies > 0; zombies--){
    balas --;
}

if (balas > -1){
    console.log("Mision cumplida")
} else{
    console.log("Mision fallida")
}



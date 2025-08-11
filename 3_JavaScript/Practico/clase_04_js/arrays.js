/********* ARREGLOS **********/

/*
    Los arreglos son un tipo de coleccion con una estructura particilar.
    En Python se suele seprar este tipo de colecciones en 2 subtipos:
    - Listas
    - Arreglos (arrays)
    Pero JavaScript no hace diferencia directa de ambos subtipos. Sin embargo, es posible especificar cada una
    pudiendo fabricarlos.

    Listas: Es una coleccion que puede arrancar vacia y se la va llenando conforme avanza el programa.
    Arreglo: Arranca con un tamaño especifico, el cual no cambia a lo largo del programa, pero al igual que con
    las listas, es posible modificar sus elementos internos. Cada elemento del arreglo posee un indice de cada
    posicion. Ademas, la longitud del arreglo coincide con la posicion siguiente a la ultima del arreglo.

    Para JavaScript, estructuralmente no hay diferencia entre ambos conceptos, inclusive no se provee dos 
    estructuras diferentes. De forma analoga, podemos tratar un arreglo como una estanteria de libros.
    
    Estanteria = [Libro1, Libro2, Libro3, Libro4, Libro5]
                    0       1       2       3       4

    console.log(Estanteria) // Muestra toda la coleccion.
    console.log(Estanteria[2]) // Muestra el Libro3.

    Estas estructuras nos sirven para:
    - Podemos coleccionar varios valores sin necesidad de crear una variable para cada uno.
    - Nos permite ordenar la memoria, ya que al crear diferentes variables, estas se almacenan en lugares 
      aleatorios de la memoria, pero utilizando un arreglo, cada elmento que se crea, se va a almacenar de forma
      lineal, ocupando una misma fila en la memoria y optimizando su uso en terminos de orden de almacenamiento
      de los datos.
    - Al encontrarnos dentro de una coleccion lineal marcada por indices, podemos recorrer la coleccion usando
      ciclos.
    - Estas estructuras son claves para desarrollar colecciones en bases de datos no relaciones.

*/

/*****************************************************************************************************************/

/*

    Ejercicio 1: Basado en la informacion anterior, agregar un nuevo alumno al final del arreglo.

    const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

    estudiantes[estudiantes.length] = "Patricia"
    estudiantes[estudiantes.length] = "Santi"
    estudiantes[estudiantes.length] = "Lucas"

    console.log(estudiantes)

*/

/*

    Ejercicio 2: Crear una funcion que reciba una lista de estudiantes y un estudante, y lo coloque a este al final
    del arreglo

    const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

    function agregarEstudiante(lista, estudiante){
        lista[lista.length] = estudiante
        
        console.log(lista)
    }

    agregarEstudiante(estudiantes, "Jorge")
    agregarEstudiante(estudiantes, "Pepe")

*/

/*

    Ejercicio 3: Crear una funcion que agregue un estudiante al comienzo del arreglo.

    const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

    function agregarEstudianteAlComienzo(lista, estudiante){
        lista.reverse()
        lista[lista.lenght] = estudiante
        lista.reverse()

        console.log(lista)
    }

    agregarEstudianteAlComienzo(estudiantes, "Nico")

*/

/*****************************************************************************************************************/

/***** METODOS NATIVOS *****/

/*
    
    push(elemento) -> Permite agregar un elemento al final del array.
    unshift(elemento) -> Permite agrear un elemento al comienzo del array.
    pop() -> Permite sacar el ultimo elmento del array.
    shift() -> Permite sacar el primer elemento del array. 
 
*/

/*

    Ejercicio 4: Crear una funcion que reciba una lista y un estudiante, y elimine dicho estudiante de la lista.

    const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

    function eliminarEstudiante(lista, estudiante){
        const estudiantesFiltrados = []

        for(let i = 0; i < lista.length; i++){
            if(lista[i] !== estudiante){
                estudiantesFiltrados.push(lista[i])
            }
        }
        return estudiantesFiltrados
    }

    console.log(eliminarEstudiante(estudiantes, "Laura"))

*/

/*****************************************************************************************************************/

/*

    En 2015 se integraron 2 bucles nuevos, que existen a su vez en otros lenguajes como Python, y son los 
    siguientes:
    forof -> Para recorrer arrays de principio a fin nada mas, sin especificar un contador, la condicion e incremento.
             Siempre arranca de principio a fin por lo que no sera posible iniciar desde una posicion especifica, y 
             tampoco se puede hacer que vaya en reversa, del ultimo al primero.
             Este ciclo tiene un orden de especificidad menor que el for.
    forin -> Para recorrer objetos.

*/

/*
    Ejercicio 5: Rehacer el ejercicio 4 pero con forof.

*/

    const estudiantes = ["Jony", "Joha", "Jero", "Franco", "Laura"]

    function eliminarEstudiante(lista, estudiante){
    const estudiantesFiltrados = []

    for(const elemento of lista){
        if(elemento !== estudiante){
            estudiantesFiltrados.push(elemento)
        }
        }
        return estudiantesFiltrados
    }

    console.log(eliminarEstudiante(estudiantes, "Laura"))


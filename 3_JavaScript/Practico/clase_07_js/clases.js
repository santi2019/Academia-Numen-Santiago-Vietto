/********* CLASES **********/

/*
    Las clases son basicamente una lavada de cara de la funcion constructora para que se parezcan mas a las 
    plantillas constructoras de objetos que usan todos los otros lenguajes, lo cual dichas plantillas no son
    funciones sino que son un objeto creador de objetos.
    Se define dentro de la clase un constructor para poder recibir parametros, y los atributos se crean ahi dentro.
    Los objetos de tipo class son de tipo funciones.
*/


class Persona {
    constructor(brazos, piernas, frase){
        this.brazos = brazos,
        this.piernas = piernas,
        this.frase = frase
    }

    decirFrase(){
        return this.frase
    }

}

// console.log(typeof Persona)

const santi = new Persona(2, 2, "Esto es BOCA!")
console.log(santi.decirFrase())

/***** Herencia *****/

/*
    Para poder heredar propiedades se utiliza la palabra reservada extends, se añade un constructor y para que
    pueda tener los atributos de la clase padre se utiliza la palabra reservada super.
*/

class Empleado extends Persona{
    constructor(brazos, piernas, frase, salario, aguinaldo){
        super(brazos, piernas, frase),
        this.salario = salario,
        this.aguinaldo = aguinaldo
    }

    decirFrase(){
        return this.frase
    }
}

const pablo = new Empleado(2, 1, "Pasame la muleta", 600000, 300000)
console.log(pablo.decirFrase())

/*****************************************************************************************************************/
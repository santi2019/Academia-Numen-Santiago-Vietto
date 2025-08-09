/********* ESTRUCTURAS DE CONTROL DE FLUJO **********/

/* 

var llueve = false;

console.log("Inicio")
console.log("Introduccion 1")
console.log("Introduccion 2")

if(llueve){
    console.log("Introduccion 3")
} else {
    console.log("Introduccion 4")
}

console.log("Introduccion 5")
console.log("Fin")

*/



/***** ELSE IF *****/

/*

var numero = 9;

if(numero > 10){
    console.log("Es mayor que 10")
} else if(numero < 10){
    console.log("Es menor que 10")
} else {
    console.log("Es igual a 10")
}

*/

/*****************************************************************************************************************/

/****** IFs NO EXCLUYENTES ******/

/*

var sabado = true;
var viernes = false;
var lunes = false;

if(viernes || sabado){
    console.log("Como chocolate")
}
if(lunes || sabado){
    console.log("Como una picadita")
}

*/

/*****************************************************************************************************************/

/***** SWITCH CASE *****/

var producto = 5;

switch(producto){
    case 1:
        console.log("Cafe")
        break;
    case 2:
        console.log("Te")
        break;
    case 3:
        console.log("Aguita")
        break;
    case 4:
        console.log("Energizante")
        break;
    default:
        console.log("CD de maluma")
}
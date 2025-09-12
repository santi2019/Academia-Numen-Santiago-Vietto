import React, { useEffect, useState } from 'react'

const Contador = () => {


    const initialState = 0;
    const [contador, setContador] = useState(initialState)

    /* 
        La siguiente solucion no es optima porque no tiene la capacidad de recordar durante el proceso
        pero si durante la ejecucion. Tenemos un reinicio permanente de la variable getter. El getter
        es una constante, por ende no podemos hacer esta estrategia
            const incrementar = () => {
                setContador(contador + 1);
                setContador(contador + 1);
                setContador(contador + 1);
            }
            const resetear = () => setContador(0);
            const decrementar = () => setContador(contador - 1);

        Para resolverlo debemos modificar el retorno del state. Lo que esta retornando debe ser un valor
        diferente. No cambiamos la variable original, sino que usamos una variable en lugar de otra como
        si crearamos copias virtuales. Entonces, tomamos el estado, lo modificamos y lo retornamos con un 
        nuevo estado que tenga la actualizacion, pero se lo modifica dentro de la funcion. No se le pega
        a la variable original, la funcion recibe una copia como argumento, a dicha copia se la incrementa
        y se retorna esa copia visual, pero como no se modifica la original, al momento de refrescar la 
        pantalla se vuelve a mostrar la variable en su valor original.
        Las hojas de calcar son cada ejecucion de las funciones de incrementar, resetear y drecrementar. Pero
        las diferentes ejecuciones de incrementar son sobre la misma hoja de calcar.

        const incrementar = () => {
            setContador((contador) => {
                return contador + 1;     // Se incrementa la copia a 1, y pasa a la funcion siguiente.
            })
            setContador((contador) => {
                return contador + 1;     // Se incrementa la copia a 2, y pasa a la funcion siguiente.
            })
            setContador((contador) => {
                return contador + 1;     // Se incrementa la copia a 3, y retorna el valor, pero al refrescar vuelve al valor original.
            })
        }

        Un cambio mas a considerar es que, el valor del estado inicial y el reseteo son el mismo, pero si se cambia el valor inicial,
        pueden no coincidir, entonces lo que se hace es que ambos valores vengan por referencia, por lo tanto si la constante declarada
        cambia, cambiaran el estado inicial y el reseteo.


        En los corchetes del useEffect, se puede pasar un estado para que, cuando detecte que el estado que le pasamos recibio una 
        actualizacion, va a ejecutar el contenido dentro del useEffect.
        
    */


    useEffect(() => {
        if (contador){
            console.log("El contador ha sido incrementado.")
        }else{
            console.log("DOM Cargando...")
        }
    }, [contador])

    const incrementar = () => setContador((contador) => contador + 1 )
    const resetear = () => setContador(initialState);
    const decrementar = () => setContador((contador) => contador - 1 )

  return (
    <>
        <div className="contador">
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
            </div>
            <h3>{contador}</h3>
        </div>

        <style jsx>{`
            .contador{
                align-items: center;
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </>
  )
}

export default Contador

import React, { useState, useEffect } from 'react'

const Reloj = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let temporizador;  // undefined

        if(isVisible){
            // Fase de montaje
            temporizador = setInterval(() => {
                // Fase de actualizacion
                setHora(new Date().toLocaleTimeString())
            }, 1000);
        }

        // Fase de desmontaje
        return () => clearInterval(temporizador);  // Setea temporizador a undefined
        
    }, [isVisible])
    
    

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {isVisible && <h3>{hora}</h3>}
      <div>
        {/*<button onClick={() => setIsVisible(true)}>Iniciar</button>
        <button onClick={() => setIsVisible(false)}>Detener</button>*/}
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Detener" : "Iniciar"}</button> {/* Metodologia Toggle */}
      </div>
    </>
  )
}

export default Reloj

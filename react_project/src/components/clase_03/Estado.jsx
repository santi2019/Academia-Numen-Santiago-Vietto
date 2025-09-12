import React, { useState } from 'react'

const Estado = () => {

    const [cabello, setCabello] = useState("Morocho")  // Retorna un array [].



  return (
    <>
        <div> Cabello: {cabello} </div>
        <button onClick={() => setCabello("Rubio")}>Actualizar a SSJ 1</button> 
    
    </>
    
  )
}

export default Estado

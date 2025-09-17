import React, { useReducer, useState } from 'react'
import { TYPES } from '@/reducer/actions/actions';
import { initialState } from '@/reducer/Initial_state/initialState';
import { reducer } from '@/reducer/reducer/reducer';


const Contador2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const incrementar = () => dispatch({type: TYPES.INCREMENTAR})
    
    const resetear = () => dispatch({type: TYPES.RESETEAR})

    const decrementar = () => dispatch({type: TYPES.DECREMENTAR})
    
    const handleVisibility = () => dispatch({type: TYPES.MOSTRAR})


  return (
    <>
        <div className="contador">
            <div>
                <button onClick={decrementar}>-</button>
                <button onClick={resetear}>0</button>
                <button onClick={incrementar}>+</button>
                <button onClick={handleVisibility}>Mostrar</button>
            </div>
            { state.isVisible && <h3>{state.contador}</h3> }
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

export default Contador2

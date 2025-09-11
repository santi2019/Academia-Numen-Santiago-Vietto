
import React from 'react'


/* 
  La propiedad del objeto se recibe por parametro, y podemos usarla en el CSS porque es una
  cadena templada.
  Si usamos este componente de forma aislada, y no en Tarjeta, es necesario aclararle el valor
  de la propiedad bgColor, que se pasa por parametro, para que se adapte.
  Lo mismo podemos agregar logica en funcion de las propiedades del objeto, y de igual forma
  se deben adaptar los componentes aislados que se hayan referenciado.
*/
const Boton = (props) => {
  return (
    <>
        <button>{props.text ? props.text : "Agregar"}</button>

        <style jsx>{`
            button{
                background-color: ${props.bgColor};
                border: none;
                border-radius: 5px;
                box-shadow: 0px 4px 3px -3px gray;
                color: white;
                font-weight: bold;
                padding: 10px 20px;
                text-trasform: uppercase;
            }   
        `}</style>
    </>
  )
}

export default Boton

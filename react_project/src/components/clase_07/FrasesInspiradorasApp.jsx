import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Cita from './Cita'
import Loader from './Loader';

const citaInicial = {
    cita: "",
    autor: "",
    categoria: ""
}; 

const FrasesInspiradorasApp = () => {

  const [cita, setCita] = useState(citaInicial);

  const [estaCargando, setEstaCargando] = useState(false);

  const obtenerCita = async () => {

    setEstaCargando(true);

    const ENDPOINT = "https://api.api-ninjas.com/v1/quotes";
    const options = {
        method: "GET",
        headers: { "X-Api-Key": "CCRvg4H0xrk4D7Rb3YSjTA==7ivJcutKpaNCuzBC" },
    };
    // const response = await fetch(ENDPOINT, options);
    // const data = await response.json();
    const response = await axios(ENDPOINT, options);
    const data = await response.data;
    const [nuevaCita] = data;
    const {quote, author, category} = nuevaCita;

    setCita(() => {
        return {
            cita: quote,
            autor: author,
            categoria: category
        }
    });

    setTimeout(() => {
        setEstaCargando(false);
    }, 1500)
  };


  useEffect(() => {
    obtenerCita();
  }, []);


  return (
    <>
        <section>
            <img src="https://pymstatic.com/3670/conversions/frases-geniales-personajes-celebres-small-16_9.jpg" alt="frases inspiradoras banner" />
            {estaCargando ? <Loader/> : <Cita data={cita}/>}
            <button onClick={obtenerCita}>Pedir otra cita</button>
        </section>

        <style jsx>{`
            section{
                border-radius: 0.8rem;
                box-shadow: 0px 0px 15px -5px gray;
                display: flex;
                flex-direction: column;
                padding: 1rem;
                width: 400px;
            }
            img {
                border-top-left-radius: 0.8rem;
                border-top-right-radius: 0.8rem;
                width: 100%;
            }
            button {
                align-self: center;
                background-color: #242791;
                border: none;
                border-radius: 0.4rem;
                color: #F9DA2A;
                font-weight: bold;
                font-size: 1.1rem;
                padding: 10px 20px;
                text-transform: uppercase;
                width: 50%;
            }
            
        `}</style>
    </>
  )
}

export default FrasesInspiradorasApp

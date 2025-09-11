import Boton from "./Boton";

/* 
    El objeto se puede recibir por parametro, y podemos entrar a cualquier propiedad que necesitemos.
    Cada card extrae las propiedades del objeto que se alojo en su objeto props.
    Para el color del boton, le pasamos como parametro la propiedad del objeto props, al componente
    Boton.
    Tambien es posible declarar las propiedades del objeto como variables en el ambito global, y usar
    las variables en lugar de la declaracion completa.
*/
const Tarjeta = (props) => {

    // const {image, title, description, bgColor} = props.destino

    return (
        <>
            <div className="card">
                <img 
                    src={props.destino.image} 
                    alt="" 
                />
                <div className="description">
                    <h3>{props.destino.title}</h3>
                    <p>{props.destino.description}</p>
                </div>
                <Boton bgColor={props.destino.bgColor}/>
            </div>

            <style jsx>{`
                .card{
                    align-items: center;
                    border-radius: 20px;
                    box-shadow: 0px 4px 10px -3px gray;
                    display: flex;
                    flex-direction: column;
                    width: 275px;
                    padding-bottom: 10px;
                }
                    
                img{
                    height: 200px;
                    object-fit: cover;
                    width: 100%;
                }

                .description{
                    padding: 5%
                }

                h3{
                    font-size: 2rem;
                }

                h3, p{
                    line-height: 1;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

export default Tarjeta;
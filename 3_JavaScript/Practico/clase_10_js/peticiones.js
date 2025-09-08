/********* PETICIONES **********/

/*
    Servidor: Basicamente es otro dipositivo, el cualpuede ser una computadora normal, un mobil o una computadora
    gigantesca con mucha memoria.
    Hay ciertas ocasiones en las que necesitamos recurrir a grandes cantidades de informacion que solo estan disponibles
    en bases de datos en el servidor. Con esa informacion podemos crear tarjetas, tablas, listas y muchas cosas mas.
    Tener toda esa informacion en el servidor nos permite poder recurrir a ella en todo momento.
    El servidor puede alojar una enorme cantidad de informacion que de tenerla dentro de nuestro proyecto haria que
    este fuese muy pesado.
    El backend puede ser consumido por muchos frontends diferentes, y cuando se pide informacion a un servidor, esta
    se despacha en forma de un nuevo objeto llamado objeto de eticion u objeto request. EL backend analiza dicho
    request, en cuanto a estructura y datos, y si todo esta correcto el backend devuelve otro objeto llamado 
    objeto de respuesta u objeto response.
    A su vez se puede extraer parte de la informacion de una base de datos para crear fracciones mas pequeñas y de
    mas facil acceso para su consumision: APIs (Interfaz de programacion de aplicaciones).
    
    API: Es un backend o un conjunto de definiciones y protocolos que se utilizan para desarrollar e integrar el
    software de las aplicaciones. 
   
    Endpoint: Es cualquier dispositivo que sea fisicamente la parte final de una red como, por ejemplo,. Las 
    computadoras de escritorio, las tablets, los mobiles, dispositivos de oficinas como routers, impresoras, camaras 
    de seguridad, etc.
    Los servidores tambien pueden ser considerados endpoints porque tambien estan conectados a la red.
    Entonces, basicamente cualquier dispositivo final conectado a la red es un endpoint.
    Al desarrollar un backend, levantamos el servicio en una ruta determinada y a su vez puede contener subrutas:
        - /users/self
        - /users/user-id
        - /users/self/media/recent
    Estas rutas se llaman endpoints porque son el punto final de la busqueda o peticion de informacion. Y se crean
    tantas rutas como sea necesario. Hay rutas que solo traen informacion y otras en las que son necesarios parametros
    para filtrar la informacion.

    Objeto XMLHTTPRequest: Objeto nativo de JS que se utilizaba originalmente para hacer peticiones. Esta dividido 
    en tres partes:
        - XML o Lenguaje de Marcado Extensible (texto plano con forma de HTML o etiquetas), el cual acomoda la 
          informacion de una determinada manera, para que despues esa informacion se pueda transformar a JS. 
        - HTTP o Hyper Text Trasfer Protocol, el cual es un objeto que contiene metodos y propiedades para permitirnos
          interactuar con el servidor. Normalmente lo que se utiliza de este objeto son acciones que nos permiten
          interactuar con el backend:
          - GET: Pedir informacion.
          - POST: Insertar informacion.
          - PUT: Editar informacion.
          - DELETE: Eliminar informacion.
        Una aplicacion capaz de permitir el uso de desas cuatro acciones se la conoce como CRUD, ya que permite
        Create (POST), Read (GET), Update (PUT) y Delete (DELETE).
        - Request: La peticion al backend. 
    Este objeto se instancia ya que es una clase, y es posible acceder a sus metodos. Pero su mecanismo es molesto
    ya que demanda de muchas lineas de codigo para realizar peticiones. Pero desde el año 2015 se lo reemplazo
    por fetch().

    fetch: Hace los mismo que XMLHTTPRequest, es decir, ejecutar una peticion a un servidor, pero con una funcion
    nativa mas practica en lugar de instanciar un objeto, y asi consultar en una sola linea de codigo. Este no
    se comunica con el backend a travez de XML, sino que lo hace a traves de JSON.
        - JSON o JS Object Notation, el cual en lugar de ser un lenguaje de marcado, es un sistema de notacion
          con forma de objeto. Todo el objeto JSON no esta guardado en una variable, sino que la estructura es
          un objeto cliente, por otro lado, las propiedades son como strings. Pero en si, esto no es codigo, sino
          que es texto plano estetico. 
          Es necesaria su estructura porque JS tiene metodos para convertir texto plano con estructura JSON a un
          objeto real de JS. Si el texto plano no tiene estructura de JSON, saldra un error.
          El backend y el frontend se intercambian entre si solamente texto plano, es por eso que podemos tener
          un frontend en JS y un backend en Python, GO, JS, etc.
    Espera como argumento un endpoint.
    Es un tipo de funcion asincronica, es decir depende del tiempo de respuesta del servidor y ademas hasta que 
    se resuelva la peticion se debe seguir cargando el resto del sitio. 
    La funcion de then() se ejecuta solo y solo si, el fetch se resolvio.
    La respuesta del servidor es un objeto con:
        - body: Dentro de este esta la informacion que nosotros pedimos. No se puede ver porque es de tipo
          ReadableStream, es decir, texto plano y JS no lo entiende. Por ende, se agarra dicho texto plano que 
          esta en JSON y se lo pasa a JS.
        - headers
        - status: Codigo de estado de respuesta que informa como salio la peticion. Hay codigos que indican que
          salio todo bien, todo mal, que se espere, que se busque la informacion en otro lado, o que salio todo
          mal pero la culpa es nuestra. Entonces, tenemos cinco categorias:
          - Respuestas informativas (100–199) (Esperar porque se esta procesando todavia)
          - Respuestas satisfactorias (200–299) (Salio todo bien)
          - Redirecciones (300–399) (No esta aca, buscar en otro lado)
          - Errores de los clientes (400–499) (Salio mal pero es nuestra culpa)
          - Errores de los servidores (500–599) (Salio mal pero no es nuestra culpa)
        - statusText: Usualmente cada codigo de estado de respuesta viene con una informacion.
    A la respuesta en texto plano se le aplica el metodo json para poder obtenerlo y que lo entienda JS y asi
    usar la informacion.

    fetch("https://api.breakingbadquotes.xyz/v1/quotes").then((response)  => console.log(response))


    const $quote = document.querySelector(".quote");

    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then((response)  => response.json())
        .then((quote) => {
            $quote.innerHTML = `
                <p>${quote[0].quote}</p>
                <h3>${quote[0].author}</h3>
            `
        });
*/

    const $quotes = document.querySelector(".quotes");

    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
        .then((response)  => response.json())
        .then((quotes) => {
            quotes.forEach(quote => {
                const $quote = document.createElement('div');
                $quote.className = "quote";
                $quote.innerHTML = `
                    <p>${quote.quote}</p>
                    <h3>${quote.author}</h3>
                `;
                $quotes.appendChild($quote);
            });
            console.log($quotes);


            /* Solucion con for
            for(const quote of quotes){
                const $quote = document.createElement('div');
                $quote.className = "quote";
                $quote.innerHTML = `
                    <p>${quote.quote}</p>
                    <h3>${quote.author}</h3>
                `;
                $quotes.appendChild($quote);
            }
            console.log($quotes);
            */
        });


// 56:53


/*****************************************************************************************************************/

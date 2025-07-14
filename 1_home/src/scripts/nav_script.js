/* Codigo que permite que la barra de navegacion cambie de color. */

// Conexion con la etiqueta que tiene la clase nav-container. Se guarda el container en la
// variable "navbar".
var navbar = document.querySelector('.nav_container');

// La palabra "window" hace referencia a la pagina web del navegador.
// Entonces, cuando se haga scroll en la pagina...
window.onscroll = () => {

    // Si se hizo scroll pasando los 20 pixeles desde el top de la pantalla...
    if(window.scrollY > 20){

        // Se le agrega a la etiqueta "navbar", con la que nos conectamos, la clase nav-active.
        navbar.classList.add('nav_active');
    } else{

        // Caso contrario, si estamos a menos de 20 pixeles, se quita la clase nav-active.
        navbar.classList.remove('nav_active');
    }
}

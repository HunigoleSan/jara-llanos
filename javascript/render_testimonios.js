import cards from "./components/testimonios_cards.js";
import coloresSuaves from "./data/testimonios_color_nombre.js"
import Testimonios_cards from "./data/testimonios_cards.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_testimonios = document.getElementById("testimonios-cards")

    Testimonios_cards.forEach(iterador => {
        let numeroRandom = numeroAletorio(coloresSuaves.length)
        let user ={
            nombre: iterador.nombre,
            empresa: iterador.empresa,
            lugar: iterador.lugar,
            comentario: iterador.comentario,
            background: coloresSuaves[numeroRandom]
        }
        let component = cards(user)
        contenedor_testimonios.insertAdjacentHTML("beforeend", component)
    });
})


function numeroAletorio(cantidadDeLaLista){
    return Math.floor(Math.random() * cantidadDeLaLista);
}
import cards from "./components/testimonios_cards.js";
import Testimonios_cards from "./data/testimonios_cards.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_testimonios = document.getElementById("testimonios-cards")
    Testimonios_cards.forEach(iterador => {
        let component = cards(iterador.foto, iterador.nombre, iterador.empresa, iterador.lugar, iterador.comentario)
        contenedor_testimonios.insertAdjacentHTML("beforeend", component)
    });
})
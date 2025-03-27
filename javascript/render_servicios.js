import cards from "./components/servicios_cards.js";
import Servicios_cards from "./data/servicios_cards.js";

window.document.addEventListener("DOMContentLoaded", function(){
    let contenedor_servicios = document.getElementById("servicios-cards")
    Servicios_cards.forEach(iterador => {
        let component =  cards(iterador.icono, iterador.nombre, iterador.descripcion, iterador.tipos)/* undefined */
        contenedor_servicios.insertAdjacentHTML("beforeend", component)
    });
})
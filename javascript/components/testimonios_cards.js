function cards (foto, nombre, empresa, lugar, comentario){
        let Testimonios_cards = 
        `<article class="test-card">
            <div class="card-datos">
                <div class="datos-usuario">
                    <img class="datos-foto" src="./assets/img/testimonios/${foto}.png" alt="">
                <div class="datos-nombre">
                    <h3>${nombre}</h3>
                    <p>${empresa}</p>
                </div>
            </div>
                <img class="datos-lugar" src="./assets/img/testimonios/${lugar}.png" alt="">
            </div>
            <div class="card-comentario">
                <p>${comentario}</p>
            </div>
        </article>`;

        return Testimonios_cards;
}

export default cards
function cards (user_testimonio){
    
    /* Destructuramos el objeto para no tener muchos parametros en la función */
    let {nombre,empresa,lugar,comentario,background} = user_testimonio
    
    let verMas = mostrarVerMasDelComentario(comentario),
        firstLetterName = nombre[0];

    let Testimonios_cards = 
    `<article class="test-card">
        <section class="card-datos">
            <section class="datos-usuario">
                <div class='first-letter-name ${background}'>${firstLetterName}</div>
                <section class="datos-nombre">
                    <h3>${nombre}</h3>
                    <p>${empresa}</p>
                </section>
            </section>
            <img class="datos-lugar" src="./assets/img/testimonios/${lugar}.png" alt="">
        </section>
        <section class="card-comentario">
            <p>${comentario}</p>
            ${verMas}
        </section>
    </article>`;
    return Testimonios_cards;
}

function mostrarVerMasDelComentario(comentario){
    let verMas = ""
    if(comentario.length >= 350){
        verMas = "<span class='ver_mas'>Ver más</span>"
    }
    return verMas
}

export default cards
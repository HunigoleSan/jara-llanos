function cards(icono, nombre, descripcion){
    let icono_html = "";
    if (icono.includes("svg")){
        icono_html = icono
    } else{
        icono_html = `<img class='card__img' src="assets/img/servicios/${icono}.png" alt="${nombre}">`
    }

    let Servicios_cards = 
    `<article class="card">
        ${icono_html}
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
    </article>`;

    return Servicios_cards;
}

export default cards
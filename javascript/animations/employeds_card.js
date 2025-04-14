let bandera = false;

window.document.addEventListener("scroll", ()=>{
    if(window.scrollY > 2500 && !bandera){
        efectoAparicion()
        console.log("efecto aparicion, estoy en escritorio")
        bandera = true
    }else if(window.scrollY < 2500 && bandera){
        console.log("efecto ocultar")
        bandera = false
        efectoOcultar()
    }
    
    
})


function efectoAparicion(){
    const cardsEmployeds = document.querySelectorAll(".employeds_card")

    cardsEmployeds.forEach((element, index) => {
        setTimeout(()=>{
            element.classList.add("efecto-aparicion-employeds")
        }, 300 * index)
        
    });
}

function efectoOcultar(){
    const cardsEmployeds = document.querySelectorAll('.employeds_card') /* NodeElement */
    
    cardsEmployeds.forEach((element,index) => {
        setTimeout(()=>{
            element.classList.remove("efecto-aparicion-employeds")

        },300 * (index + 1))
    });
}


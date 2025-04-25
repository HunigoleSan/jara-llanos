let bandera = false;
let widthBandera = false
let scrollYe = 0

window.document.addEventListener("scroll", ()=>{
    modificarAncho()

    if(window.scrollY > scrollYe && !bandera){
        efectoAparicion()
        console.log("efecto aparicion, estoy en escritorio")
        bandera = true
    }else if(window.scrollY < scrollYe && bandera){
        console.log("efecto ocultar")
        bandera = false
        efectoOcultar()
    }
    
})
function modificarAncho(){
    if(window.innerWidth > 1239 && !widthBandera){
        scrollYe = 2124
        widthBandera = true
    }else if(window.innerWidth < 1240 && bandera){
        widthBandera = false

    }

    else if(window.innerWidth > 1082 && !widthBandera){
        scrollYe = 2552
        widthBandera = true
    }else if(window.innerWidth < 1083 && bandera){
        widthBandera = false
    }
    
    else if(window.innerWidth > 817 && !widthBandera){
        scrollYe = 3505
        widthBandera = true
    }else if(window.innerWidth < 818 && bandera){
        widthBandera = false

    }

    else if(window.innerWidth > 590 && !widthBandera){
        scrollYe = 3444
        widthBandera = true
    }else if(window.innerWidth < 591 && bandera){
        widthBandera = false

    }
    
    else if(window.innerWidth > 280 && !widthBandera){
        scrollYe = 4677
        widthBandera = true
    }else if(window.innerWidth < 281 && bandera){
        widthBandera = false

    }
}


function efectoAparicion(){
    const cardsEmployeds = document.querySelectorAll(".employeds_card")

    cardsEmployeds.forEach((element, index) => {
        setTimeout(()=>{
            element.classList.add("efecto-aparicion-employeds")
        }, 300 * index)
        
    });
}

/* function efectoOcultar(){
    const cardsEmployeds = document.querySelectorAll('.employeds_card') 
    
    cardsEmployeds.forEach((element,index) => {
        setTimeout(()=>{
            element.classList.remove("efecto-aparicion-employeds")

        },300 * (index + 1))
    });
}
 */

let bandera = false
let scrollYs = 0
let widthBandera = false

window.document.addEventListener('scroll',()=>{
    
    efectoAparicion()
    if(window.scrollY > scrollYs && !bandera){
        efectoAparicion()
        console.log("efecto aparicion ")
        bandera = true
    }else if(window.scrollY < scrollYs && bandera){
        bandera = false
        
    }

    
})


window.document.addEventListener('DOMContentLoaded',()=>{
    
})

function modificarAncho(){
    if(window.innerWidth > 1239 && !widthBandera){
        scrollYs = 32
        widthBandera = true
    }else if(window.innerWidth < 1240 && bandera){
        widthBandera = false

    }

    else if(window.innerWidth > 1082 && !widthBandera){
        scrollYs = 330
        widthBandera = true
    }else if(window.innerWidth < 1083 && bandera){
        widthBandera = false
    }
    
    else if(window.innerWidth > 817 && !widthBandera){
        scrollYs = 229
        widthBandera = true
    }else if(window.innerWidth < 818 && bandera){
        widthBandera = false

    }

    else if(window.innerWidth > 500 && !widthBandera){
        scrollYs = 160
        widthBandera = true
    }else if(window.innerWidth < 501 && bandera){
        widthBandera = false

    }
    
    else if(window.innerWidth > 280 && !widthBandera){
        scrollYs = 120
        widthBandera = true
    }else if(window.innerWidth < 281 && bandera){
        widthBandera = false

    }
}

function efectoAparicion(){
    const cardList = document.querySelectorAll('.card') /* NodeElement */
    
    cardList.forEach((element,index) => {
        setTimeout(()=>{
            element.classList.add("efecto-aparicion")

        },300 * (index + 1))
    });
}


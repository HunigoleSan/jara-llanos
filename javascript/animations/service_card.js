let bandera = false

window.document.addEventListener('scroll',()=>{
    if(window.scrollY > 330 && !bandera){
        efectoAparicion()
        console.log("efecto aparicion ")
        bandera = true
    }else if(window.scrollY < 330 && bandera){
        console.log("efecto ocultar")
        bandera = false
        efectoOcultar()
    }

    
})


window.document.addEventListener('DOMContentLoaded',()=>{
    
})

function efectoAparicion(){
    const cardList = document.querySelectorAll('.card') /* NodeElement */
    
    cardList.forEach((element,index) => {
        setTimeout(()=>{
            element.classList.add("efecto-aparicion")

        },300 * (index + 1))
    });
}

function efectoOcultar(){
    const cardList = document.querySelectorAll('.card') /* NodeElement */
    
    cardList.forEach((element,index) => {
        setTimeout(()=>{
            element.classList.remove("efecto-aparicion")

        },300 * (index + 1))
    });
}